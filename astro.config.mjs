// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// Öffentliche Adresse der Seite. Erst setzen, wenn die Domain feststeht:
// SITE_URL=https://example.de pnpm build
const site = process.env.SITE_URL;

export default defineConfig({
  site,
  trailingSlash: 'always',
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: { prefixDefaultLocale: false },
  },
  // Sitemap braucht eine absolute Adresse, deshalb nur mit gesetzter SITE_URL.
  integrations: site
    ? [sitemap({ i18n: { defaultLocale: 'de', locales: { de: 'de-DE', en: 'en-US' } } })]
    : [],
  vite: {
    plugins: [tailwindcss()],
  },
  // Schriften werden beim Build geladen und selbst ausgeliefert.
  // Kein Aufruf an Google o. Ä. im Browser (DSGVO, LG München I, 3 O 17493/20).
  fonts: [
    {
      name: 'Bricolage Grotesque',
      cssVariable: '--font-gsi-display',
      provider: fontProviders.fontsource(),
      weights: [700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'Figtree',
      cssVariable: '--font-gsi-body',
      provider: fontProviders.fontsource(),
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'Newsreader',
      cssVariable: '--font-gsi-book',
      provider: fontProviders.fontsource(),
      weights: [500],
      styles: ['italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],
});
