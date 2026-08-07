/** Site-wide configuration — update before deploy */
export const SITE = {
  name: 'LopMon',
  legalName: 'LopMon Soluciones Tecnológicas',
  tagline: 'Soluciones Tecnológicas',
  description:
    'Soporte informático, desarrollo web y seguridad para PYMEs en Las Palmas y toda Canarias. Tu partner tecnológico para crecer sin parar.',
  url: 'https://lopmon.com',
  locale: 'es_ES',
  lang: 'es',
  location: {
    city: 'Las Palmas de Gran Canaria',
    region: 'Canarias',
    country: 'ES',
    areaServed: 'Canarias',
  },
  /** Public contact email shown on the site and used in legal pages */
  email: 'pepeloperena@gmail.com',
  phone: '',
  /** Formspree form ID from https://formspree.io — leave empty to show setup hint */
  formspreeId: import.meta.env.PUBLIC_FORMSPREE_ID ?? '',
  social: {
    // Add when available, e.g. 'https://www.linkedin.com/company/lopmon'
  },
} as const;
