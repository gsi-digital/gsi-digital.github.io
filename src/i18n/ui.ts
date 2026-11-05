export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

/** Seiten-Pfade je Sprache. Englisch liegt unter /en/. */
export const routes = {
  home: { de: '/', en: '/en/' },
  imprint: { de: '/impressum/', en: '/en/imprint/' },
  privacy: { de: '/datenschutz/', en: '/en/privacy/' },
} as const;
export type RouteKey = keyof typeof routes;

export const ui = {
  de: {
    'meta.title': 'GSI Digital – Unsere Projekte',
    'meta.description':
      'Unter dem Namen GSI Digital entstehen die Dish Days App und இnimai Bookshop.',
    skip: 'Zum Inhalt springen',
    'nav.label': 'Hauptnavigation',
    'nav.projects': 'Projekte',
    'nav.about': 'Über GSI',
    'nav.home': 'GSI Digital – Startseite',
    'lang.switch': 'English',
    'lang.switchShort': 'EN',
    'home.eyebrow': 'GSI Digital',
    'home.title': 'Unsere Projekte',
    'home.intro': 'Unter dem Namen GSI Digital entstehen die Dish Days App und இnimai Bookshop.',
    'home.projects': 'Projekte',
    'about.title': 'Über GSI Digital',
    'about.text':
      'GSI Digital ist das gemeinsame Zuhause unserer Projekte. Hier entstehen Apps und Angebote, die wir selbst entwickeln und betreuen.',
    'footer.tagline': 'Das Zuhause unserer Projekte',
    'footer.projects': 'Projekte',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'notFound.title': 'Seite nicht gefunden',
    'notFound.text': 'Diese Seite gibt es nicht (mehr).',
    'notFound.back': 'Zurück zu unseren Projekten',
  },
  en: {
    'meta.title': 'GSI Digital – Our projects',
    'meta.description':
      'Under the GSI Digital name, we build the Dish Days app and இnimai Bookshop.',
    skip: 'Skip to content',
    'nav.label': 'Main navigation',
    'nav.projects': 'Projects',
    'nav.about': 'About GSI',
    'nav.home': 'GSI Digital – Home',
    'lang.switch': 'Deutsch',
    'lang.switchShort': 'DE',
    'home.eyebrow': 'GSI Digital',
    'home.title': 'Our projects',
    'home.intro': 'Under the GSI Digital name, we build the Dish Days app and இnimai Bookshop.',
    'home.projects': 'Projects',
    'about.title': 'About GSI Digital',
    'about.text':
      'GSI Digital is the shared home of our projects. This is where we build apps and offerings that we develop and run ourselves.',
    'footer.tagline': 'The home of our projects',
    'footer.projects': 'Projects',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy',
    'notFound.title': 'Page not found',
    'notFound.text': 'This page does not exist (anymore).',
    'notFound.back': 'Back to our projects',
  },
} as const;

export type UiKey = keyof (typeof ui)['de'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'de' ? 'en' : 'de';
}

/** Legt fest, welche Seite der aktuellen in der anderen Sprache entspricht. */
export function routeKeyFromPath(pathname: string): RouteKey | undefined {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  for (const [key, paths] of Object.entries(routes)) {
    if (Object.values(paths).includes(normalized as never)) return key as RouteKey;
  }
  return undefined;
}
