// src/hooks/useTranslation.js
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  return {
    t: translations[language],
    language
  };
};

// Uso en componentes:
// const { t } = useTranslation();
// <h1>{t.heroTitle}</h1>