// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const Home = () => {
  const { language } = useLanguage();
  const observerRef = useRef(null);

  const content = {
    es: {
      heroTitle: 'Transformamos ideas en experiencias digitales',
      heroSubtitle: 'Desarrollo web y software a medida con tecnología de punta',
      ctaButton: 'Descubre nuestro proceso',
      ctaButton2: 'Habla con un experto',
      sectionTitle: 'CodeByWill',
      companyDesc: 'Somos una empresa de desarrollo tecnológico que combina innovación, experiencia técnica y atención personalizada para llevar tu proyecto al siguiente nivel. Desde 2024, trabajamos con empresas de Latinoamérica para crear soluciones digitales que generan impacto real.',
      missionTitle: 'Nuestra Misión',
      missionDesc: 'Proporcionar soluciones tecnológicas de alta calidad que impulsen el crecimiento y transformación digital de nuestros clientes, superando expectativas en cada proyecto.',
      visionTitle: 'Nuestra Visión',
      visionDesc: 'Ser el socio tecnológico estratégico para empresas que buscan innovación y excelencia en el mundo digital, expandiendo nuestra presencia en Latinoamérica.',
      messageTitle: 'Nuestro Enfoque',
      messageDesc: 'Combinamos la agilidad y frescura de un equipo joven con la solidez y profesionalismo de expertos en tecnología. Cada proyecto recibe atención personalizada y está respaldado por metodologías ágiles y mejores prácticas de la industria.',
      valuesTitle: 'Nuestros Valores',
      values: [
        { title: 'Innovación', desc: 'Soluciones creativas y vanguardia tecnológica', icon: '🚀' },
        { title: 'Excelencia', desc: 'Calidad superior en cada detalle', icon: '⭐' },
        { title: 'Compromiso', desc: 'Cumplimos con plazos y objetivos', icon: '🤝' },
        { title: 'Transparencia', desc: 'Comunicación clara y honesta', icon: '🔍' },
        { title: 'Pasión', desc: 'Entregamos lo mejor en cada proyecto', icon: '❤️' },
        { title: 'Agilidad', desc: 'Nos adaptamos rápidamente a cambios', icon: '⚡' }
      ],
      stats: [
        { number: '2+', label: 'Años de experiencia', sublabel: 'en el mercado' },
        { number: '50+', label: 'Proyectos exitosos', sublabel: 'completados' },
        { number: '100%', label: 'Clientes satisfechos', sublabel: 'recomiendan nuestros servicios' },
        { number: '24/7', label: 'Soporte técnico', sublabel: 'siempre disponibles' }
      ],
      ctaTitle: '¿Listo para iniciar tu proyecto?',
      ctaSubtitle: 'Contáctanos hoy mismo y transformemos tus ideas en realidad',
      ctaButton3: 'Solicitar una consultoría gratuita'
    },
    en: {
      heroTitle: 'Transforming ideas into digital experiences',
      heroSubtitle: 'Custom web development and software with cutting-edge technology',
      ctaButton: 'Discover our process',
      ctaButton2: 'Talk to an expert',
      sectionTitle: 'CodeByWill',
      companyDesc: 'We are a technology development company that combines innovation, technical expertise and personalized attention to take your project to the next level. Since 2024, we work with Latin American companies to create digital solutions that generate real impact.',
      missionTitle: 'Our Mission',
      missionDesc: 'Provide high-quality technological solutions that drive growth and digital transformation for our clients, exceeding expectations with every project.',
      visionTitle: 'Our Vision',
      visionDesc: 'To be the strategic technology partner for companies seeking innovation and excellence in the digital world, expanding our presence in Latin America.',
      messageTitle: 'Our Approach',
      messageDesc: 'We combine the agility and freshness of a young team with the solidity and professionalism of technology experts. Each project receives personalized attention and is backed by agile methodologies and industry best practices.',
      valuesTitle: 'Our Values',
      values: [
        { title: 'Innovation', desc: 'Creative solutions and technological forefront', icon: '🚀' },
        { title: 'Excellence', desc: 'Superior quality in every detail', icon: '⭐' },
        { title: 'Commitment', desc: 'We meet deadlines and objectives', icon: '🤝' },
        { title: 'Transparency', desc: 'Clear and honest communication', icon: '🔍' },
        { title: 'Passion', desc: 'We deliver our best in every project', icon: '❤️' },
        { title: 'Agility', desc: 'We adapt quickly to changes', icon: '⚡' }
      ],
      stats: [
        { number: '2+', label: 'Years of experience', sublabel: 'in the market' },
        { number: '50+', label: 'Successful projects', sublabel: 'completed' },
        { number: '100%', label: 'Satisfied clients', sublabel: 'recommend our services' },
        { number: '24/7', label: 'Technical support', sublabel: 'always available' }
      ],
      ctaTitle: 'Ready to start your project?',
      ctaSubtitle: 'Contact us today and let\'s turn your ideas into reality',
      ctaButton3: 'Request a free consultation'
    }
  };

  const t = content[language];

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in-section').forEach(section => {
      observerRef.current.observe(section);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <div className="hero-gradient"></div>
            <div className="hero-pattern"></div>
          </div>
          <div className="hero-content container">
            <div className="hero-badge">
              <span className="since-badge">Desde 2024</span>
            </div>
            <h1 className="hero-title">{t.heroTitle}</h1>
            <p className="hero-subtitle">{t.heroSubtitle}</p>
            <div className="hero-buttons">
              <Link to="/proceso" className="btn-primary">
                {t.ctaButton}
                <span className="btn-arrow">→</span>
              </Link>
              <Link to="/contacto" className="btn-outline">
                {t.ctaButton2}
              </Link>
            </div>
          </div>
          {/* Scroll Indicator - Ahora está fuera del hero-content y más abajo */}
          <div className="hero-scroll-indicator">
            <span className="scroll-text">Descubre más</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section fade-in-section">
          <div className="container">
            <div className="stats-grid">
              {t.stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <h3 className="stat-number">{stat.number}</h3>
                    <p className="stat-label">{stat.label}</p>
                    <p className="stat-sublabel">{stat.sublabel}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Description */}
        <section className="about-section fade-in-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-content">
                <div className="section-header-left">
                  <span className="section-tag">Sobre nosotros</span>
                  <h2 className="section-title">{t.sectionTitle}</h2>
                  <div className="title-line-left"></div>
                </div>
                <p className="about-text">{t.companyDesc}</p>
                <div className="about-features">
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>Metodologías ágiles</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>Tecnologías modernas</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>Soporte continuo</span>
                  </div>
                </div>
              </div>
              <div className="about-image">
                <div className="image-wrapper">
                  <div className="image-pattern"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-vision-section fade-in-section">
          <div className="container">
            <div className="section-header-center">
              <span className="section-tag">Nuestro propósito</span>
              <h2 className="section-title">Compromiso con la excelencia</h2>
              <div className="title-line-center"></div>
            </div>
            <div className="mission-vision-grid">
              <div className="mv-card mission-card">
                <div className="card-icon-wrapper">
                  <span className="card-icon">🎯</span>
                </div>
                <h3>{t.missionTitle}</h3>
                <p>{t.missionDesc}</p>
              </div>
              <div className="mv-card vision-card">
                <div className="card-icon-wrapper">
                  <span className="card-icon">👁️</span>
                </div>
                <h3>{t.visionTitle}</h3>
                <p>{t.visionDesc}</p>
              </div>
              <div className="mv-card message-card">
                <div className="card-icon-wrapper">
                  <span className="card-icon">💬</span>
                </div>
                <h3>{t.messageTitle}</h3>
                <p>{t.messageDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="values-section fade-in-section">
          <div className="container">
            <div className="section-header-center">
              <span className="section-tag">Nuestra filosofía</span>
              <h2 className="section-title">{t.valuesTitle}</h2>
              <div className="title-line-center"></div>
            </div>
            <div className="values-grid">
              {t.values.map((value, index) => (
                  <div key={index} className="value-card">
                    <div className="value-icon-wrapper">
                      <span className="value-icon">{value.icon}</span>
                    </div>
                    <h4>{value.title}</h4>
                    <p>{value.desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section fade-in-section">
          <div className="cta-background">
            <div className="cta-pattern"></div>
          </div>
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">{t.ctaTitle}</h2>
              <p className="cta-subtitle">{t.ctaSubtitle}</p>
              <Link to="/contacto" className="btn-cta">
                {t.ctaButton3}
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Home;