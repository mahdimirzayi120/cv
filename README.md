# Muhammad Mahdi Mirzayi — Academic CV

Single-page academic resume built with **Vite + React 19 + TypeScript + GSAP 3**.
The production build is a single self-contained `index.html` (JS, CSS, and fonts
inlined), so it deploys to Cloudflare Pages with no adapter and can also be
opened directly from the filesystem without a local server.

## Stack

- Vite (static build)
- React + TypeScript
- GSAP 3 (`ScrollTrigger`, `SplitText`, `useGSAP`)
- Self-hosted variable fonts (`@fontsource-variable`: Inter + Source Serif 4)

## File structure

```
cv-site/
├─ public/
│  ├─ cv/
│  │  └─ MahdiMirzayi-CV.pdf      # downloaded by the "Download CV" button
│  ├─ favicon.svg
│  └─ _headers                    # Cloudflare Pages headers (security + caching)
├─ src/
│  ├─ components/
│  │  ├─ Nav.tsx                  # sticky nav, scroll progress, active section
│  │  ├─ Hero.tsx                 # name, contact, actions, highlights
│  │  ├─ Education.tsx
│  │  ├─ Coursework.tsx           # key course scores + Scholar links
│  │  ├─ Research.tsx
│  │  ├─ Skills.tsx               # animated proficiency bars
│  │  ├─ Certificates.tsx
│  │  ├─ Experience.tsx
│  │  ├─ Projects.tsx
│  │  ├─ Honors.tsx
│  │  ├─ Languages.tsx
│  │  ├─ Recommenders.tsx         # dark section + Scholar links
│  │  ├─ Footer.tsx
│  │  ├─ icons.tsx                # inline SVG icon set (no icon dependency)
│  │  └─ ui.tsx                   # SectionIntro, ScholarLink
│  ├─ App.tsx                     # section order + all GSAP animation logic
│  ├─ data.ts                     # single source of truth for resume content
│  ├─ main.tsx
│  └─ styles.css                  # design tokens, responsive + print stylesheet
├─ index.html
├─ vite.config.ts
├─ tsconfig.json
└─ package.json
```

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Output directory: **`dist`**

The build produces one self-contained `dist/index.html`; the downloadable CV
(`dist/cv/MahdiMirzayi-CV.pdf`) and `dist/favicon.svg` stay as separate files.
You can double-click `dist/index.html` to view the site offline, or serve the
folder with any static server.

Preview the production build locally:

```bash
npm run preview
```

## Cloudflare Pages deployment

Connect the repository in the Cloudflare dashboard and use:

| Setting | Value |
| --- | --- |
| Framework preset | Vite (or "None") |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | 20 or newer (set `NODE_VERSION=20` if needed) |

No `_redirects`, adapter, or Next.js static-export configuration is required:
the site is a single static `index.html` plus the CV PDF and favicon.

`public/_headers` is copied to `dist/_headers` by Vite and is picked up
automatically by Cloudflare Pages.

If the site lives in a subfolder of the repo, set **Root directory** to that
folder (for example `cv-site`).

## Updating content

All resume text lives in `src/data.ts`. Keep the wording identical to the
source document. The PDF in `public/cv/MahdiMirzayi-CV.pdf` is the downloadable
version; replace that file to update the download without touching the layout.

## Animation notes

- Hero intro timeline: SplitText character reveal, staggered meta/actions/stats.
- Section headings: SplitText line masks.
- Scroll reveals: `ScrollTrigger.batch` on `[data-reveal]`.
- Counters: hero highlight numbers animate to their final value once.
- Skill bars: `scaleX` progress with matching percentage counters.
- Nav: scroll progress bar, sticky state, and active-section highlighting.
- Parallax: hero grid/glow layers, desktop only.
- Reduced motion: all motion is skipped when `prefers-reduced-motion: reduce`
  is set; navigation state still works.
- Print: dedicated A4 stylesheet forces all animated elements visible, removes
  the dark backgrounds, hides navigation/actions, and avoids page breaks inside
  cards.
