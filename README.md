# Finilo Web

Marketing landing page for [Finilo](https://finilo.app) — Next.js (App Router) + Tailwind CSS.

## Landing page (pixel match to Figma)

The home page implements the **🖱️ Landing Page** frame (`ldp`, 1512×4947) from the Finilo Figma file: exact positioning, typography scale (SF Pro on Apple devices, Inter for body), colors (`#000`, `#262626`, `#8e8e93`, feature tints), and **local copies** of all raster/SVG assets under `public/images/ldp/`.

- **Desktop:** View at **≥1512px** width for a 1:1 match (or zoom the browser).
- **Narrower screens:** Horizontal scroll on the outer wrapper so nothing squishes.

Refresh assets after design changes:

```bash
node scripts/download-ldp-assets.mjs
```

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Stack

- Next.js 15
- React 19
- Tailwind CSS 4
- Sora (Google Fonts), aligned with Finilo mobile branding

## Images from Figma

**Figma MCP** can return asset URLs via `get_design_context`, but that depends on your Figma plan quota and often requires a selected layer in the file. This repo also includes:

1. **Service logos** — PNGs copied from `../subscription-logos` into `public/images/services/`.
2. **Optional marketing art** — place exported PNGs here and they replace placeholders automatically:
   - `public/images/figma/hero-wallet.png` — hero illustration
   - `public/images/figma/value-wallet.png` — “Subscriptions add up” section
   - `public/images/figma/phone-mockup.png` — phone showcase

**Download from Figma with a Personal Access Token** (no MCP):

1. Figma → **Settings** → **Security** → create a **Personal access token**.
2. Open your file, select a frame, copy the link. `node-id=95-1546` → API node id is `95:1546`.
3. From `finilo-web`:

```bash
export FIGMA_ACCESS_TOKEN=figd_your_token_here
# Optional: FIGMA_FILE_KEY=gk5owlgTOfjHI4oXPwrZnB
npm run figma:assets -- 95:1546 11:182
```

PNG files are written to `public/images/figma/<node-id>.png`. Rename the ones you need to `hero-wallet.png`, `value-wallet.png`, or `phone-mockup.png`, or adjust `src/app/page.tsx`.
