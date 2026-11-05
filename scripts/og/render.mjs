// Erzeugt public/og-de.png und public/og-en.png aus template.html mit Chrome (headless).
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const chrome =
  process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const texts = {
  de: {
    TITLE: 'Unsere Projekte',
    SUB: 'Unter dem Namen GSI Digital entstehen die Dish&nbsp;Days App und இnimai&nbsp;Bookshop.',
  },
  en: {
    TITLE: 'Our projects',
    SUB: 'Under the GSI Digital name, we build the Dish&nbsp;Days app and இnimai&nbsp;Bookshop.',
  },
};
const template = readFileSync(join(here, 'template.html'), 'utf8');

for (const [lang, t] of Object.entries(texts)) {
  const html = template.replace('{{TITLE}}', t.TITLE).replace('{{SUB}}', t.SUB);
  const page = join(here, `.og-${lang}.html`);
  writeFileSync(page, html);
  const out = join(here, '..', '..', 'public', `og-${lang}.png`);
  execFileSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--virtual-time-budget=8000',
    '--window-size=1200,630',
    `--screenshot=${out}`,
    `file://${page}`,
  ]);
  console.log(`✓ ${out}`);
}
