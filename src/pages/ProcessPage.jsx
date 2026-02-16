// src/pages/ProcessPage.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './ProcessPage.css';

const ProcessPage = () => {
  const { language } = useLanguage();
  const observerRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const content = {
    es: {
      heroTitle: 'Nuestro Proceso de Trabajo',
      heroSubtitle: 'Metodología probada para garantizar el éxito de tu proyecto',
      heroBadge: 'Metodología Ágil',
      methodologyTitle: 'Metodología Ágil',
      methodologyDesc: 'Trabajamos con metodologías ágiles que nos permiten adaptarnos rápidamente a los cambios, entregar valor continuamente y mantener una comunicación transparente en cada etapa del desarrollo.',
      processTitle: 'Etapas del Proceso',
      processSubtitle: 'Un camino claro desde la idea hasta el lanzamiento',
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
          icon: '🔍',
          color: '#2563EB'
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
          icon: '📋',
          color: '#3B82F6'
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
          icon: '💻',
          color: '#4F6BFF'
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
          icon: '🧪',
          color: '#6366F1'
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
          icon: '🚀',
          color: '#8B5CF6'
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
          icon: '🛡️',
          color: '#7C3AED'
        }
      ],
      technologiesTitle: 'Tecnologías que Utilizamos',
      technologiesSubtitle: 'Stack tecnológico moderno y escalable',
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
        }
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
      faqSubtitle: 'Resolvemos tus dudas sobre nuestro proceso',
      faqs: [
        {
          question: '¿Cuánto tiempo toma desarrollar un proyecto web?',
          answer: 'Varía según la complejidad. Un sitio web corporativo puede tomar 4-6 semanas, mientras que una aplicación web compleja puede requerir 2-4 meses. Durante la fase de descubrimiento te daremos un estimado preciso basado en tus necesidades específicas.'
        },
        {
          question: '¿Ofrecen mantenimiento después del lanzamiento?',
          answer: 'Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, soporte técnico, copias de seguridad y mejoras continuas. Podemos adaptar un plan según tus necesidades.'
        },
        {
          question: '¿Cómo manejan los cambios durante el desarrollo?',
          answer: 'Utilizamos metodologías ágiles que permiten cambios. Los cambios menores se incorporan fácilmente en el sprint actual, mientras que cambios mayores se evalúan, presupuestan y programan para sprints futuros.'
        },
        {
          question: '¿Trabajan con empresas internacionales?',
          answer: '¡Absolutamente! Trabajamos con clientes en toda Latinoamérica y estamos equipados para colaborar de manera remota y eficiente. Nuestro proceso está diseñado para equipos distribuidos.'
        },
        {
          question: '¿Qué incluye el presupuesto?',
          answer: 'Nuestros presupuestos son transparentes e incluyen: desarrollo, pruebas, despliegue, documentación y soporte inicial. También detallamos cualquier costo adicional como servidores, licencias o servicios de terceros.'
        },
        {
          question: '¿Cómo garantizan la calidad del código?',
          answer: 'Implementamos múltiples capas de control de calidad: revisiones de código por pares, pruebas automatizadas, pruebas manuales, análisis de rendimiento y auditorías de seguridad antes de cada entrega.'
        }
      ],
      ctaTitle: '¿Listo para comenzar?',
      ctaSubtitle: 'Hablemos sobre tu proyecto y creemos un plan personalizado',
      ctaButton: 'Iniciar proyecto'
    },
    en: {
      heroTitle: 'Our Work Process',
      heroSubtitle: 'Proven methodology to ensure your project success',
      heroBadge: 'Agile Methodology',
      methodologyTitle: 'Agile Methodology',
      methodologyDesc: 'We work with agile methodologies that allow us to quickly adapt to changes, deliver value continuously, and maintain transparent communication at every stage of development.',
      processTitle: 'Process Stages',
      processSubtitle: 'A clear path from idea to launch',
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
          icon: '🔍',
          color: '#2563EB'
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
          icon: '📋',
          color: '#3B82F6'
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
          icon: '💻',
          color: '#4F6BFF'
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
          icon: '🧪',
          color: '#6366F1'
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
          icon: '🚀',
          color: '#8B5CF6'
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
          icon: '🛡️',
          color: '#7C3AED'
        }
      ],
      technologiesTitle: 'Technologies We Use',
      technologiesSubtitle: 'Modern and scalable tech stack',
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
      faqSubtitle: 'Answers to your questions about our process',
      faqs: [
        {
          question: 'How long does it take to develop a web project?',
          answer: 'It varies based on complexity. A corporate website can take 4-6 weeks, while a complex web application may require 2-4 months. During the discovery phase, we\'ll give you a precise estimate based on your specific needs.'
        },
        {
          question: 'Do you offer maintenance after launch?',
          answer: 'Yes, we offer monthly maintenance plans that include security updates, technical support, backups, and continuous improvements. We can adapt a plan according to your needs.'
        },
        {
          question: 'How do you handle changes during development?',
          answer: 'We use agile methodologies that allow changes. Minor changes are easily incorporated into the current sprint, while major changes are evaluated, budgeted, and scheduled for future sprints.'
        },
        {
          question: 'Do you work with international companies?',
          answer: 'Absolutely! We work with clients throughout Latin America and are equipped to collaborate remotely and efficiently. Our process is designed for distributed teams.'
        },
        {
          question: 'What does the budget include?',
          answer: 'Our budgets are transparent and include: development, testing, deployment, documentation, and initial support. We also detail any additional costs such as servers, licenses, or third-party services.'
        },
        {
          question: 'How do you guarantee code quality?',
          answer: 'We implement multiple quality control layers: peer code reviews, automated testing, manual testing, performance analysis, and security audits before each delivery.'
        }
      ],
      ctaTitle: 'Ready to get started?',
      ctaSubtitle: 'Let\'s talk about your project and create a customized plan',
      ctaButton: 'Start project'
    }
  };

  const t = content[language];

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in-section').forEach(section => {
      observerRef.current.observe(section);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
      <div className="process-page">
        {/* Hero Section */}
        <section className="process-hero">
          <div className="hero-background">
            <div className="hero-gradient"></div>
            <div className="hero-pattern"></div>
          </div>
          <div className="process-hero-content container">
            <div className="hero-badge">
              <span className="since-badge">{t.heroBadge}</span>
            </div>
            <h1 className="process-hero-title">{t.heroTitle}</h1>
            <p className="process-hero-subtitle">{t.heroSubtitle}</p>
          </div>
          <div className="hero-scroll-indicator">
            <span className="scroll-text">Conoce el proceso</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="methodology-section fade-in-section">
          <div className="container">
            <div className="methodology-grid">
              <div className="methodology-content">
                <div className="section-header-left">
                  <span className="section-tag">Nuestra forma de trabajar</span>
                  <h2 className="section-title">{t.methodologyTitle}</h2>
                  <div className="title-line-left"></div>
                </div>
                <p className="methodology-desc">{t.methodologyDesc}</p>
                <div className="methodology-features">
                  <div className="methodology-feature">
                    <div className="feature-dot"></div>
                    <span>Entregas continuas</span>
                  </div>
                  <div className="methodology-feature">
                    <div className="feature-dot"></div>
                    <span>Adaptación al cambio</span>
                  </div>
                  <div className="methodology-feature">
                    <div className="feature-dot"></div>
                    <span>Colaboración constante</span>
                  </div>
                </div>
              </div>
              <div className="methodology-image">
                <div className="methodology-stats">
                  <div className="methodology-stat">
                    <span className="stat-value">2</span>
                    <span className="stat-label">Semanas por sprint</span>
                  </div>
                  <div className="methodology-stat">
                    <span className="stat-value">100%</span>
                    <span className="stat-label">Transparencia</span>
                  </div>
                  <div className="methodology-stat">
                    <span className="stat-value">24/7</span>
                    <span className="stat-label">Comunicación</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="process-timeline-section fade-in-section">
          <div className="container">
            <div className="section-header-center">
              <span className="section-tag">Nuestro flujo de trabajo</span>
              <h2 className="section-title">{t.processTitle}</h2>
              <p className="section-subtitle">{t.processSubtitle}</p>
              <div className="title-line-center"></div>
            </div>
            <div className="process-timeline">
              {t.phases.map((phase, index) => (
                  <div key={index} className="phase-card" style={{ '--phase-color': phase.color }}>
                    <div className="phase-header">
                      <div className="phase-number-wrapper">
                        <span className="phase-number">{phase.number}</span>
                      </div>
                      <div className="phase-icon-wrapper">
                        <span className="phase-icon">{phase.icon}</span>
                      </div>
                    </div>
                    <h3 className="phase-title">{phase.title}</h3>
                    <p className="phase-description">{phase.description}</p>

                    <div className="phase-duration">
                      <svg className="duration-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M8 4V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span className="duration-label">Duración:</span>
                      <span className="duration-value">{phase.duration}</span>
                    </div>

                    <div className="phase-activities">
                      <h4>Actividades clave:</h4>
                      <ul className="activities-list">
                        {phase.activities.map((activity, activityIndex) => (
                            <li key={activityIndex} className="activity-item">
                              <span className="activity-bullet">→</span>
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
        <section className="technologies-section fade-in-section">
          <div className="container">
            <div className="section-header-center">
              <span className="section-tag">Stack tecnológico</span>
              <h2 className="section-title">{t.technologiesTitle}</h2>
              <p className="section-subtitle">{t.technologiesSubtitle}</p>
              <div className="title-line-center"></div>
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
        <section className="benefits-section fade-in-section">
          <div className="container">
            <div className="section-header-center">
              <span className="section-tag">Ventajas competitivas</span>
              <h2 className="section-title">{t.benefitsTitle}</h2>
              <div className="title-line-center"></div>
            </div>
            <div className="benefits-grid">
              {t.benefits.map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    <div className="benefit-icon-wrapper">
                      <span className="benefit-icon">{benefit.icon}</span>
                    </div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section fade-in-section">
          <div className="container">
            <div className="section-header-center">
              <span className="section-tag">Preguntas frecuentes</span>
              <h2 className="section-title">{t.faqTitle}</h2>
              <p className="section-subtitle">{t.faqSubtitle}</p>
              <div className="title-line-center"></div>
            </div>
            <div className="faq-grid">
              {t.faqs.map((faq, index) => (
                  <div
                      key={index}
                      className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                      onClick={() => toggleFaq(index)}
                  >
                    <div className="faq-question">
                      <h3>{faq.question}</h3>
                      <span className="faq-toggle">{activeFaq === index ? '−' : '+'}</span>
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
        <section className="process-cta-section fade-in-section">
          <div className="cta-background">
            <div className="cta-pattern"></div>
          </div>
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">{t.ctaTitle}</h2>
              <p className="cta-subtitle">{t.ctaSubtitle}</p>
              <Link to="/contacto" className="btn-cta">
                {t.ctaButton}
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
};

export default ProcessPage;