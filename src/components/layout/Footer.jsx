// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { language } = useLanguage();
    const currentYear = new Date().getFullYear();

    const footerContent = {
        es: {
            description: 'CodeByWill - Transformando ideas en soluciones digitales desde 2024.',
            quickLinks: 'Enlaces rápidos',
            contact: 'Contacto',
            rights: `© ${currentYear} CodeByWill. Todos los derechos reservados.`,
            email: 'william.arcedev@gmail.com',
            phone: '+595 994 847788'
        },
        en: {
            description: 'CodeByWill - Transforming ideas into digital solutions since 2024.',
            quickLinks: 'Quick Links',
            contact: 'Contact',
            rights: `© ${currentYear} CodeByWill. All rights reserved.`,
            email: 'contact@codebywill.com',
            phone: '+595 982 375 298'
        }
    };

    const content = footerContent[language];

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand Section */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <span className="logo-code">Code</span>
                        <span className="logo-by">By</span>
                        <span className="logo-will">Will</span>
                    </div>
                    <p className="footer-description">
                        {content.description}
                    </p>
                </div>

                {/* Links Section */}
                <div className="footer-links">
                    <h3 className="footer-heading">{content.quickLinks}</h3>
                    <ul className="links-list">
                        <li><Link to="/" className="footer-link">Inicio</Link></li>
                        <li><Link to="/nosotros" className="footer-link">Quiénes Somos</Link></li>
                        <li><Link to="/proceso" className="footer-link">Nuestro Proceso</Link></li>
                        <li><Link to="/contacto" className="footer-link">Contáctanos</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-contact">
                    <h3 className="footer-heading">{content.contact}</h3>
                    <ul className="contact-list">
                        <li>
                            <a href="mailto:william.arcedev@gmail.com" className="contact-link">
                                 {content.email}
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/595994847788" className="contact-link">
                                 {content.phone}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <p>{content.rights}</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/willarce/" className="social-link">LinkedIn</a>
                    {/*<a href="#" className="social-link">GitHub</a>*/}
                    <a href="https://www.instagram.com/codebywillpy/" className="social-link">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;