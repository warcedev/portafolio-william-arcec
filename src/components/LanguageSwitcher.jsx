// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      background: '#f1f5f9',
      borderRadius: '20px',
      padding: '5px',
      marginRight: '20px'
    }}>
      <button
        onClick={() => toggleLanguage('es')}
        style={{
          background: language === 'es' ? '#2563eb' : 'transparent',
          color: language === 'es' ? 'white' : '#64748b',
          border: 'none',
          padding: '8px 15px',
          borderRadius: '15px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          fontWeight: language === 'es' ? '600' : '500',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        🇪🇸 ES
      </button>
      <button
        onClick={() => toggleLanguage('en')}
        style={{
          background: language === 'en' ? '#2563eb' : 'transparent',
          color: language === 'en' ? 'white' : '#64748b',
          border: 'none',
          padding: '8px 15px',
          borderRadius: '15px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          fontWeight: language === 'en' ? '600' : '500',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        🇺🇸 EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;