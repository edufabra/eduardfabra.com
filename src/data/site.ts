import type { Lang } from '../i18n/ui';

// Central place for personal links and data shared by every language.

export const site = {
  name: 'Eduard Fabra',
  url: 'https://eduardfabra.com',
  links: {
    vialystDemo: 'https://vialyst.eduardfabra.com',
    linkedin: 'https://www.linkedin.com/in/edufabra/',
    github: 'https://github.com/edufabra',
    email: 'eduard@eduardfabra.com',
  },
} as const;

export type Localized = string | Record<Lang, string>;

export const localize = (value: Localized, lang: Lang) =>
  typeof value === 'string' ? value : value[lang];

// TODO: review the technologies; groups are labelled per language in src/i18n/ui.ts.
export const stack = [
  { key: 'backend', icon: 'Server', items: ['PHP', 'Symfony', 'DDD', 'REST APIs', 'Python'] },
  {
    key: 'ecommerce',
    icon: 'ShoppingCart',
    items: [
      { ca: 'Catàleg i checkout', es: 'Catálogo y checkout', en: 'Catalog & checkout' },
      { ca: 'Passarel·les de pagament', es: 'Pasarelas de pago', en: 'Payment gateways' },
      { ca: 'Integració amb marketplaces', es: 'Integración con marketplaces', en: 'Marketplace integrations' },
      'SEO',
    ],
  },
  { key: 'cloud', icon: 'Cloud', items: ['AWS', 'Cloudflare Workers', 'Docker', 'CI/CD', 'Linux'] },
  { key: 'data', icon: 'Database', items: ['MySQL', 'Redis', 'Elasticsearch'] },
  { key: 'frontend', icon: 'Palette', items: ['JavaScript', 'TypeScript', 'Astro', 'PWA', 'Tailwind CSS', { ca: 'Disseny web', es: 'Diseño web', en: 'Web design' }] },
  { key: 'tools', icon: 'Wrench', items: ['Git', 'Home Assistant', 'ESPHome', 'Agile / Scrum'] },
] as const;

export const projects = [
  {
    key: 'rfCover',
    name: 'rf_cover_time_based',
    url: 'https://github.com/edufabra/rf_cover_time_based',
    icon: 'Blinds',
    tags: ['Python', 'Home Assistant', 'HACS'],
  },
  {
    key: 'homeAssistant',
    name: 'home-assistant-config',
    url: 'https://github.com/edufabra/home-assistant-config',
    icon: 'Home',
    tags: ['YAML', 'ESPHome', 'Zigbee', 'IoT'],
  },
  {
    key: 'tempsDeFlors',
    name: 'temps-de-flors-tracker',
    url: 'https://github.com/edufabra/temps-de-flors-tracker',
    demo: 'https://flors.eduardfabra.com',
    icon: 'Flower2',
    tags: ['JavaScript', 'Leaflet', 'localStorage', 'Safari 9+'],
  },
] as const;

// Years only, so periods need no per-language date formatting. `to: null` means current.
export const experience = [
  { key: 'sonosuite', company: 'SonoSuite', roles: [{ key: 'principal', from: 2023, to: null }] },
  {
    key: 'drinksco',
    company: 'Drinks&Co - Uvinum',
    roles: [
      { key: 'engineeringManager', from: 2022, to: 2023 },
      { key: 'teamLead', from: 2010, to: 2022 },
    ],
  },
  { key: 'grupobc', company: 'Grupo BC', roles: [{ key: 'itCoordinator', from: 2002, to: 2009 }] },
] as const;
