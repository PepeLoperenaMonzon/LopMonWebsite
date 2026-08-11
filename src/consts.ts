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
  /** Public contact email */
  email: 'pepeloperena@gmail.com',
  /**
   * WhatsApp Business number in international format, digits only (e.g. 34612345678).
   * Leave empty until you have the number — the WhatsApp button stays hidden.
   */
  whatsapp: '34606646087',
  social: {
    // Add when available, e.g. 'https://www.linkedin.com/company/lopmon'
  },
} as const;
