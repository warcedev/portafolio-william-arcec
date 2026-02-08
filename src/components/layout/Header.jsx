// src/components/layout/Header.jsx - VERSIÓN CORPORATIVA CON TAILWIND
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';
import CVModal from '../CVModal';
import LanguageSwitcher from '../LanguageSwitcher';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Determinar menú activo basado en ruta
    const path = location.pathname;
    if (path === '/') setActiveMenu('inicio');
    else if (path === '/servicios') setActiveMenu('servicios');
    else if (path === '/tecnologias') setActiveMenu('tecnologias');
    else if (path === '/proceso') setActiveMenu('proceso');
    else if (path === '/nosotros') setActiveMenu('nosotros');
    else if (path === '/contacto') setActiveMenu('contacto');
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleDownloadCV = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { key: 'inicio', path: '/', label: t.inicio },
    { key: 'servicios', path: '/servicios', label: t.servicios },
    { key: 'tecnologias', path: '/tecnologias', label: language === 'es' ? 'Tecnologías' : 'Technologies' },
    { key: 'proceso', path: '/proceso', label: language === 'es' ? 'Proceso' : 'Process' },
    { key: 'nosotros', path: '/nosotros', label: language === 'es' ? 'Nosotros' : 'About' },
    { key: 'contacto', path: '/contacto', label: t.contacto },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-white/90 backdrop-blur-sm shadow-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo con animación */}
            <Link 
              to="/" 
              className="flex items-center group"
              onMouseEnter={() => setActiveMenu('inicio')}
            >
              <div className="relative">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                  <span className="text-code transition-all duration-300 group-hover:bg-gradient-code-will group-hover:bg-clip-text group-hover:text-transparent">
                    Code
                  </span>
                  <span className="text-by mx-1">By</span>
                  <span className="text-will transition-all duration-300 group-hover:bg-gradient-will-code group-hover:bg-clip-text group-hover:text-transparent">
                    Will
                  </span>
                </h1>
                {/* Efecto de subrayado animado */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-code-will group-hover:w-full transition-all duration-500"></div>
              </div>
            </Link>

            {/* Navegación Desktop */}
            <nav className="hidden md:flex items-center space-x-4">
              <LanguageSwitcher />
              
              <div className="flex items-center space-x-1 ml-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeMenu === item.key
                        ? 'text-white bg-gradient-code-will shadow-lg transform -translate-y-0.5'
                        : 'text-gray-600 hover:text-code hover:bg-gray-50/80'
                    }`}
                    onMouseEnter={() => setActiveMenu(item.key)}
                  >
                    {item.label}
                    {activeMenu === item.key && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-code rounded-full animate-bounce-slow"></div>
                    )}
                  </Link>
                ))}
              </div>

              {/* Botón CTA */}
              <button
                onClick={handleDownloadCV}
                className="ml-4 px-5 py-2.5 bg-gradient-code-will text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-200 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 group"
              >
                <span className="text-lg transition-transform duration-300 group-hover:scale-110">📄</span>
                <span className="relative">
                  {t.descargarCV}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
              </button>
            </nav>

            {/* Menú Mobile */}
            <div className="md:hidden flex items-center space-x-3">
              <LanguageSwitcher />
              
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Menú Mobile Expandido */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-slide-down">
              <div className="bg-white rounded-lg shadow-lg p-4 space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      activeMenu === item.key
                        ? 'text-white bg-gradient-code-will'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    handleDownloadCV();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full mt-2 px-4 py-3 bg-gradient-code-will text-white font-semibold rounded-lg shadow-lg flex items-center justify-center space-x-2"
                >
                  <span className="text-lg">📄</span>
                  <span>{t.descargarCV}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Modal CV */}
      <CVModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Espacio para el header fijo */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

export default Header;