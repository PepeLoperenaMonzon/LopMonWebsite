import type { Translations } from './types';

export const en: Translations = {
  meta: {
    title: 'LopMon | Technology Solutions',
    description:
      'I resolve incidents, web improvements and business processes for SMEs and professionals. One-off projects and monthly support. Canary Islands and remote.',
    keywords:
      'IT support Canary Islands, web development Las Palmas, SME technology consultant, 24h emergencies, managed IT support, LopMon',
    ogImageAlt: 'LopMon — Technology solutions for SMEs in the Canary Islands',
    skipToContent: 'Skip to content',
  },
  header: {
    tagline: 'Technology Solutions',
    nav: {
      services: 'Services',
      emergencies: '24h Emergencies',
      about: 'About me',
      contact: 'Contact',
    },
    cta: 'Request a quote',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    homeLabel: 'LopMon — Home',
    switchToEn: 'Switch to English',
    switchToEs: 'Switch to Spanish',
  },
  hero: {
    badge: 'Based in the Canary Islands, local and remote service',
    title: 'I solve your company\'s technology problems',
    titleHighlight: 'without building an IT department.',
    subtitle:
      'Incidents, time-wasting processes, underperforming websites or messy systems: I assess the situation, propose a solution and execute it. You work directly with me from start to finish.',
    ctaPrimary: 'Tell me your problem',
    ctaSecondary: 'View services',
  },
  services: {
    title: 'What I solve',
    intro:
      'I work with businesses that need to fix something now and keep their technology up to date without hiring in-house staff.',
    featured: 'MOST REQUESTED',
    items: [
      {
        title: 'Day-to-day incidents and support',
        description:
          'When something breaks and your operations stall, I act fast to locate the issue and restore normal service.',
        bullets: ['Resolution of blockers and incidents', 'One-off support, hour bundles or 24h emergencies'],
        icon: 'support',
        featured: false,
      },
      {
        title: 'Webs and processes that grow your business',
        description:
          'If your website does not convert or you repeat tasks that waste time, I design concrete improvements so your business runs better.',
        bullets: ['Corporate websites and results-driven improvements', 'Custom automations and internal tools'],
        icon: 'code',
        featured: true,
      },
      {
        title: 'Security and continuity',
        description:
          'I review risks, organize systems and leave everything ready: backups, access control, structure and prevention.',
        bullets: ['Backups and access control', 'Ongoing maintenance and improvements'],
        icon: 'alert',
        featured: false,
      },
    ],
  },
  emergencies: {
    label: 'Emergencies',
    title: 'Urgent incident: 24-hour response',
    intro:
      'When your business stops because of a technical failure, you cannot wait until the next day. I activate an emergency channel to intervene at any time.',
    body: 'If you have a critical incident —system outage, blocked access, network down or anything that stops your operations— let me know and I will respond as soon as possible, inside or outside regular hours.',
    bullets: [
      '24-hour availability for urgent incidents.',
      'Priority for what is blocking your business right now.',
      'Direct intervention: diagnosis and action without intermediaries.',
    ],
    cta: 'Report an emergency',
  },
  about: {
    label: 'About me',
    title: 'Who is behind LopMon',
    imageAlt: 'Pepe Loperena, founder of LopMon',
    nameIntro: 'I am',
    role: 'a technician and developer based in the Canary Islands',
    paragraphs: [
      'LopMon is how I offer SMEs and professionals a clear technical contact: I understand both the business and the technical side.',
      'From the first message you speak with me. I assess your situation, propose a clear solution and execute it.',
      'I handle one-off projects and offer ongoing support with monthly hour bundles. I work with clients in the Canary Islands and remotely with companies in other cities.',
    ],
  },
  contact: {
    title: 'Do you have a project or a problem to solve?',
    intro:
      'Tell me what is holding you back and I will reply with a clear proposal. I handle one-off projects and also offer monthly support so technology stops being a problem. Fill in the message and open it in your email',
    introWhatsApp: ' or via WhatsApp',
    nameLabel: 'Name or Company',
    namePlaceholder: 'e.g. Martinez Workshop Ltd.',
    contactLabel: 'Email or Phone',
    contactPlaceholder: 'So I can reach you',
    messageLabel: 'What do you need to solve?',
    messagePlaceholder: 'e.g. We waste time on manual tasks and the website does not convert as it should...',
    privacy: 'By continuing you accept our',
    privacyLink: 'privacy policy',
    emailBtn: 'Open in email',
    whatsappBtn: 'Open in WhatsApp',
    orEmail: 'Or write directly to',
    emailSubject: 'Inquiry from website',
    formIntro: 'Hello, I am contacting you from the LopMon website.',
    formFields: {
      name: 'Name / Company',
      contact: 'Contact',
      message: 'Message',
    },
  },
  footer: {
    homeLabel: 'LopMon — Home',
    legal: 'Legal notice',
    privacy: 'Privacy',
  },
  legal: {
    noticeTitle: 'Legal notice',
    privacyTitle: 'Privacy policy',
  },
};
