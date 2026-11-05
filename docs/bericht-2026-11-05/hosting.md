# Hosting-Empfehlung für die GSI-Digital-Website

Stand: 5. November 2026

Die Seite ist rein statisch (`dist/`, rund 300 KB, kein Server-Code). Jeder statische Hoster funktioniert.

## Empfehlung: Cloudflare (Workers mit Static Assets)

- Für eine statische Seite kostenlos; Traffic ist praktisch unbegrenzt.
- Für DishDays (Workers Free) gibt es schon ein Cloudflare-Konto. Das heißt: kein neuer Anbieter und kein neuer Vertrag zur Auftragsverarbeitung (AVV).
- `public/_headers` (Sicherheits-Header, Cache) wird direkt unterstützt.
- Weltweites CDN mit HTTPS, eigene Domain kostenlos.
- Deploy per `wrangler deploy` oder automatisch bei jedem Push über die Git-Anbindung.
- Für neue Projekte empfiehlt Cloudflare inzwischen Workers mit Static Assets statt Pages. Beides funktioniert mit dieser Seite.
- Datenschutz: Cloudflare ist ein US-Anbieter, aber nach dem EU-US Data Privacy Framework zertifiziert. Den AVV (DPA) abschließen und den Anbieter in der Datenschutzerklärung nennen.

## Alternativen

| Anbieter | Wann sinnvoll | Kosten |
| --- | --- | --- |
| Netlify | ähnlich bequem, `_headers` geht ebenfalls | Free-Tarif |
| Vercel | eher für Next.js; Free-Tarif nur für nicht-kommerzielle Nutzung | ab 20 $/Monat kommerziell |
| Bunny.net (EU, Slowenien) | wenn alles in der EU bleiben soll | ca. 1 $/Monat |
| Hetzner / Uberspace / all-inkl (DE) | deutscher Anbieter, klassisches Webhosting | ab ca. 1–5 €/Monat |

## Nächste Schritte bei Cloudflare

1. Domain zu Cloudflare-DNS übertragen oder dort verbinden.
2. Repo auf GitHub anlegen, Build `SITE_URL=https://<domain> pnpm build`, Ausgabe `dist/`.
3. Den Hosting-Anbieter in `src/pages/datenschutz.astro` eintragen.

## Entscheidung (5. November 2026)

Start auf **GitHub Pages** unter `gsi-digital.github.io` (kostenlos, GitHub-Organisation `gsi-digital`).
Grenzen: keine eigenen Sicherheits-Header, Repo öffentlich. Mit eigener Domain ist ein späterer Umzug zu Cloudflare sinnvoll.
Die Datenschutzerklärung nennt GitHub als Hosting.
