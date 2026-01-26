// src/components/layout/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext'; // Ajusta la ruta
import { translations } from '../../translations'; // Ajusta la ruta
import CVModal from '../CVModal';
import LanguageSwitcher from '../LanguageSwitcher'; // Nuevo

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const handleDownloadCV = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        zIndex: 100,
        padding: '15px 0',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px'
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h1 style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#1e293b'
              }}>
                <span style={{ color: '#2563eb' }}>Code</span>
                <span style={{ color: '#1e293b' }}>By</span>
                <span style={{ color: '#7c3aed' }}>Will</span>
              </h1>
            </Link>
          </div>

          {/* Navegación y controles */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Selector de idioma */}
            <LanguageSwitcher />
            
            {/* Navegación */}
            <nav>
              <ul style={{
                display: 'flex',
                listStyle: 'none',
                gap: '30px',
                margin: 0,
                padding: 0
              }}>
                <li><Link to="/" style={navLinkStyle}>{t.inicio}</Link></li>
                <li><Link to="/servicios" style={navLinkStyle}>{t.servicios}</Link></li>
                <li><Link to="/proyectos" style={navLinkStyle}>{t.proyectos}</Link></li>
                <li><Link to="/contacto" style={navLinkStyle}>{t.contacto}</Link></li>
              </ul>
            </nav>

            {/* Botón CV */}
            <button
              onClick={handleDownloadCV}
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                color: 'white',
                border: 'none',
                padding: '12px 25px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginLeft: '20px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 25px rgba(37, 99, 235, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <span>📄</span> {t.descargarCV}
            </button>
          </div>
        </div>
      </header>

      {/* Modal para seleccionar idioma del CV */}
      <CVModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

const navLinkStyle = {
  color: '#475569',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '1rem',
  transition: 'color 0.3s ease',
  padding: '5px 0',
  position: 'relative'
};

export default Header;