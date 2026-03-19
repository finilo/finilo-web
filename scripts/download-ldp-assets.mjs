/**
 * One-off: download Figma MCP asset URLs from design export into public/images/ldp/
 * Run: node scripts/download-ldp-assets.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "ldp");

const assets = {
  logo: "https://www.figma.com/api/mcp/asset/a0e47b3c-6b27-495e-928f-871c04feefcc",
  group22: "https://www.figma.com/api/mcp/asset/ed5e0ef4-999d-43e7-a2b3-cbc42e878429",
  duolingo: "https://www.figma.com/api/mcp/asset/8e905979-3444-4cd2-9229-f451f94b7a80",
  iconJpeg: "https://www.figma.com/api/mcp/asset/6e6d25c0-b8ce-47fc-9141-9be6351169d9",
  discord: "https://www.figma.com/api/mcp/asset/c5ebfdfc-6e8c-4119-bf1a-e6bf9a7c175b",
  iconJpeg1: "https://www.figma.com/api/mcp/asset/ec7bbc80-9a35-4f12-9546-d5306b4f9822",
  iconJpeg2: "https://www.figma.com/api/mcp/asset/1bb73b54-9369-4778-a0ad-c103c550f388",
  chatgpt: "https://www.figma.com/api/mcp/asset/e31e3aff-c6db-4923-aa5c-84813400866a",
  vector: "https://www.figma.com/api/mcp/asset/91ce85f9-9abd-4292-92a7-5c6106dd0e38",
  perplexity: "https://www.figma.com/api/mcp/asset/c1fdf415-9567-45c7-9864-19883ce2c87b",
  vector1: "https://www.figma.com/api/mcp/asset/6850b6d2-23e4-4813-ac4c-278cb7066aed",
  vector2: "https://www.figma.com/api/mcp/asset/c496b701-d3cf-4210-bc60-e252f8011eb2",
  vector3: "https://www.figma.com/api/mcp/asset/50793216-acc1-4a5e-94d7-0dbc502ca661",
  paramount: "https://www.figma.com/api/mcp/asset/eeaa9053-7fd0-43d6-a30f-87b4816c94b4",
  vector4: "https://www.figma.com/api/mcp/asset/25fe33cb-2faf-4c07-a4b5-f80177a5204b",
  group: "https://www.figma.com/api/mcp/asset/0765c55c-b88f-42ca-bca9-6722bcc387c3",
  group1: "https://www.figma.com/api/mcp/asset/18761df0-84c2-4d66-ba82-a5109c54683b",
  g12: "https://www.figma.com/api/mcp/asset/2872f3b9-dffa-449a-96ba-c24d19ada457",
  vector5: "https://www.figma.com/api/mcp/asset/6cb226a2-b7e4-4c3f-bebf-100769a04d64",
  maskGroup: "https://www.figma.com/api/mcp/asset/d8e46614-422c-4c6f-b9a2-5dee26d00743",
  vector6: "https://www.figma.com/api/mcp/asset/40865ad1-59e0-423a-8216-21cb214daef7",
  vector7: "https://www.figma.com/api/mcp/asset/e3040ce0-0ef1-47ba-8a80-6162366b90f8",
  vector8: "https://www.figma.com/api/mcp/asset/ec6b9ede-4a0e-426a-ad91-33417cc3939a",
  path2520: "https://www.figma.com/api/mcp/asset/2ed6ef6f-2ebb-4ead-8160-7fe6ab378a02",
  g13: "https://www.figma.com/api/mcp/asset/1d7aa9fd-616c-460b-a5d8-0ed33f4d3ee2",
  g3646: "https://www.figma.com/api/mcp/asset/5d6b0a77-a798-446c-b529-0c6a1443aabc",
  g823: "https://www.figma.com/api/mcp/asset/4e6ea600-e05f-4ed2-8d4b-649b1f4106ec",
  menuBar: "https://www.figma.com/api/mcp/asset/5287ac40-2805-4580-92ed-58e19f24461b",
  wallet: "https://www.figma.com/api/mcp/asset/104f4171-6a41-4ff5-81ce-6c3a55b68cf8",
  finiloIcon: "https://www.figma.com/api/mcp/asset/8f6668f2-34d5-4c46-a15d-5d01257eaa7d",
  rectangle2: "https://www.figma.com/api/mcp/asset/7071cd8f-8d34-4f80-8dee-3d2600caf4f6",
  adobe: "https://www.figma.com/api/mcp/asset/13cea0ce-7ee9-4fd1-9939-06e34eae0957",
  appleMusic: "https://www.figma.com/api/mcp/asset/88097440-5320-4816-9166-0c2f1770f864",
  img10995329: "https://www.figma.com/api/mcp/asset/6c5d2bc8-2d39-4cc3-a011-a217e431fafe",
  netflix3d: "https://www.figma.com/api/mcp/asset/d1a5f54b-f920-47a6-a357-607ec5b0bb35",
  spotify3d: "https://www.figma.com/api/mcp/asset/c2ff4e37-f196-4952-bc33-582c1333293e",
  appleTv: "https://www.figma.com/api/mcp/asset/83a0e63d-36e0-4ebd-962f-47a32de44722",
  iphoneAir: "https://www.figma.com/api/mcp/asset/e54eb2ce-0e16-4819-a732-b02b64bec5d1",
  changeThis1: "https://www.figma.com/api/mcp/asset/f72fa8fd-7a5a-45aa-b7ee-031a5971895c",
  rectangle1: "https://www.figma.com/api/mcp/asset/6753be33-b26c-4135-80d0-073b4fc11034",
  taskProgress: "https://www.figma.com/api/mcp/asset/87e5dd60-38be-48ab-aa47-8f0f03772e7e",
  bell: "https://www.figma.com/api/mcp/asset/7b978f02-223d-46d4-b72a-58511943ba68",
  chart: "https://www.figma.com/api/mcp/asset/fb156e45-b926-4e44-8119-2e18deb31475",
  cross: "https://www.figma.com/api/mcp/asset/bd57bfd6-985e-4826-826f-613c4ff04870",
  finiloIcon2: "https://www.figma.com/api/mcp/asset/f5c93104-ea75-47ec-82aa-4c415cf0b165",
  arrow3: "https://www.figma.com/api/mcp/asset/9a6ae758-6ff7-4b85-af92-1bc8c987ae77",
  check: "https://www.figma.com/api/mcp/asset/ec7ca4a4-b50b-4596-91b2-6f1886711fec",
  group23: "https://www.figma.com/api/mcp/asset/48e6e272-e053-44c2-a91b-33438e6728a8",
  vector9: "https://www.figma.com/api/mcp/asset/bf0fd566-0406-405b-b730-f471d8ff4cd4",
  vector10: "https://www.figma.com/api/mcp/asset/75d0c7ec-3f6b-42e7-a4ee-89bd1f497fb5",
  gridPattern: "https://www.figma.com/api/mcp/asset/d7b5d5c4-cc16-4675-893e-5ab6971c9e9b",
  logo1: "https://www.figma.com/api/mcp/asset/319aa318-b0e9-43fe-9f4a-65ac72c750fc",
  group7: "https://www.figma.com/api/mcp/asset/f1def83b-169b-4c4b-bfc0-78ab23ea271f",
  changeThisMask: "https://www.figma.com/api/mcp/asset/c7b92ffb-7325-4858-9a5a-a5a5f39dbc64",
  group8: "https://www.figma.com/api/mcp/asset/f738d9d0-c947-4b99-a349-f0545808070f",
};

fs.mkdirSync(outDir, { recursive: true });
for (const [name, url] of Object.entries(assets)) {
  const r = await fetch(url);
  if (!r.ok) {
    console.error("fail", name, r.status);
    continue;
  }
  const buf = Buffer.from(await r.arrayBuffer());
  const ct = r.headers.get("content-type") || "";
  const ext = ct.includes("svg") ? "svg" : "png";
  const finalDest = path.join(outDir, `${name}.${ext}`);
  fs.writeFileSync(finalDest, buf);
  console.log("ok", name, buf.length);
}
