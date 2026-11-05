# GSI Digital – Website

Statische Website der Dachmarke GSI Digital (Astro 7, Tailwind 4, kein Client-JavaScript).

## Befehle

- `pnpm dev`: Entwicklungsserver (im Hintergrund: `pnpm astro dev --background`)
- `pnpm check`: Lint (Biome), Typecheck (`astro check`) und Build
- `SITE_URL=https://<domain> pnpm build`: Produktions-Build mit Canonical, OG-URLs und Sitemap

## Hosting

GitHub Pages (`gsi-digital.github.io`), Deploy über `.github/workflows/deploy.yml` bei jedem Push auf `main`. `public/_headers` gilt nur bei einem Umzug zu Cloudflare oder Netlify.

## Regeln

- Zweisprachig: Deutsch unter `/`, Englisch unter `/en/`. Texte in `src/i18n/ui.ts`, Projekttexte in `src/data/projects.ts`, Seiten-Views in `src/views/`. Neue Texte immer in beiden Sprachen.
- Impressumsdaten nur in `src/data/legal.ts` (gleiche Angaben wie bei Dish Days).
- Der Buchshop heißt „இnimai Bookshop“ (tamilisches இ zuerst), Instagram: @lnimai_ (kleines L).
- Die App heißt „Dish Days“ (mit Leerzeichen), wie in der App und auf dishdays.app.

- Projekte stehen nur in `src/data/projects.ts`. Ohne `url` wird die Schaltfläche ausgeblendet.
- Nur bestätigte Angaben zu Projekten verwenden. Nichts über Funktionen erfinden.
- Keine Drittanbieter-Ressourcen im Browser (Schriften über die Astro-Fonts-API, selbst gehostet).
- Logo-Dateien kommen aus dem GSI-Digital-Logo-Kit (`public/brand/`). Petrol auf hellem Grund, Limette nur auf dunklem.
- Ziel: WCAG 2.2 AA (Kontrast, Fokus, Tastatur, `prefers-reduced-motion`).
- Astro-7-Doku: https://docs.astro.build. Der Compiler ist strenger: keine ungeschlossenen Tags, kein `<div>` in `<p>`.
