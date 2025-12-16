import type {Project} from './types';

export const projects: Project[] = [
  {
    slug: 'creare-club-platform',
    featured: true,
    name: 'Creare Club',
    summary: {
      es: 'Plataforma multi-tenant para operación y crecimiento de negocios (módulos administrativos, usuarios, permisos y flujos operativos).',
      en: 'Multi-tenant platform to operate and scale businesses (admin modules, users, permissions, and operational workflows).'
    },
    role: {
      es: 'Fullstack Developer (Frontend-heavy). Ownership de UI, APIs, modelado y despliegue.',
      en: 'Fullstack Developer (Frontend-heavy). Owned UI, APIs, data modeling, and deployment.'
    },
    highlights: {
      es: [
        'Arquitectura multi-tenant y diseño de módulos escalables.',
        'Construcción de UI compleja con formularios dinámicos y estados robustos.',
        'Integración de autenticación/roles y flujos seguros.'
      ],
      en: [
        'Multi-tenant architecture and scalable module design.',
        'Complex UI with dynamic forms and robust state handling.',
        'Auth/roles integration and secure workflows.'
      ]
    },
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'MUI',
      'Prisma',
      'PostgreSQL',
      'Firebase',
      'Docker',
      'Vercel'
    ],
    links: [
      { type: 'caseStudy', label: 'Case Study', href: '/projects/creare-club-platform' }
    ],
    timeframe: { start: '2021-01' }
  },
  {
    slug: 'tuzobus-hidalgo',
    featured: true,
    name: 'Tuzobús Hidalgo',
    summary: {
      es: 'Colaboración en un sitio web orientado a información y experiencia de usuario para transporte público.',
      en: 'Contribution to a public-transport website focused on information architecture and user experience.'
    },
    role: {
      es: 'Frontend / Web Contributor. Enfoque en UI, mantenibilidad y mejoras incrementales.',
      en: 'Frontend / Web Contributor. Focused on UI, maintainability, and incremental improvements.'
    },
    highlights: {
      es: [
        'Mejoras de UI/UX y ajustes de responsividad.',
        'Mantenimiento y evolución de componentes.',
        'Optimización de páginas clave (estructura, performance percibida).'
      ],
      en: [
        'UI/UX improvements and responsive refinements.',
        'Component maintenance and iterative evolution.',
        'Key page optimizations (structure, perceived performance).'
      ]
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'Web'],
    links: [
      // Aqui va el link que no se me olvide
      // { type: 'website', label: 'Website', href: 'https://...' }
    ],
    timeframe: { start: '2022-01', end: '2023-12' }
  },
  {
    slug: 'personal-finance-app',
    featured: false,
    name: 'Personal Finance App (Expo)',
    summary: {
      es: 'App móvil para tracking financiero y seguimiento de planes de pago (proyecto personal).',
      en: 'Mobile app for finance tracking and payment plan follow-up (personal project).'
    },
    role: {
      es: 'React Native Developer. Diseño de data model, UX y notificaciones.',
      en: 'React Native Developer. Data model design, UX, and notifications.'
    },
    highlights: {
      es: [
        'Arquitectura de pantallas y componentes reutilizables.',
        'Persistencia de datos y flujos de estado.',
        'Notificaciones locales programadas.'
      ],
      en: [
        'Screen architecture and reusable components.',
        'Data persistence and state workflows.',
        'Scheduled local notifications.'
      ]
    },
    stack: ['React Native', 'Expo', 'TypeScript'],
    timeframe: { start: '2025-01' }
  }
];
