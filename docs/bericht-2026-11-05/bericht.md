# GSI Digital Website: Umsetzung und Best Practices

Stand: 5. November 2026

## Ergebnis

Die Website ist ein eigenes Projekt unter `~/Project/gsi-digital`. Es ist eine statische Astro-Seite ohne Client-JavaScript.
Der erste Entwurf (HTML-Mockup) liegt zum Vergleich unter `docs/entwurf-v1/`.

| Ansicht | Datei |
| --- | --- |
| Desktop (1280 px) | `vorschau-desktop.png` |
| Handy (390 px) | `vorschau-handy.png` |

Geprüft: `pnpm lint` ohne Befund, `astro check` mit 0 Fehlern, 0 Warnungen und 0 Hinweisen, Build erfolgreich (4 Seiten, rund 300 KB inklusive Schriften und Logos).

## Recherche: Best Practices und Umsetzung

| Thema | Best Practice | Umsetzung |
| --- | --- | --- |
| Technik | Inhaltsseiten statisch ausliefern, wenig oder kein JS (INP < 200 ms) | Astro 7.4, `output: static`, 0 KB JavaScript |
| Core Web Vitals | LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 (p75 aus echten Nutzerdaten) | Überschrift ohne Animation (LCP), feste Bildmaße (CLS), Schriften mit Preload und Fallback-Metriken |
| Schriften & DSGVO | Google Fonts nicht live von Google laden (LG München I, 20.01.2022, 3 O 17493/20) | Astro-Fonts-API lädt die Schriften beim Build und liefert sie selbst aus |
| Barrierefreiheit | WCAG 2.2 AA anstreben. Das BFSG gilt vor allem für Verbraucherangebote (Shops, Dienste); eine reine Übersichtsseite ist voraussichtlich nicht pflichtig, AA ist trotzdem Standard | Skip-Link, sichtbarer Fokus, Tippflächen ≥ 44 px, Kontraste geprüft, `prefers-reduced-motion`, semantische Überschriften, `lang="ta"` für Tamil |
| Rechtliches (DE) | Impressum nach § 5 DDG, Datenschutzerklärung | Seiten `/impressum` und `/datenschutz` angelegt (**Platzhalter**, siehe offene Punkte). Keine Cookies, also kein Banner nötig |
| SEO | Titel, Beschreibung, Canonical, Open Graph, strukturierte Daten, Sitemap | Alles vorhanden. Canonical, OG-URLs und Sitemap entstehen, sobald `SITE_URL` gesetzt ist |
| Sicherheit | CSP, HSTS, `nosniff`, Referrer-Policy, lange Cache-Zeiten für gehashte Dateien | `public/_headers` (Cloudflare Pages/Netlify-Format) |
| Pflege | Inhalte von Darstellung trennen, tote Links vermeiden | Projekte nur in `src/data/projects.ts`; ohne `url` keine Schaltfläche; neue Projekte = neuer Eintrag |

## Designentscheidungen

- **Logo:** Originaldateien aus dem GSI-Digital-Logo-Kit. Petrol auf Creme im Header, Limette auf Anthrazit im Footer (Limette auf Creme hätte nur etwa 1,1:1 Kontrast).
- **Linkpfeile:** hinteres Ende schräg geschnitten wie die Enden der Klammern im Logo.
- **DishDays:** Handyrahmen mit dem Namen; ein echter Screenshot ersetzt ihn automatisch (`images` in `projects.ts`).
- **இnimai:** Schreibweise wie auf Instagram (@lnimai_), mit dem tamilischen இ zuerst. Das Logo stammt aus dem Bookshop-Projekt (`logo_inimai.png`), dazu eine warme Papierfläche und Newsreader kursiv. Echte Cover ersetzen das Logo automatisch.

## Nachtrag: Zweisprachigkeit, Impressum, Dish-Days-Bilder

- **Deutsch und Englisch:** Deutsch unter `/`, Englisch unter `/en/` (`/en/imprint/`, `/en/privacy/`). Sprachwechsel oben rechts, `hreflang`-Verweise und eine zweisprachige Sitemap.
- **Impressum:** Angaben aus dem Dish-Days-Impressum (`cooked/apps/web/src/legal-pages.tsx`) übernommen: Name, GSI Digital, Anschrift Endingen, USt-ID, Hinweis zur Verbraucherstreitbeilegung.
- **Datenschutz:** auf diese Seite zugeschnitten (Hosting über Cloudflare, keine Cookies, kein Tracking, Links, Rechte, Aufsichtsbehörde Baden-Württemberg).
- **Dish Days:** echter Screenshot (`diary-screen.png` von der Dish-Days-Landingpage) im Handyrahmen und das App-Icon neben dem Namen.
- **Name:** „Dish Days“ mit Leerzeichen, so wie in der App (`app.json`) und auf dishdays.app.

## Offene Punkte vor dem Livegang

1. ~~Instagram-Adresse~~ erledigt: `https://www.instagram.com/lnimai_/` (Handle mit kleinem L).
2. ~~Kontakt-E-Mail~~ erledigt: `gsidigi@gmail.com` für Impressum und Datenschutz. Der Datenschutztext geht von Cloudflare als Hosting aus.
3. **Domain und Hosting** festlegen und mit `SITE_URL=https://<domain> pnpm build` bauen.
4. **OG-Bild:** aktuell das quadratische Profilbild aus dem Logo-Kit; besser wäre ein eigenes Bild im Format 1200 × 630 px.
5. **Echte Inhalte (optional):** இnimai-Buchcover unter `src/assets/projects/` ablegen und in `projects.ts` eintragen.
6. Der Dish-Days-Satz „Eine App von GSI Digital.“ ist eine eigene Ergänzung. Bitte bestätigen oder streichen.

## Technischer Hinweis

`@astrojs/check` 0.9.12 zieht `@emnapi/runtime@2.0.0-beta.2`, das mit Astro 7 abstürzt. In `package.json` ist deshalb `pnpm.overrides["@emnapi/runtime"] = "1.11.3"` gesetzt. Bei einem späteren Update von `@astrojs/check` kann das wieder raus.

## Quellen

- Astro-7-Upgrade-Guide: https://docs.astro.build/en/guides/upgrade-to/v7/
- Astro Fonts API: https://docs.astro.build/en/guides/fonts/
- Core Web Vitals (Schwellenwerte): https://eseospace.com/blog/core-web-vitals-in-2026-what-changed-what-still-matters-and-how-to-pass/
- LG München I zu Google Fonts: https://www.ihk.de/bergische/recht-und-steuern/wettbewerbsrecht/google-fonts-5646176
- BFSG und Webseiten: https://www.heuking.de/de/news-events/newsletter-fachbeitraege/artikel/das-barrierefreiheitsstaerkungsgesetz-bfsg-teil-1-folgen-fuer-webseiten-und-apps.html
- BFSG, Version der WCAG: https://omr.com/de/reviews/contenthub/barrierefreiheitsstaerkungsgesetz-website
