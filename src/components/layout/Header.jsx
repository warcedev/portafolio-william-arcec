// src/components/layout/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();

  const navItems = [
    { path: '/', label: { es: 'Inicio', en: 'Home' } },
    { path: '/nosotros', label: { es: 'Quiénes Somos', en: 'About Us' } },
    { path: '/proceso', label: { es: 'Nuestro Proceso', en: 'Our Process' } },
    { path: '/contacto', label: { es: 'Contáctanos', en: 'Contact Us' } },
  ];

  return (
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-code">Code</span>
            <span className="logo-by">By</span>
            <span className="logo-will">Will</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
                <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label[language]}
                </Link>
            ))}

            {/* Language Toggle */}
            {/*<button onClick={toggleLanguage} className="language-toggle">*/}
            {/*  {language === 'es' ? 'EN' : 'ES'}*/}
            {/*</button>*/}
          </nav>

          {/* Mobile Menu Button */}
          <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
          >
            <span className={`bar ${isMenuOpen ? 'rotate-45' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? '-rotate-45' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
            <nav className="mobile-nav">
              {navItems.map((item) => (
                  <Link
                      key={item.path}
                      to={item.path}
                      className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label[language]}
                  </Link>
              ))}
              {/*<button onClick={toggleLanguage} className="mobile-language-toggle">*/}
              {/*  {language === 'es' ? 'English' : 'Español'}*/}
              {/*</button>*/}
            </nav>
        )}
      </header>
  );
};

export default Header;