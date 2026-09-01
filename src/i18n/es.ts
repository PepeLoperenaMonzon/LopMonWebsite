import type { Translations } from './types';

export const es: Translations = {
  meta: {
    title: 'LopMon | Soluciones Tecnológicas en Canarias',
    description:
      'Resuelvo incidencias, mejoras web y procesos para pymes y profesionales. Proyectos puntuales y soporte mensual. Canarias y remoto.',
    skipToContent: 'Saltar al contenido',
  },
  header: {
    tagline: 'Soluciones Tecnológicas',
    nav: {
      services: 'Servicios',
      emergencies: 'Urgencias 24h',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    cta: 'Solicitar presupuesto',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    homeLabel: 'LopMon — Inicio',
    switchToEn: 'Cambiar a inglés',
    switchToEs: 'Cambiar a español',
  },
  hero: {
    badge: 'Atención en Canarias y en remoto',
    title: 'Resuelvo los problemas tecnológicos de tu empresa',
    titleHighlight: 'sin montar un departamento IT.',
    subtitle:
      'Incidencias, procesos que te quitan tiempo, webs que no rinden o sistemas desordenados: analizo la situación, propongo la solución y la ejecuto. Hablas conmigo de principio a fin.',
    ctaPrimary: 'Cuéntame tu problema',
    ctaSecondary: 'Ver servicios',
  },
  services: {
    title: 'Esto es lo que resuelvo',
    intro:
      'Trabajo con empresas que necesitan resolver algo concreto ahora y mantener su tecnología al día sin contratar en plantilla.',
    featured: 'MÁS SOLICITADO',
    items: [
      {
        title: 'Incidencias y soporte del día a día',
        description:
          'Cuando algo falla y tu operativa se frena, actúo rápido para localizar el problema y devolver la normalidad.',
        bullets: ['Resolución de bloqueos e incidencias', 'Soporte puntual, bolsa de horas o urgencias 24h'],
        icon: 'support',
        featured: false,
      },
      {
        title: 'Web y procesos que impulsan tu negocio',
        description:
          'Si tu web no convierte o repites tareas que te quitan tiempo, diseño mejoras concretas para que tu negocio funcione mejor.',
        bullets: ['Webs corporativas y mejoras orientadas a resultados', 'Automatizaciones y herramientas internas a medida'],
        icon: 'code',
        featured: true,
      },
      {
        title: 'Seguridad y continuidad',
        description:
          'Reviso riesgos, ordeno sistemas y dejo todo preparado: copias, accesos, organización y prevención.',
        bullets: ['Copias de seguridad y control de accesos', 'Mantenimiento y mejoras continuas'],
        icon: 'alert',
        featured: false,
      },
    ],
  },
  emergencies: {
    label: 'Urgencias',
    title: 'Avería urgente: respuesta 24 horas',
    intro:
      'Cuando tu negocio se para por un fallo técnico, no esperas al día siguiente. Activo un canal de urgencias para intervenir a cualquier hora del día.',
    body: 'Si tienes una avería crítica —caída de sistemas, acceso bloqueado, red caída o una incidencia que corta tu operativa— me avisas y salto a resolverla lo antes posible, dentro o fuera del horario habitual.',
    bullets: [
      'Disponibilidad 24 horas para incidencias urgentes.',
      'Prioridad a lo que bloquea tu negocio ahora mismo.',
      'Intervención directa: diagnóstico y acción sin intermediarios.',
    ],
    cta: 'Avisar de una urgencia',
  },
  about: {
    label: 'Sobre mí',
    title: 'Quién está detrás de LopMon',
    imageAlt: 'Pepe Loperena, fundador de LopMon',
    nameIntro: 'Soy',
    role: 'técnico y desarrollador con base en Canarias',
    paragraphs: [
      'LopMon es mi forma de ofrecer a pymes y profesionales un interlocutor técnico claro: entiendo el negocio y la parte técnica.',
      'Desde el primer mensaje hablas conmigo. Analizo tu situación, te propongo una solución clara y la ejecuto.',
      'Hago proyectos puntuales y ofrezco soporte continuo con bolsa de horas mensual. Trabajo con clientes en Canarias y en remoto con empresas de otras ciudades.',
    ],
  },
  contact: {
    title: '¿Tienes un proyecto o un problema que resolver?',
    intro:
      'Cuéntame qué te está frenando y te respondo con una propuesta clara. Hago proyectos puntuales y también ofrezco soporte mensual para que tu tecnología no vuelva a ser un problema. Rellena el mensaje y ábrelo en tu correo',
    introWhatsApp: ' o por WhatsApp',
    nameLabel: 'Nombre o Empresa',
    namePlaceholder: 'Ej. Taller Martínez S.L.',
    contactLabel: 'Email o Teléfono',
    contactPlaceholder: 'Para contactarte',
    messageLabel: '¿Qué necesitas resolver?',
    messagePlaceholder: 'Ej. Perdemos tiempo con tareas manuales y la web no convierte como debería...',
    privacy: 'Al continuar aceptas nuestra',
    privacyLink: 'política de privacidad',
    emailBtn: 'Abrir en el correo',
    whatsappBtn: 'Abrir en WhatsApp',
    orEmail: 'O escribe directamente a',
    emailSubject: 'Consulta desde la web',
    formIntro: 'Hola, me pongo en contacto desde la web de LopMon.',
    formFields: {
      name: 'Nombre / Empresa',
      contact: 'Contacto',
      message: 'Mensaje',
    },
  },
  footer: {
    homeLabel: 'LopMon — Inicio',
    legal: 'Aviso legal',
    privacy: 'Privacidad',
  },
  legal: {
    noticeTitle: 'Aviso legal',
    privacyTitle: 'Política de privacidad',
  },
};
