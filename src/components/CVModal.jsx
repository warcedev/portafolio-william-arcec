// src/components/CVModal.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const CVModal = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const t = translations[language];

  if (!isOpen) return null;

  const handleEnglishCV = () => {
    window.open('/WilliamArceCV-EN .pdf', '_blank');
    onClose();
  };

  const handleSpanishCV = () => {
    window.open('/WilliamArceCV-ES.pdf', '_blank');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000
    }} onClick={onClose}>
      <div style={{
        background: 'white',
        padding: '30px',
        borderRadius: '12px',
        width: '90%',
        maxWidth: '400px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }} onClick={(e) => e.stopPropagation()}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          {t.seleccionarCV}
        </h3>
        
        <p style={{
          color: '#64748b',
          textAlign: 'center',
          marginBottom: '30px',
          lineHeight: '1.5'
        }}>
          {t.seleccionarDesc}
        </p>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          <button
            onClick={handleEnglishCV}
            style={{
              padding: '15px 20px',
              background: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            {t.cvIngles}
          </button>
          
          <button
            onClick={handleSpanishCV}
            style={{
              padding: '15px 20px',
              background: '#7c3aed',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            {t.cvEspanol}
          </button>
          
          <button
            onClick={onClose}
            style={{
              padding: '15px 20px',
              background: 'transparent',
              color: '#64748b',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            {t.cancelar}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CVModal;