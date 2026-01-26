// src/pages/ContactPage.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const ContactPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const contactInfo = {
    email: 'william.arcedev@gmail.com',
    phone: '+595982375298',
    whatsapp: '+595982375298',
    linkedin: 'https://www.linkedin.com/in/willarce/',
    address: language === 'es' ? 'Luque, Paraguay' : 'Luque, Paraguay',
    github: 'https://github.com/warcedev'
  }; 

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handleCallClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`, '_blank');
  };

  const handleLinkedInClick = () => {
    window.open(contactInfo.linkedin, '_blank');
  };

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
            <span style={{ color: '#2563eb' }}>{t.contactame}</span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#64748b',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {t.contactoDesc}
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          justifyContent: 'center'
        }}>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '16px',
            boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
            width: '100%',
            maxWidth: '500px'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '30px'
            }}>
              {t.informacionContacto}
            </h2>

            {/* Email */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '25px',
              padding: '15px',
              background: '#f8fafc',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
            onClick={handleEmailClick}
            >
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem'
              }}>
                ✉️
              </div>
              <div>
                <h3 style={{ color: '#475569', marginBottom: '5px' }}>{t.email}</h3>
                <p style={{ color: '#2563eb', fontWeight: '500' }}>{contactInfo.email}</p>
              </div>
            </div>

            {/* Teléfono */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '25px',
              padding: '15px',
              background: '#f8fafc',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
            onClick={handleCallClick}
            >
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem'
              }}>
                📞
              </div>
              <div>
                <h3 style={{ color: '#475569', marginBottom: '5px' }}>{t.telefono}</h3>
                <p style={{ color: '#059669', fontWeight: '500' }}>{contactInfo.phone}</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '25px',
              padding: '15px',
              background: '#f8fafc',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
            onClick={handleWhatsAppClick}
            >
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem'
              }}>
                💬
              </div>
              <div>
                <h3 style={{ color: '#475569', marginBottom: '5px' }}>{t.whatsapp}</h3>
                <p style={{ color: '#25D366', fontWeight: '500' }}>{contactInfo.whatsapp}</p>
              </div>
            </div>

            {/* LinkedIn */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '25px',
              padding: '15px',
              background: '#f8fafc',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
            onClick={handleLinkedInClick}
            >
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #0077B5 0%, #0A66C2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem'
              }}>
                💼
              </div>
              <div>
                <h3 style={{ color: '#475569', marginBottom: '5px' }}>{t.linkedin}</h3>
                <p style={{ color: '#0077B5', fontWeight: '500' }}>{t.verPerfil}</p>
              </div>
            </div>

            {/* Dirección */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              padding: '15px',
              background: '#f8fafc',
              borderRadius: '10px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem'
              }}>
                📍
              </div>
              <div>
                <h3 style={{ color: '#475569', marginBottom: '5px' }}>{t.ubicacion}</h3>
                <p style={{ color: '#7c3aed', fontWeight: '500' }}>{contactInfo.address}</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '16px',
            boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
            width: '100%',
            maxWidth: '500px'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '30px'
            }}>
              {t.enviarMensaje}
            </h2>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{
                  display: 'block',
                  color: '#475569',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  {t.nombre}
                </label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                  placeholder={t.tuNombre}
                />
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  color: '#475569',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  {t.email}
                </label>
                <input
                  type="email"
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                  placeholder={t.tuEmail}
                />
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  color: '#475569',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  {t.mensaje}
                </label>
                <textarea
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                  placeholder={t.mensajePlaceholder}
                />
              </div>
              
              <button
                type="button"
                onClick={handleEmailClick}
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
              >
                {t.enviarMensajeBtn}
              </button>
              
              <p style={{
                color: '#64748b',
                fontSize: '0.9rem',
                textAlign: 'center',
                marginTop: '10px'
              }}>
                {t.enviarDesc}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;