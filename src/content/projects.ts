import type {Project} from './types';

export const projects: Project[] = [
    {
    slug: 'creareride-creare',
    featured: true,
    name: 'Creare Ride - Creare Club',
    summary: {
      es: 'Web App para la gestion total de reservaciones y operaciones de estudios fitness.',
      en: 'Web App for complete management of reservations and operations for fitness studios.'
    },
    role: {
      es: 'Fullstack / Frontend.',
      en: 'Fullstack / Frontend.'
    },
    highlights: {
      es: [
        'Cacheo de información y optimización de performance con React Query.',
        'Arquitectura modular y escalable con microfrontends.',
        'Integración con múltiples APIs y servicios de terceros.'
      ],
      en: [
        'Data caching and performance optimization with React Query.',
        'Modular and scalable architecture with microfrontends.',
        'Integration with multiple APIs and third-party services.'
      ]
    },
    stack: ['React', 'MUI', 'JavaScript', 'Web', 'React Query', 'MapBox API', 'Firebase'],
    links: [
      { type: 'website', label: 'Preview', href: 'https://creare.creareride.app' }
    ],
  },
  {
    slug: 'eco-ride-creare',
    featured: true,
    name: 'Eco Ride - Creare Club',
    summary: {
      es: 'Aplicación mobile para servicio de transporte compartido ecológico.',
      en: 'Mobile app for ecological shared transportation service.'
    },
    role: {
      es: 'Fullstack Developer (Frontend). Responsable de UI, APIs, modelado de datos y despliegue.',
      en: 'Fullstack Developer (Frontend). Responsible for UI, APIs, data modeling, and deployment.'
    },
    highlights: {
      es: [
        'Uso de API de mapas y geolocalización en tiempo real.',
        'UI compleja con formularios dinámicos y manejo robusto de estado.',
        'Integración de autenticación/roles y flujos seguros.'
      ],
      en: [
        'Multi-tenant architecture and scalable module design.',
        'Complex UI with dynamic forms and robust state handling.',
        'Auth/roles integration and secure workflows.'
      ]
    },
    stack: [
      'React Native',
      'Expo',
      'JavaScript',
      'Node.js',
      'Firebase',
      'Google Maps API',
      'Async Storage',
      'RESTful APIs',
      'Recoil'
    ],
  },
  {
    slug: 'tuzobus-hidalgo',
    featured: true,
    name: 'Tuzobús Hidalgo',
    summary: {
      es: 'Sitio web de transporte público de Pachuca, Hidalgo. Cuenta con un mapa interactivo de rutas, horarios y detalles del servicio.',
      en: 'Public transportation website for Pachuca, Hidalgo. Features an interactive map of routes, schedules, and service details.'
    },
    role: {
      es: 'Fullstack / Frontend. Enfoque en UI/UX para el usuario final',
      en: 'Fullstack / Frontend. Focused on UI/UX for the end user.'
    },
    highlights: {
      es: [
        'Mejoras de UI/UX y ajustes de responsividad.',
        'Mantenimiento y evolución de componentes.',
        'Interactividad con mapas y optimización de performance.',
      ],
      en: [
        'UI/UX improvements and responsive refinements.',
        'Component maintenance and iterative evolution.',
        'Map interactivity and performance optimization.',
      ]
    },
    stack: ['React', 'MUI', 'JavaScript', 'Web', 'Redux', 'Google Maps API'],
    links: [
      { type: 'website', label: 'Website', href: 'https://p-tuzobus.hidalgo.gob.mx' }
    ],
    timeframe: { start: '2022-01', end: '2023-12' }
  },
];
