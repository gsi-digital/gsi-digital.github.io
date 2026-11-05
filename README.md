# GSI Digital – Website

Statische Seite mit Astro 7. Details und Regeln: [AGENTS.md](AGENTS.md).

```sh
pnpm install
pnpm dev
SITE_URL=https://<domain> pnpm build   # Ausgabe in dist/
```

Vor dem Livegang: Platzhalter in `src/pages/impressum.astro` und `src/pages/datenschutz.astro`
ersetzen und die Instagram-Adresse in `src/data/projects.ts` eintragen.
