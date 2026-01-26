// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <main style={{
        padding: '20px',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        minHeight: 'calc(100vh - 80px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '80px'
        }}>
          {/* Hero Section */}
          <div style={{
            textAlign: 'center',
            marginBottom: '80px',
            padding: '0 20px'
          }}>
            <h1 style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '20px',
              lineHeight: '1.2'
            }}>
              <span style={{ color: '#2563eb' }}>{t.heroTitle1}</span>{' '}
              <span style={{ color: '#7c3aed' }}>{t.heroTitle2}</span>{' '}
              <span style={{ color: '#1e293b' }}>{t.heroTitle3}</span>{' '}
              <span style={{ color: '#059669' }}>{t.heroTitle4}</span>
            </h1>
            
            <p style={{
              fontSize: '1.5rem',
              color: '#64748b',
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: '1.6'
            }}>
              {t.heroDescription}
            </p>
            
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '40px'
            }}>
              <Link to="/servicios">
                <button style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '18px 40px',
                  borderRadius: '12px',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 15px 30px rgba(37, 99, 235, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 25px rgba(37, 99, 235, 0.3)';
                }}>
                  {t.verServicios}
                </button>
              </Link>
              
              <Link to="/contacto">
                <button style={{
                  background: 'white',
                  color: '#2563eb',
                  border: '2px solid #2563eb',
                  padding: '18px 40px',
                  borderRadius: '12px',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#2563eb';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = '#2563eb';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  {t.contactarAhora}
                </button>
              </Link>
            </div>
          </div>

          {/* Sección: ¿Quiénes Somos? */}
          <div style={{
            background: 'white',
            padding: '60px',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            marginBottom: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '50px',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h2 style={{
                fontSize: '2.8rem',
                fontWeight: 'bold',
                color: '#1e293b',
                marginBottom: '25px'
              }}>
                <span style={{ color: '#2563eb' }}>{t.quienesSomos}</span>
              </h2>
              
              <p style={{
                fontSize: '1.3rem',
                color: '#475569',
                lineHeight: '1.8',
                marginBottom: '25px'
              }}>
                {t.quienesSomosDesc1}
              </p>
              
              <p style={{
                fontSize: '1.3rem',
                color: '#475569',
                lineHeight: '1.8',
                marginBottom: '30px'
              }}>
                {t.quienesSomosDesc2}
              </p>
              
              <div style={{
                display: 'flex',
                gap: '15px',
                flexWrap: 'wrap'
              }}>
                {/* <div style={{
                  background: '#f1f5f9',
                  padding: '15px 25px',
                  borderRadius: '10px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    color: '#2563eb',
                    marginBottom: '5px'
                  }}>5+</div>
                  <div style={{ color: '#64748b' }}>{t.añosExperiencia}</div>
                </div> */}
                
                {/* <div style={{
                  background: '#f1f5f9',
                  padding: '15px 25px',
                  borderRadius: '10px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    color: '#7c3aed',
                    marginBottom: '5px'
                  }}>50+</div>
                  <div style={{ color: '#64748b' }}>{t.proyectosCompletados}</div>
                </div> */}
                
                {/* <div style={{
                  background: '#f1f5f9',
                  padding: '15px 25px',
                  borderRadius: '10px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    color: '#059669',
                    marginBottom: '5px'
                  }}>100%</div>
                  <div style={{ color: '#64748b' }}>{t.clientesSatisfechos}</div>
                </div> */}
              </div>
            </div>
            
            <div style={{
              flex: 1,
              minWidth: '300px',
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              padding: '40px',
              borderRadius: '16px',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>💻</div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '20px'
              }}>
                {t.nuestraFilosofia}
              </h3>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.7',
                opacity: 0.9
              }}>
                {t.filosofiaDesc}
              </p>
              <p style={{
                marginTop: '20px',
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}>
                {t.fundador}
              </p>
            </div>
          </div>

          {/* Sección: ¿Qué Hacemos? */}
          <div style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            padding: '80px 60px',
            borderRadius: '20px',
            color: 'white',
            marginBottom: '60px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2.8rem',
              fontWeight: 'bold',
              marginBottom: '30px'
            }}>
              <span style={{ color: '#60a5fa' }}>{t.queHacemos}</span>
            </h2>
            
            <p style={{
              fontSize: '1.4rem',
              lineHeight: '1.8',
              maxWidth: '900px',
              margin: '0 auto 40px',
              opacity: 0.9
            }}>
              {t.queHacemosDesc}
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
              marginTop: '50px'
            }}>
              {[
                {
                  icon: '🚀',
                  title: t.desarrolloMedida,
                  desc: t.desarrolloMedidaDesc
                },
                {
                  icon: '🔄',
                  title: t.modernizacion,
                  desc: t.modernizacionDesc
                },
                {
                  icon: '🛡️',
                  title: t.soporteContinuo,
                  desc: t.soporteContinuoDesc
                }
              ].map((item, index) => (
                <div key={index} style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '30px',
                  borderRadius: '16px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '20px'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '15px'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    opacity: 0.8
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sección: ¿Por qué lo Hacemos? */}
          <div style={{
            background: 'white',
            padding: '60px',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '2.8rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              <span style={{ color: '#2563eb' }}>{t.porQueLoHacemos}</span>
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              marginTop: '40px'
            }}>
              <div style={{
                padding: '30px',
                borderLeft: '4px solid #2563eb',
                background: '#f8fafc',
                borderRadius: '0 12px 12px 0'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>
                  {t.porQueDesc1}
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#475569',
                  lineHeight: '1.7'
                }}>
                  {t.porQueDesc1Text}
                </p>
              </div>
              
              <div style={{
                padding: '30px',
                borderLeft: '4px solid #7c3aed',
                background: '#f8fafc',
                borderRadius: '0 12px 12px 0'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>
                  {t.porQueDesc2}
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#475569',
                  lineHeight: '1.7'
                }}>
                  {t.porQueDesc2Text}
                </p>
              </div>
              
              <div style={{
                padding: '30px',
                borderLeft: '4px solid #059669',
                background: '#f8fafc',
                borderRadius: '0 12px 12px 0'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>
                  {t.porQueDesc3}
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#475569',
                  lineHeight: '1.7'
                }}>
                  {t.porQueDesc3Text}
                </p>
              </div>
            </div>
          </div>

          {/* Sección: Nuestros Valores */}
          <div style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            padding: '80px 60px',
            borderRadius: '20px',
            color: 'white',
            marginBottom: '60px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2.8rem',
              fontWeight: 'bold',
              marginBottom: '30px'
            }}>
              <span style={{ color: '#60a5fa' }}>{t.nuestroObjetivo}</span>
            </h2>
            
            <p style={{
              fontSize: '1.4rem',
              lineHeight: '1.8',
              maxWidth: '900px',
              margin: '0 auto 40px',
              opacity: 0.9
            }}>
              {t.objetivoDesc}
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
              marginTop: '50px'
            }}>
              {[
                {
                  icon: '🎯',
                  title: t.mision,
                  desc: t.misionDesc
                },
                {
                  icon: '👁️',
                  title: t.vision,
                  desc: t.visionDesc
                },
                {
                  icon: '❤️',
                  title: t.valores,
                  desc: t.valoresDesc
                }
              ].map((item, index) => (
                <div key={index} style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '30px',
                  borderRadius: '16px',
                  textAlign: 'left'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '20px'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '15px'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    opacity: 0.8
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Llamada a la acción */}
          <div style={{
            background: 'white',
            padding: '60px',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '20px'
            }}>
              {t.listoParaEmpezar}
            </h2>
            
            <p style={{
              fontSize: '1.3rem',
              color: '#64748b',
              maxWidth: '700px',
              margin: '0 auto 40px',
              lineHeight: '1.6'
            }}>
              {t.listoDesc}
            </p>
            
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link to="/contacto">
                <button style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '18px 40px',
                  borderRadius: '12px',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 15px 30px rgba(37, 99, 235, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}>
                  {t.agendaConsulta}
                </button>
              </Link>
              
              <a 
                href="tel:+1234567890"
                style={{
                  background: 'white',
                  color: '#2563eb',
                  border: '2px solid #2563eb',
                  padding: '18px 40px',
                  borderRadius: '12px',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#2563eb';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = '#2563eb';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {t.llamarAhora}
              </a>
            </div>
            
            <p style={{
              marginTop: '30px',
              color: '#94a3b8',
              fontSize: '1rem'
            }}>
              {t.respuestaRapida}
            </p>
          </div>
        </div>
      </main>
      
      <footer style={{
        background: '#1e293b',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center',
        marginTop: '80px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          textAlign: 'left',
          marginBottom: '40px'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              <span style={{ color: '#60a5fa' }}>Code</span>
              <span style={{ color: 'white' }}>By</span>
              <span style={{ color: '#a78bfa' }}>Will</span>
            </h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
              {t.desarrolloWeb}
            </p>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '20px' }}>
              {t.enlacesRapidos}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><Link to="/" style={{ color: '#cbd5e1', textDecoration: 'none' }}>{t.inicio}</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/servicios" style={{ color: '#cbd5e1', textDecoration: 'none' }}>{t.servicios}</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/proyectos" style={{ color: '#cbd5e1', textDecoration: 'none' }}>{t.proyectos}</Link></li>
              <li><Link to="/contacto" style={{ color: '#cbd5e1', textDecoration: 'none' }}>{t.contacto}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '20px' }}>
              {language === 'es' ? 'Contacto' : 'Contact'}
            </h4>
            <p style={{ color: '#cbd5e1', marginBottom: '10px' }}>
              ✉️ contacto@codebywill.com
            </p>
            <p style={{ color: '#cbd5e1', marginBottom: '10px' }}>
              📞 +51 123 456 789
            </p>
            <p style={{ color: '#cbd5e1' }}>
              📍 {language === 'es' ? 'Lima, Perú' : 'Lima, Peru'}
            </p>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid #334155',
          paddingTop: '30px',
          marginTop: '30px'
        }}>
          <p>© {new Date().getFullYear()} William Arce - CodeByWill. {t.derechosReservados}</p>
          <p style={{ color: '#94a3b8', marginTop: '10px', fontSize: '0.9rem' }}>
            {t.desarrolloWeb}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;