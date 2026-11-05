import dishdaysDiaryDe from '../assets/projects/dishdays-diary-de.webp';
import dishdaysDiaryEn from '../assets/projects/dishdays-diary-en.webp';
import dishdaysIcon from '../assets/projects/dishdays-icon.png';
import inimaiLogo from '../assets/projects/inimai-logo.png';
import type { Lang } from '../i18n/ui';

/**
 * Projekte unter der Dachmarke GSI Digital.
 *
 * Neues Projekt ergänzen: einen Eintrag anhängen und eine passende `look`-Variante wählen
 * (oder in ProjectCard.astro eine neue anlegen). Ohne `url` wird die Schaltfläche
 * automatisch ausgeblendet. So landet nie ein toter Link auf der Seite.
 * Nur bestätigte Angaben eintragen.
 */
export type ProjectLook = 'app' | 'books';
type Localized = Record<Lang, string>;

export interface Project {
  id: string;
  name: string;
  /** Kurze Einordnung über dem Namen, z. B. „App“. */
  kind: Localized;
  description?: Localized;
  /** Zieladresse. Leer lassen, solange sie nicht feststeht. */
  url?: string;
  cta: Localized;
  look: ProjectLook;
  icon?: ImageMetadata;
  /** Großes Logo als Bild, solange keine Screenshots/Cover vorliegen. */
  logo?: ImageMetadata;
  /** App: Screenshot je Sprache. */
  screenshot?: Record<Lang, ImageMetadata>;
  /** Bücher: Cover (bis zu drei). */
  images?: ImageMetadata[];
  imageAlt?: Localized;
}

export const projects: Project[] = [
  {
    id: 'dishdays',
    name: 'Dish Days',
    kind: { de: 'App', en: 'App' },
    description: { de: 'Eine App von GSI Digital.', en: 'An app by GSI Digital.' },
    url: 'https://dishdays.app',
    cta: { de: 'Zur App', en: 'Visit the app' },
    look: 'app',
    icon: dishdaysIcon,
    screenshot: { de: dishdaysDiaryDe, en: dishdaysDiaryEn },
    imageAlt: {
      de: 'Das Tagebuch in der Dish Days App mit gekochten Gerichten aus November und Oktober',
      en: 'The diary in the Dish Days app with dishes cooked in November and October',
    },
  },
  {
    id: 'inimai',
    name: 'இnimai Bookshop',
    kind: { de: 'Buchshop auf Instagram', en: 'Bookshop on Instagram' },
    description: {
      de: 'Entdecke tamilische Kinderbücher bei இnimai Bookshop auf Instagram.',
      en: 'Discover Tamil children’s books at இnimai Bookshop on Instagram.',
    },
    url: 'https://www.instagram.com/lnimai_/',
    cta: { de: 'Auf Instagram entdecken', en: 'Discover on Instagram' },
    look: 'books',
    logo: inimaiLogo,
  },
];
