# Nutri Swapper

A single-purpose fitness micro-tool: a **Macro & Caloric Density Swap Calculator**.
It answers one question instantly — *"I ran out of ingredient X, what exact weight of
ingredient Y gives the identical protein (or calories)?"*

- **Zero auth, zero onboarding.** Open a page, type a weight, get the answer.
- **MPA for programmatic SEO.** Common swaps (e.g. `/swap/peanuts-to-roasted-chana`)
  are statically generated, crawlable pages that render in well under a second.
- **Minimal JS.** The interactive calculator is a single inlined micro-island — no
  framework runtime, no fetch (the food DB is inlined and read once).

## Tech stack

- **[Astro](https://astro.build)** — static MPA output
- **[Tailwind CSS v4](https://tailwindcss.com)** — `@theme` design tokens
- **Self-hosted fonts** — Inter (variable) for UI, JetBrains Mono for numeric data
- **`@astrojs/sitemap`** — auto sitemap for all swap pages

## Design

Dark-mode adaptation of the Vercel design language. The structural system
(typography scale, spacing, radii, stacked-shadow elevation, mono-for-numbers) comes
from [`DESIGN.md`](./DESIGN.md); the surface palette is inverted to the pure-dark
developer aesthetic (`#000` canvas, `#0A0A0A` surfaces, `#222` hairlines, white accent).

## Project structure

```
src/
├── data/foods.ts            # nutrition DB, curated swap pairs, swap math
├── components/
│   ├── SwapCalculator.astro # the interactive island (server HTML + vanilla JS)
│   ├── Header.astro
│   └── Footer.astro
├── layouts/Layout.astro     # SEO meta, JSON-LD, fonts, dark shell
├── pages/
│   ├── index.astro          # hero + live calculator + popular swaps + how-it-works
│   └── swap/[pair].astro     # pSEO pages via getStaticPaths over SWAP_PAIRS
└── styles/global.css        # Tailwind v4 @theme tokens + base layer
```

Adding foods or swap pairs is data-only — edit [`src/data/foods.ts`](./src/data/foods.ts).

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm run dev`     | Dev server at `localhost:4321`              |
| `npm run build`   | Static build to `./dist/`                   |
| `npm run preview` | Preview the production build locally        |

## Calculation

Per-100g macros power two modes:

```
Match protein:   W_b = W_a × (P_a / P_b)   → shows the calorie delta
Match calories:  W_b = W_a × (C_a / C_b)   → shows the macro delta
```

Nutrition values are approximate (USDA + common label values), per 100 g in the
commonly-logged state. For information only — not medical or dietary advice.
