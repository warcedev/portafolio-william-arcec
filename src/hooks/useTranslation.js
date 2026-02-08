// src/hooks/useTranslation.js
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const getTranslation = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
  
  return {
    t: translations[language],
    get: getTranslation,
    language
  };
};

// Uso en componentes:
// const { t, get } = useTranslation();
// <h1>{t.heroTitle}</h1>
// <p>{get('servicios.desarrolloWeb')}</p>