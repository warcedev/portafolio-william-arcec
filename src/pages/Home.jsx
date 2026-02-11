// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const Home = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      heroTitle: 'Transformamos ideas en experiencias digitales',
      heroSubtitle: 'Desarrollo web y software a medida con tecnología de punta',
      ctaButton: 'Conoce nuestro proceso',
      ctaButton2: 'Contáctanos',
      sectionTitle: '¿Qué es CodeByWill?',
      companyDesc: 'Somos una empresa joven pero altamente profesional especializada en desarrollo web y soluciones tecnológicas. Desde 2024, combinamos innovación, experiencia técnica y atención personalizada para llevar tu proyecto al siguiente nivel.',
      missionTitle: 'Nuestra Misión',
      missionDesc: 'Proporcionar soluciones tecnológicas de alta calidad que impulsen el crecimiento y transformación digital de nuestros clientes, superando expectativas con cada proyecto entregado.',
      visionTitle: 'Nuestra Visión',
      visionDesc: 'Ser el socio tecnológico de confianza para empresas que buscan innovación y excelencia en el mundo digital, expandiendo nuestra presencia en Latinoamérica.',
      messageTitle: 'Nuestro Mensaje',
      messageDesc: 'La juventud no es sinónimo de inexperiencia. Nuestra frescura nos permite ser más ágiles, innovadores y comprometidos. Cada línea de código es escrita con pasión y profesionalismo.',
      valuesTitle: 'Nuestros Valores',
      values: [
        { title: 'Innovación', desc: 'Siempre a la vanguardia tecnológica', icon: '🚀' },
        { title: 'Excelencia', desc: 'Calidad en cada detalle', icon: '⭐' },
        { title: 'Compromiso', desc: 'Entregas a tiempo, siempre', icon: '🤝' },
        { title: 'Transparencia', desc: 'Comunicación clara y honesta', icon: '🔍' },
        { title: 'Pasión', desc: 'Amamos lo que hacemos', icon: '❤️' },
        { title: 'Agilidad', desc: 'Adaptación rápida a cambios', icon: '⚡' }
      ],
      stats: [
        { number: '2+', label: 'Años de experiencia' },
        // { number: '50+', label: 'Proyectos realizados' },
        { number: '100%', label: 'Clientes satisfechos' },
        { number: '24/7', label: 'Soporte técnico' }
      ]
    },
    en: {
      heroTitle: 'Transforming ideas into digital experiences',
      heroSubtitle: 'Custom web development and software with cutting-edge technology',
      ctaButton: 'See our process',
      ctaButton2: 'Contact us',
      sectionTitle: 'What is CodeByWill?',
      companyDesc: 'We are a young but highly professional company specializing in web development and technological solutions. Since 2024, we combine innovation, technical expertise and personalized attention to take your project to the next level.',
      missionTitle: 'Our Mission',
      missionDesc: 'Provide high-quality technological solutions that drive growth and digital transformation for our clients, exceeding expectations with every delivered project.',
      visionTitle: 'Our Vision',
      visionDesc: 'To be the trusted technology partner for companies seeking innovation and excellence in the digital world, expanding our presence in Latin America.',
      messageTitle: 'Our Message',
      messageDesc: 'Youth is not synonymous with inexperience. Our freshness allows us to be more agile, innovative and committed. Every line of code is written with passion and professionalism.',
      valuesTitle: 'Our Values',
      values: [
        { title: 'Innovation', desc: 'Always at the technological forefront', icon: '🚀' },
        { title: 'Excellence', desc: 'Quality in every detail', icon: '⭐' },
        { title: 'Commitment', desc: 'On-time deliveries, always', icon: '🤝' },
        { title: 'Transparency', desc: 'Clear and honest communication', icon: '🔍' },
        { title: 'Passion', desc: 'We love what we do', icon: '❤️' },
        { title: 'Agility', desc: 'Quick adaptation to changes', icon: '⚡' }
      ],
      stats: [
        { number: '2+', label: 'Years of experience' },
        { number: '50+', label: 'Projects completed' },
        { number: '100%', label: 'Satisfied clients' },
        { number: '24/7', label: 'Technical support' }
      ]
    }
  };

  const t = content[language];

  return (
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="hero-badge">
              <span className="since-badge">Desde 2024</span>
            </div>
            <h1 className="hero-title">{t.heroTitle}</h1>
            <p className="hero-subtitle">{t.heroSubtitle}</p>
            <div className="hero-buttons">
              <Link to="/proceso" className="btn-primary">
                {t.ctaButton}
              </Link>
              <Link to="/contacto" className="btn-secondary">
                {t.ctaButton2}
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {t.stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <h3 className="stat-number">{stat.number}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Description */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t.sectionTitle}</h2>
              <div className="title-line"></div>
            </div>
            <div className="company-description">
              <p className="description-text">{t.companyDesc}</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section bg-light">
          <div className="container">
            <div className="mission-vision-grid">
              <div className="mission-card card">
                <div className="card-icon">🎯</div>
                <h3>{t.missionTitle}</h3>
                <p>{t.missionDesc}</p>
              </div>
              <div className="vision-card card">
                <div className="card-icon">👁️</div>
                <h3>{t.visionTitle}</h3>
                <p>{t.visionDesc}</p>
              </div>
              <div className="message-card card">
                <div className="card-icon">💬</div>
                <h3>{t.messageTitle}</h3>
                <p>{t.messageDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t.valuesTitle}</h2>
              <div className="title-line"></div>
            </div>
            <div className="values-grid">
              {t.values.map((value, index) => (
                  <div key={index} className="value-card">
                    <div className="value-icon">{value.icon}</div>
                    <h4>{value.title}</h4>
                    <p>{value.desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2 className="cta-title">¿Listo para comenzar tu proyecto?</h2>
            <p className="cta-subtitle">Contáctanos hoy mismo y transformemos tus ideas en realidad</p>
            <Link to="/contacto" className="btn-cta">
              Iniciar proyecto
            </Link>
          </div>
        </section>
      </div>
  );
};

export default Home;