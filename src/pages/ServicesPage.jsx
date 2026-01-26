// src/pages/ServicesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const ServicesPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      title: t.desarrollo,
      icon: "🚀",
      color: "#2563eb",
      description: t.desarrolloDesc
    },
    {
      title: t.soporte,
      icon: "🔧",
      color: "#7c3aed",
      description: t.soporteDesc
    },
    {
      title: t.migracion,
      icon: "🔄",
      color: "#059669",
      description: t.migracionDesc
    },
    {
      title: t.hosting,
      icon: "☁️",
      color: "#dc2626",
      description: t.hostingDesc
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
        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '20px'
          }}>
            <span style={{ color: '#2563eb' }}>{t.nuestrosServicios}</span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#64748b',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {t.serviciosDesc}
          </p>
        </div>

        {/* Grid de Servicios - RESPONSIVE SIMPLE */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                padding: '30px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                textAlign: 'left',
                transition: 'transform 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}40 100%)`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                marginBottom: '20px'
              }}>
                {service.icon}
              </div>
              
              <h3 style={{ 
                color: '#1e293b',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '15px'
              }}>
                {service.title}
              </h3>
              
              <p style={{
                color: '#475569',
                lineHeight: '1.7',
                fontSize: '1.1rem',
                flex: 1
              }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Proceso de Trabajo */}
        <div style={{
          background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
          padding: '50px',
          borderRadius: '16px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: 'bold',
            marginBottom: '30px'
          }}>
            {t.procesoTrabajo}
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            marginTop: '40px'
          }}>
            {[
              { step: '1', title: t.consulta, desc: t.analizamosNecesidades },
              { step: '2', title: t.planificacion, desc: t.disenamosSolucion },
              { step: '3', title: t.entrega, desc: t.implementamosCalidad },
              { step: '4', title: t.soporteMantenimiento, desc: t.soporteMantenimiento }
            ].map((item, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  margin: '0 auto 15px'
                }}>
                  {item.step}
                </div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '10px', fontWeight: '600' }}>
                  {item.title}
                </h4>
                <p style={{ opacity: 0.9 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '40px' }}>
            <Link 
              to="/contacto"
              style={{
                background: 'white',
                color: '#2563eb',
                padding: '15px 40px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 8px 25px rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {t.solicitarPresupuesto}
            </Link>
          </div>
        </div>
      </div>

      {/* Media queries inline con CSS */}
      <style>{`
        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
          
          .service-card {
            padding: 20px !important;
          }
          
          .process-container {
            padding: 30px 20px !important;
          }
          
          .service-icon {
            width: 50px !important;
            height: 50px !important;
            font-size: 1.5rem !important;
          }
          
          .process-step {
            width: 50px !important;
            height: 50px !important;
            font-size: 1.25rem !important;
          }
          
          h1 {
            font-size: 2rem !important;
          }
          
          h2 {
            font-size: 1.8rem !important;
          }
          
          .service-title {
            font-size: 1.25rem !important;
          }
          
          .process-title {
            font-size: 1.1rem !important;
          }
          
          .cta-button {
            padding: 12px 30px !important;
            font-size: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .description {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;