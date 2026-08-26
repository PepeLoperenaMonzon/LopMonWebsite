/** Site-wide configuration — update before deploy */
export const SITE = {
  name: 'LopMon',
  legalName: 'LopMon Soluciones Tecnológicas',
  tagline: 'Soluciones Tecnológicas',
  description:
    'Resuelvo incidencias, mejoras web y procesos para pymes y profesionales. Proyectos puntuales y soporte mensual. Canarias y remoto.',
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
  email: 'lopmonsoluciones@gmail.com',
  /**
   * WhatsApp Business number in international format, digits only (e.g. 34612345678).
   * Leave empty until you have the number — the WhatsApp button stays hidden.
   */
  whatsapp: '34606646087',
  social: {
    linkedin: 'https://www.linkedin.com/company/lopmon-soluciones-tecnol%C3%B3gicas',
  },
} as const;
