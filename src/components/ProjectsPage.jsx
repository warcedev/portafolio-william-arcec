// src/components/ProjectsPage.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const ProjectsPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      id: 1,
      title: "RifasWeb",
      description: language === 'es' 
        ? "Sistema completo de gestión de rifas con panel administrativo, procesamiento de pagos y seguimiento en tiempo real. Permite a organizaciones crear, administrar y promover rifas de manera eficiente."
        : "Complete raffle management system with administrative panel, payment processing and real-time tracking. Allows organizations to create, manage and promote raffles efficiently.",
      technologies: ["Laravel", "React", "Vite", "MySQL", "Tailwind CSS"],
      features: language === 'es' 
        ? ["Panel de administración completo", "Procesamiento de pagos integrado", "Seguimiento en tiempo real", "Sistema de notificaciones", "Reportes y estadísticas"]
        : ["Complete admin panel", "Integrated payment processing", "Real-time tracking", "Notification system", "Reports and statistics"],
      image: "/rifasdigitales.png",
      githubUrl: "https://github.com/warcedev/Rifas-Web",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "DocuWeb",
      description: language === 'es' 
        ? "Sistema de documentación colaborativa para equipos de desarrollo. Centraliza documentación técnica, manuales de usuario y procedimientos con control de versiones y permisos granulares."
        : "Collaborative documentation system for development teams. Centralizes technical documentation, user manuals and procedures with version control and granular permissions.",
      technologies: ["Laravel", "React", "Vite", "PostgreSQL", "Markdown"],
      features: language === 'es' 
        ? ["Editor markdown en tiempo real", "Control de versiones", "Búsqueda inteligente", "Colaboración en equipo", "Exportación a múltiples formatos"]
        : ["Real-time markdown editor", "Version control", "Smart search", "Team collaboration", "Export to multiple formats"],
      image: "/docuweb.jpeg",
      githubUrl: "https://github.com/warcedev/Docuweb",
      liveUrl: "#"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      paddingTop: '80px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '20px'
          }}>
            <span style={{ color: '#2563eb' }}>{t.misProyectos}</span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#64748b',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {t.proyectosDesc}
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '60px'
        }}>
          {projects.map((project, index) => (
            <div 
              key={project.id}
              style={{
                background: 'white',
                borderRadius: '16px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                alignItems: 'center'
              }}
            >
              <div style={{
                width: '45%',
                height: '400px',
                overflow: 'hidden'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              <div style={{
                width: '55%',
                padding: '40px'
              }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>
                  {project.title}
                </h2>
                
                <p style={{
                  color: '#475569',
                  lineHeight: '1.7',
                  marginBottom: '20px',
                  fontSize: '1.1rem'
                }}>
                  {project.description}
                </p>

                <div style={{ marginBottom: '25px' }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#334155',
                    marginBottom: '10px'
                  }}>
                    {t.tecnologiasUtilizadas}
                  </h3>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}>
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        style={{
                          background: '#e2e8f0',
                          color: '#475569',
                          padding: '6px 12px',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#334155',
                    marginBottom: '10px'
                  }}>
                    {t.caracteristicas}
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0
                  }}>
                    {project.features.map((feature, idx) => (
                      <li 
                        key={idx}
                        style={{
                          color: '#475569',
                          marginBottom: '8px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px'
                        }}
                      >
                        <span style={{ color: '#2563eb' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '15px',
                  marginTop: '30px'
                }}>
                  <a 
                    href={project.githubUrl}
                    style={{
                      background: '#1e293b',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    {t.verCodigo}
                  </a>
                  {/* <a 
                    href={project.liveUrl}
                    style={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    {t.verDemo}
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '80px',
          padding: '40px',
          background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
          borderRadius: '16px',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            {t.proyectoMente}
          </h2>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '30px',
            maxWidth: '800px',
            margin: '0 auto 30px',
            opacity: 0.9
          }}>
            {t.proyectoDesc}
          </p>
          <a 
            href="/contacto"
            style={{
              background: 'white',
              color: '#2563eb',
              padding: '15px 30px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              display: 'inline-block'
            }}
          >
            {t.contactarAhora.replace('✉️ ', '')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;