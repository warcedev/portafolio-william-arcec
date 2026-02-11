// src/pages/ProcessPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './ProcessPage.css';

const ProcessPage = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      heroTitle: 'Nuestro Proceso de Trabajo',
      heroSubtitle: 'Metodología probada para garantizar el éxito de tu proyecto',
      methodologyTitle: 'Metodología Ágil',
      methodologyDesc: 'Trabajamos con metodologías ágiles que nos permiten adaptarnos rápidamente a los cambios, entregar valor continuamente y mantener una comunicación transparente en cada etapa.',
      processTitle: 'Etapas del Proceso',
      phases: [
        {
          number: '01',
          title: 'Descubrimiento & Análisis',
          description: 'Entendemos tus necesidades, objetivos y audiencia. Analizamos el mercado y definimos el alcance del proyecto.',
          activities: [
            'Reunión inicial de descubrimiento',
            'Análisis de competencia',
            'Definición de objetivos y KPIs',
            'Establecimiento de alcance'
          ],
          duration: '1-2 semanas',
          icon: '🔍'
        },
        {
          number: '02',
          title: 'Planificación & Estrategia',
          description: 'Creamos un plan detallado, arquitectura técnica y roadmap del proyecto. Definimos tecnologías y recursos.',
          activities: [
            'Wireframes y prototipos',
            'Arquitectura técnica',
            'Planificación de sprints',
            'Asignación de recursos'
          ],
          duration: '1 semana',
          icon: '📋'
        },
        {
          number: '03',
          title: 'Diseño & Desarrollo',
          description: 'Implementamos el diseño UI/UX y desarrollamos el producto. Trabajamos en sprints con entregas parciales.',
          activities: [
            'Diseño de interfaz (UI)',
            'Desarrollo frontend y backend',
            'Pruebas de funcionalidad',
            'Revisiones semanales'
          ],
          duration: '4-8 semanas',
          icon: '💻'
        },
        {
          number: '04',
          title: 'Pruebas & Calidad',
          description: 'Realizamos pruebas exhaustivas para garantizar calidad, rendimiento y seguridad del producto.',
          activities: [
            'Pruebas funcionales',
            'Pruebas de rendimiento',
            'Pruebas de seguridad',
            'Pruebas de usabilidad'
          ],
          duration: '1-2 semanas',
          icon: '🧪'
        },
        {
          number: '05',
          title: 'Despliegue & Lanzamiento',
          description: 'Implementamos el proyecto en producción, realizamos monitoreo inicial y capacitación si es necesario.',
          activities: [
            'Despliegue en servidor',
            'Migración de datos',
            'Monitoreo inicial',
            'Capacitación de usuarios'
          ],
          duration: '1 semana',
          icon: '🚀'
        },
        {
          number: '06',
          title: 'Mantenimiento & Soporte',
          description: 'Ofrecemos soporte continuo, actualizaciones y mejoras para mantener tu proyecto actualizado y funcionando perfectamente.',
          activities: [
            'Soporte técnico 24/7',
            'Actualizaciones de seguridad',
            'Mejoras continuas',
            'Reportes mensuales'
          ],
          duration: 'Continuo',
          icon: '🛡️'
        }
      ],
      technologiesTitle: 'Tecnologías que Utilizamos',
      technologies: [
        {
          category: 'Frontend',
          tools: ['React.js', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite']
        },
        {
          category: 'Backend',
          tools: ['Node.js', 'Python/Django', 'Express.js', 'PostgreSQL', 'MongoDB', 'Firebase']
        },
        {
          category: 'DevOps & Cloud',
          tools: ['AWS', 'Docker', 'GitHub Actions', 'Nginx', 'Linux', 'CI/CD']
        },
        // {
        //   category: 'Diseño & UX',
        //   tools: ['Figma', 'Adobe XD', 'Sketch', 'Adobe Creative Suite', 'Prototyping']
        // }
      ],
      benefitsTitle: 'Beneficios de Nuestro Enfoque',
      benefits: [
        {
          title: 'Transparencia Total',
          description: 'Sabrás exactamente en qué estamos trabajando, cuánto cuesta y cuándo estará listo.',
          icon: '👁️'
        },
        {
          title: 'Comunicación Constante',
          description: 'Reuniones semanales, reportes de progreso y canales abiertos 24/7 para preguntas.',
          icon: '💬'
        },
        {
          title: 'Flexibilidad',
          description: 'Nos adaptamos a tus necesidades cambiantes sin comprometer la calidad o los plazos.',
          icon: '🔄'
        },
        {
          title: 'Calidad Garantizada',
          description: 'Cada línea de código pasa por revisiones y pruebas rigurosas antes de la entrega.',
          icon: '⭐'
        }
      ],
      faqTitle: 'Preguntas Frecuentes',
      faqs: [
        {
          question: '¿Cuánto tiempo toma desarrollar un proyecto web?',
          answer: 'Varía según la complejidad. Un sitio web corporativo puede tomar 4-6 semanas, mientras que una aplicación web compleja puede requerir 2-4 meses.'
        },
        {
          question: '¿Ofrecen mantenimiento después del lanzamiento?',
          answer: 'Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, soporte técnico y mejoras continuas.'
        },
        {
          question: '¿Cómo manejan los cambios durante el desarrollo?',
          answer: 'Utilizamos metodologías ágiles que permiten cambios. Los cambios menores se incorporan fácilmente, mientras que cambios mayores se evalúan y presupuestan por separado.'
        },
        {
          question: '¿Trabajan con empresas internacionales?',
          answer: '¡Absolutamente! Trabajamos con clientes en toda Latinoamérica y estamos equipados para colaborar de manera remota y eficiente.'
        }
      ],
      ctaTitle: '¿Listo para comenzar?',
      ctaSubtitle: 'Hablemos sobre tu proyecto y creemos un plan personalizado',
      ctaButton: 'Iniciar proyecto'
    },
    en: {
      heroTitle: 'Our Work Process',
      heroSubtitle: 'Proven methodology to ensure your project success',
      methodologyTitle: 'Agile Methodology',
      methodologyDesc: 'We work with agile methodologies that allow us to quickly adapt to changes, deliver value continuously, and maintain transparent communication at every stage.',
      processTitle: 'Process Stages',
      phases: [
        {
          number: '01',
          title: 'Discovery & Analysis',
          description: 'We understand your needs, goals, and audience. We analyze the market and define the project scope.',
          activities: [
            'Initial discovery meeting',
            'Competitor analysis',
            'Goal and KPI definition',
            'Scope establishment'
          ],
          duration: '1-2 weeks',
          icon: '🔍'
        },
        {
          number: '02',
          title: 'Planning & Strategy',
          description: 'We create a detailed plan, technical architecture, and project roadmap. We define technologies and resources.',
          activities: [
            'Wireframes and prototypes',
            'Technical architecture',
            'Sprint planning',
            'Resource allocation'
          ],
          duration: '1 week',
          icon: '📋'
        },
        {
          number: '03',
          title: 'Design & Development',
          description: 'We implement UI/UX design and develop the product. We work in sprints with partial deliveries.',
          activities: [
            'Interface design (UI)',
            'Frontend and backend development',
            'Functionality testing',
            'Weekly reviews'
          ],
          duration: '4-8 weeks',
          icon: '💻'
        },
        {
          number: '04',
          title: 'Testing & Quality',
          description: 'We conduct thorough testing to ensure product quality, performance, and security.',
          activities: [
            'Functional testing',
            'Performance testing',
            'Security testing',
            'Usability testing'
          ],
          duration: '1-2 weeks',
          icon: '🧪'
        },
        {
          number: '05',
          title: 'Deployment & Launch',
          description: 'We implement the project in production, conduct initial monitoring, and provide training if needed.',
          activities: [
            'Server deployment',
            'Data migration',
            'Initial monitoring',
            'User training'
          ],
          duration: '1 week',
          icon: '🚀'
        },
        {
          number: '06',
          title: 'Maintenance & Support',
          description: 'We offer continuous support, updates, and improvements to keep your project updated and running perfectly.',
          activities: [
            '24/7 technical support',
            'Security updates',
            'Continuous improvements',
            'Monthly reports'
          ],
          duration: 'Ongoing',
          icon: '🛡️'
        }
      ],
      technologiesTitle: 'Technologies We Use',
      technologies: [
        {
          category: 'Frontend',
          tools: ['React.js', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite']
        },
        {
          category: 'Backend',
          tools: ['Node.js', 'Python/Django', 'Express.js', 'PostgreSQL', 'MongoDB', 'Firebase']
        },
        {
          category: 'DevOps & Cloud',
          tools: ['AWS', 'Docker', 'GitHub Actions', 'Nginx', 'Linux', 'CI/CD']
        },
        {
          category: 'Design & UX',
          tools: ['Figma', 'Adobe XD', 'Sketch', 'Adobe Creative Suite', 'Prototyping']
        }
      ],
      benefitsTitle: 'Benefits of Our Approach',
      benefits: [
        {
          title: 'Total Transparency',
          description: 'You\'ll know exactly what we\'re working on, how much it costs, and when it will be ready.',
          icon: '👁️'
        },
        {
          title: 'Constant Communication',
          description: 'Weekly meetings, progress reports, and open channels 24/7 for questions.',
          icon: '💬'
        },
        {
          title: 'Flexibility',
          description: 'We adapt to your changing needs without compromising quality or deadlines.',
          icon: '🔄'
        },
        {
          title: 'Guaranteed Quality',
          description: 'Every line of code goes through rigorous reviews and testing before delivery.',
          icon: '⭐'
        }
      ],
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        {
          question: 'How long does it take to develop a web project?',
          answer: 'It varies based on complexity. A corporate website can take 4-6 weeks, while a complex web application may require 2-4 months.'
        },
        {
          question: 'Do you offer maintenance after launch?',
          answer: 'Yes, we offer monthly maintenance plans that include updates, technical support, and continuous improvements.'
        },
        {
          question: 'How do you handle changes during development?',
          answer: 'We use agile methodologies that allow changes. Minor changes are easily incorporated, while major changes are evaluated and budgeted separately.'
        },
        {
          question: 'Do you work with international companies?',
          answer: 'Absolutely! We work with clients throughout Latin America and are equipped to collaborate remotely and efficiently.'
        }
      ],
      ctaTitle: 'Ready to get started?',
      ctaSubtitle: 'Let\'s talk about your project and create a customized plan',
      ctaButton: 'Start project'
    }
  };

  const t = content[language];

  return (
      <div className="process-page">
        {/* Hero Section */}
        <section className="process-hero">
          <div className="process-hero-content">
            <h1 className="process-hero-title">{t.heroTitle}</h1>
            <p className="process-hero-subtitle">{t.heroSubtitle}</p>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="section">
          <div className="container">
            <div className="methodology-intro">
              <h2 className="section-title">{t.methodologyTitle}</h2>
              <p className="methodology-desc">{t.methodologyDesc}</p>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="section bg-light">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t.processTitle}</h2>
              <div className="title-line"></div>
            </div>
            <div className="process-timeline">
              {t.phases.map((phase, index) => (
                  <div key={index} className="phase-card">
                    <div className="phase-header">
                      <div className="phase-number">{phase.number}</div>
                      <div className="phase-icon">{phase.icon}</div>
                    </div>
                    <h3 className="phase-title">{phase.title}</h3>
                    <p className="phase-description">{phase.description}</p>

                    <div className="phase-duration">
                      <span className="duration-label">Duración:</span>
                      <span className="duration-value">{phase.duration}</span>
                    </div>

                    <div className="phase-activities">
                      <h4>Actividades:</h4>
                      <ul className="activities-list">
                        {phase.activities.map((activity, activityIndex) => (
                            <li key={activityIndex} className="activity-item">
                              <span className="activity-bullet">•</span>
                              {activity}
                            </li>
                        ))}
                      </ul>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t.technologiesTitle}</h2>
              <div className="title-line"></div>
            </div>
            <div className="technologies-grid">
              {t.technologies.map((tech, index) => (
                  <div key={index} className="technology-card">
                    <h3 className="tech-category">{tech.category}</h3>
                    <div className="tech-tools">
                      {tech.tools.map((tool, toolIndex) => (
                          <span key={toolIndex} className="tech-tool">
                                            {tool}
                                        </span>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section bg-light">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t.benefitsTitle}</h2>
              <div className="title-line"></div>
            </div>
            <div className="benefits-grid">
              {t.benefits.map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    <div className="benefit-icon">{benefit.icon}</div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t.faqTitle}</h2>
              <div className="title-line"></div>
            </div>
            <div className="faq-grid">
              {t.faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <div className="faq-question">
                      <h3>{faq.question}</h3>
                      <span className="faq-toggle">+</span>
                    </div>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2 className="cta-title">{t.ctaTitle}</h2>
            <p className="cta-subtitle">{t.ctaSubtitle}</p>
            <Link to="/contacto" className="btn-cta">
              {t.ctaButton}
            </Link>
          </div>
        </section>
      </div>
  );
};

export default ProcessPage;