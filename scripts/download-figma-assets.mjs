#!/usr/bin/env node
/**
 * Download rendered PNGs for Figma node IDs via the Figma REST API.
 *
 * 1. Create a token: Figma → Settings → Security → Personal access tokens
 * 2. In Figma, select a frame → copy link. node-id=1-2 means node ID is 1:2 for the API.
 *
 * Usage:
 *   FIGMA_ACCESS_TOKEN=figd_... node scripts/download-figma-assets.mjs 95:1546 11:182
 *
 * Or:
 *   FIGMA_ACCESS_TOKEN=... FIGMA_FILE_KEY=gk5owlgTOfjHI4oXPwrZnB FIGMA_NODE_IDS="95:1546,11:182" node scripts/download-figma-assets.mjs
 *
 * Output: public/images/figma/<nodeId>.png
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const token = process.env.FIGMA_ACCESS_TOKEN;
const fileKey = process.env.FIGMA_FILE_KEY || "gk5owlgTOfjHI4oXPwrZnB";

const fromEnv = process.env.FIGMA_NODE_IDS?.split(/[\s,]+/).filter(Boolean) ?? [];
const fromArgv = process.argv.slice(2).map((id) => id.replace(/-/g, ":")).filter(Boolean);
const nodeIds = [...new Set([...fromEnv, ...fromArgv])];

if (!token) {
  console.error("Missing FIGMA_ACCESS_TOKEN (Figma → Settings → Personal access tokens)");
  process.exit(1);
}
if (nodeIds.length === 0) {
  console.error(
    "Pass node IDs as args (e.g. 95:1546 or 95-1546) or set FIGMA_NODE_IDS=95:1546,11:182",
  );
  process.exit(1);
}

const idsParam = nodeIds.join(",");
const apiUrl = `https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(idsParam)}&format=png&scale=2`;

const res = await fetch(apiUrl, { headers: { "X-Figma-Token": token } });
const data = await res.json();

if (!res.ok || data.err) {
  console.error("Figma API error:", data.err || data);
  process.exit(1);
}

const outDir = path.join(__dirname, "..", "public", "images", "figma");
fs.mkdirSync(outDir, { recursive: true });

for (const [nodeId, imageUrl] of Object.entries(data.images || {})) {
  if (!imageUrl) {
    console.warn("No URL for node", nodeId, "(empty or not renderable)");
    continue;
  }
  const imgRes = await fetch(imageUrl);
  if (!imgRes.ok) {
    console.warn("Failed to fetch image for", nodeId);
    continue;
  }
  const buf = Buffer.from(await imgRes.arrayBuffer());
  // nodeId comes from a remote resource; only allow the expected "digits:digits(:digits...)" shape.
  if (!/^[0-9]+(:[0-9]+)*$/.test(nodeId)) {
    console.warn("Skipping unexpected nodeId from Figma:", nodeId);
    continue;
  }
  const safe = nodeId.replace(/:/g, "-");
  const outPath = path.join(outDir, `${safe}.png`);
  const resolvedOutPath = path.resolve(outPath);
  if (!resolvedOutPath.startsWith(`${outDir}${path.sep}`)) {
    // Defensive check: ensures we never write outside of `outDir`.
    throw new Error(`Refusing to write outside output directory: ${outPath}`);
  }
  fs.writeFileSync(resolvedOutPath, buf);
  console.log("Wrote", path.relative(path.join(__dirname, ".."), resolvedOutPath));
}
