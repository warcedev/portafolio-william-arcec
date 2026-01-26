// src/data/services.js
export const services = [
  {
    id: 1,
    title: 'Desarrollo de Aplicaciones Web',
    slug: 'desarrollo',
    description: 'Creo soluciones web modernas, escalables y optimizadas para rendimiento.',
    longDescription: 'Desde landing pages hasta aplicaciones complejas. Uso tecnologías como React, Vue.js y Node.js para crear experiencias digitales que convierten.',
    icon: '🚀',
    image: '/images/services/desarrollo.jpg',
    features: [
      'Desarrollo Frontend con React/Vue',
      'Backend con Node.js/Python',
      'Bases de datos SQL/NoSQL',
      'APIs REST/GraphQL',
      'Testing automatizado'
    ],
    technologies: ['React', 'Vue.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
    pricing: 'Desde $XXX por proyecto' // O personalizado
  },
  {
    id: 2,
    title: 'Soporte y Mantenimiento',
    slug: 'soporte',
    description: 'Mantenimiento continuo, actualizaciones y resolución de problemas técnicos.',
    longDescription: 'No dejes que problemas técnicos afecten tu negocio. Ofrezco soporte proactivo para mantener tus aplicaciones funcionando óptimamente.',
    icon: '🔧',
    image: '/images/services/soporte.jpg',
    features: [
      'Monitoreo 24/7',
      'Actualizaciones de seguridad',
      'Backups automáticos',
      'Resolución de bugs',
      'Optimización continua'
    ],
    plans: [
      { name: 'Básico', price: '$XXX/mes', features: ['Soporte email', 'Actualizaciones mensuales'] },
      { name: 'Premium', price: '$XXX/mes', features: ['Soporte prioritario', 'Actualizaciones semanales', 'Monitoreo'] }
    ]
  },
  {
    id: 3,
    title: 'Migración de Aplicaciones',
    slug: 'migracion',
    description: 'Modernizo y migro aplicaciones legacy a tecnologías actuales.',
    longDescription: '¿Tu aplicación está obsoleta? La migro a tecnologías modernas mejorando rendimiento, seguridad y experiencia de usuario.',
    icon: '🔄',
    image: '/images/services/migracion.jpg',
    features: [
      'Análisis de código legacy',
      'Migración incremental',
      'Pruebas de compatibilidad',
      'Migración de datos',
      'Documentación actualizada'
    ],
    technologies: ['Legacy → React/Vue', 'PHP → Node.js', 'jQuery → Framework moderno'],
    caseStudies: ['Migración de sistema administrativo', 'Actualización de e-commerce']
  },
  {
    id: 4,
    title: 'Gestión y Alojamiento',
    slug: 'hosting',
    description: 'Servicios de hosting, deployment y gestión de servidores en la nube.',
    longDescription: 'Infraestructura robusta para tus aplicaciones. Configuro servidores, dominios, SSL y monitoreo para máxima disponibilidad.',
    icon: '☁️',
    image: '/images/services/hosting.jpg',
    features: [
      'Deployment automático',
      'SSL/TLS certificados',
      'CDN integrado',
      'Backups diarios',
      'Escalabilidad automática'
    ],
    providers: ['Vercel', 'AWS', 'DigitalOcean', 'Netlify'],
    pricing: 'Desde $XXX/mes según recursos'
  }
];