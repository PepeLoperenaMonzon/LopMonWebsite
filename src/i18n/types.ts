export type Locale = 'es' | 'en';

export interface Translations {
  meta: {
    title: string;
    description: string;
    keywords: string;
    ogImageAlt: string;
    skipToContent: string;
  };
  header: {
    tagline: string;
    nav: {
      services: string;
      emergencies: string;
      about: string;
      contact: string;
    };
    cta: string;
    openMenu: string;
    closeMenu: string;
    homeLabel: string;
    switchToEn: string;
    switchToEs: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    title: string;
    intro: string;
    featured: string;
    items: Array<{
      title: string;
      description: string;
      bullets: [string, string];
      icon: 'support' | 'code' | 'alert';
      featured: boolean;
    }>;
  };
  emergencies: {
    label: string;
    title: string;
    intro: string;
    body: string;
    bullets: [string, string, string];
    cta: string;
  };
  about: {
    label: string;
    title: string;
    imageAlt: string;
    nameIntro: string;
    role: string;
    paragraphs: [string, string, string];
  };
  contact: {
    title: string;
    intro: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    privacy: string;
    privacyLink: string;
    submitBtn: string;
    submitError: string;
    orEmail: string;
  };
  whatsapp: {
    label: string;
    defaultMessage: string;
  };
  thankYou: {
    title: string;
    message: string;
    backHome: string;
  };
  footer: {
    homeLabel: string;
    legal: string;
    privacy: string;
  };
  legal: {
    noticeTitle: string;
    privacyTitle: string;
  };
}
