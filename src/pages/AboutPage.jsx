// src/pages/AboutPage.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './AboutPage.css';

const AboutPage = () => {
    const { language } = useLanguage();
    const observerRef = useRef(null);

    const content = {
        es: {
            heroTitle: 'Conoce a CodeByWill',
            heroSubtitle: 'Jóvenes, apasionados y profesionales del desarrollo web',
            heroBadge: 'Innovando desde 2024',
            sectionTitle: 'Nuestra Historia',
            historyContent: [
                "Fundada en 2024, CodeByWill nació de la pasión por crear soluciones digitales innovadoras. A pesar de ser una empresa joven, nuestro equipo cuenta con años de experiencia individual en el sector tecnológico.",
                "Comenzamos como un pequeño grupo de desarrolladores freelance que compartían la visión de ofrecer calidad y profesionalismo en cada proyecto. Hoy, nos hemos convertido en un referente de desarrollo web en la región.",
                "Nuestra juventud es nuestra fortaleza: nos permite ser ágiles, adaptarnos rápidamente a nuevas tecnologías y mantener una mentalidad fresca e innovadora."
            ],
            whyChooseTitle: '¿Por qué elegirnos?',
            whyChoosePoints: [
                {
                    title: 'Expertos en Tecnología Moderna',
                    desc: 'Utilizamos las últimas tecnologías como React, Node.js, Python y más para asegurar que tu proyecto esté a la vanguardia.'
                },
                {
                    title: 'Enfoque Personalizado',
                    desc: 'Cada cliente es único. Trabajamos estrechamente contigo para entender tus necesidades específicas.'
                },
                {
                    title: 'Transparencia Total',
                    desc: 'Mantenemos una comunicación constante, presupuestos claros y actualizaciones regulares.'
                },
                {
                    title: 'Entrega Puntual',
                    desc: 'Respetamos los plazos. Tu tiempo es tan valioso como el nuestro.'
                }
            ],
            statsTitle: 'CodeByWill en Números',
            stats: [
                { number: '2+', label: 'Años de experiencia', sublabel: 'en el mercado digital' },
                { number: '50+', label: 'Proyectos exitosos', sublabel: 'entregados a tiempo' },
                { number: '100%', label: 'Clientes satisfechos', sublabel: 'recomiendan nuestros servicios' },
                { number: '15+', label: 'Tecnologías dominadas', sublabel: 'siempre actualizados' },
                { number: '24/7', label: 'Soporte continuo', sublabel: 'siempre disponibles' }
            ],
            teamTitle: 'Nuestro Equipo',
            teamSubtitle: 'Profesionales apasionados por la tecnología',
            teamMembers: [
                {
                    name: 'William',
                    role: 'Fundador & Full-Stack Developer',
                    description: 'Más de 5 años de experiencia en desarrollo web. Especialista en React, Node.js y arquitecturas escalables.',
                    expertise: ['React', 'Node.js', 'AWS', 'MongoDB']
                },
                {
                    name: 'Carlos',
                    role: 'UI/UX Designer',
                    description: 'Diseñador especializado en experiencias de usuario intuitivas y atractivas. Apasionado por el diseño centrado en el usuario.',
                    expertise: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
                },
                {
                    name: 'Ana',
                    role: 'Frontend Developer',
                    description: 'Especialista en crear interfaces modernas y responsivas. Obsesionada con los detalles y el rendimiento.',
                    expertise: ['React', 'Vue.js', 'CSS/SCSS', 'Web Performance']
                },
                {
                    name: 'Miguel',
                    role: 'Backend Developer',
                    description: 'Experto en arquitecturas de servidor, APIs y bases de datos. Garantiza que todo funcione perfectamente detrás de escena.',
                    expertise: ['Python', 'Django', 'PostgreSQL', 'Docker']
                }
            ],
            valuesTitle: 'Nuestra Filosofía',
            values: [
                {
                    title: 'Calidad sobre Cantidad',
                    desc: 'Preferimos hacer menos proyectos pero hacerlos excelentes, que muchos proyectos mediocres.'
                },
                {
                    title: 'Aprendizaje Continuo',
                    desc: 'La tecnología evoluciona rápidamente. Nos mantenemos actualizados para ofrecerte siempre lo mejor.'
                },
                {
                    title: 'Relaciones a Largo Plazo',
                    desc: 'No somos solo proveedores, somos socios. Buscamos relaciones duraderas con nuestros clientes.'
                },
                {
                    title: 'Ética Profesional',
                    desc: 'Honestidad, integridad y profesionalismo en cada interacción.'
                }
            ],
            ctaTitle: '¿Listo para trabajar juntos?',
            ctaSubtitle: 'Cuéntanos sobre tu proyecto y creemos algo increíble',
            ctaButton: 'Iniciar proyecto'
        },
        en: {
            heroTitle: 'Meet CodeByWill',
            heroSubtitle: 'Young, passionate, and professional web developers',
            heroBadge: 'Innovating since 2024',
            sectionTitle: 'Our Story',
            historyContent: [
                "Founded in 2024, CodeByWill was born from the passion for creating innovative digital solutions. Despite being a young company, our team has years of individual experience in the tech sector.",
                "We started as a small group of freelance developers who shared the vision of offering quality and professionalism in every project. Today, we have grown to become a reference in web development in the region.",
                "Our youth is our strength: it allows us to be agile, quickly adapt to new technologies, and maintain a fresh and innovative mindset."
            ],
            whyChooseTitle: 'Why Choose Us?',
            whyChoosePoints: [
                {
                    title: 'Modern Technology Experts',
                    desc: 'We use the latest technologies like React, Node.js, Python, and more to ensure your project is cutting-edge.'
                },
                {
                    title: 'Personalized Approach',
                    desc: 'Every client is unique. We work closely with you to understand your specific needs.'
                },
                {
                    title: 'Total Transparency',
                    desc: 'We maintain constant communication, clear budgets, and regular updates.'
                },
                {
                    title: 'Timely Delivery',
                    desc: 'We respect deadlines. Your time is as valuable as ours.'
                }
            ],
            statsTitle: 'CodeByWill by the Numbers',
            stats: [
                { number: '2+', label: 'Years of experience', sublabel: 'in the digital market' },
                { number: '50+', label: 'Successful projects', sublabel: 'delivered on time' },
                { number: '100%', label: 'Satisfied clients', sublabel: 'recommend our services' },
                { number: '15+', label: 'Technologies mastered', sublabel: 'always updated' },
                { number: '24/7', label: 'Continuous support', sublabel: 'always available' }
            ],
            teamTitle: 'Our Team',
            teamSubtitle: 'Professionals passionate about technology',
            teamMembers: [
                {
                    name: 'William',
                    role: 'Founder & Full-Stack Developer',
                    description: 'Over 5 years of experience in web development. Specialist in React, Node.js, and scalable architectures.',
                    expertise: ['React', 'Node.js', 'AWS', 'MongoDB']
                },
                {
                    name: 'Carlos',
                    role: 'UI/UX Designer',
                    description: 'Designer specialized in intuitive and attractive user experiences. Passionate about user-centered design.',
                    expertise: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
                },
                {
                    name: 'Ana',
                    role: 'Frontend Developer',
                    description: 'Specialist in creating modern and responsive interfaces. Obsessed with details and performance.',
                    expertise: ['React', 'Vue.js', 'CSS/SCSS', 'Web Performance']
                },
                {
                    name: 'Miguel',
                    role: 'Backend Developer',
                    description: 'Expert in server architectures, APIs, and databases. Ensures everything works perfectly behind the scenes.',
                    expertise: ['Python', 'Django', 'PostgreSQL', 'Docker']
                }
            ],
            valuesTitle: 'Our Philosophy',
            values: [
                {
                    title: 'Quality over Quantity',
                    desc: 'We prefer to do fewer projects but do them excellently, rather than many mediocre projects.'
                },
                {
                    title: 'Continuous Learning',
                    desc: 'Technology evolves quickly. We stay updated to always offer you the best.'
                },
                {
                    title: 'Long-term Relationships',
                    desc: "We're not just providers, we're partners. We seek lasting relationships with our clients."
                },
                {
                    title: 'Professional Ethics',
                    desc: 'Honesty, integrity, and professionalism in every interaction.'
                }
            ],
            ctaTitle: 'Ready to work together?',
            ctaSubtitle: 'Tell us about your project and let\'s create something amazing',
            ctaButton: 'Start project'
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
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-background">
                    <div className="hero-gradient"></div>
                    <div className="hero-pattern"></div>
                </div>
                <div className="about-hero-content container">
                    <div className="hero-badge">
                        <span className="since-badge">{t.heroBadge}</span>
                    </div>
                    <h1 className="about-hero-title">{t.heroTitle}</h1>
                    <p className="about-hero-subtitle">{t.heroSubtitle}</p>
                </div>
                <div className="hero-scroll-indicator">
                    <span className="scroll-text">Conócenos</span>
                    <div className="scroll-line"></div>
                </div>
            </section>

            {/* History Section */}
            <section className="history-section fade-in-section">
                <div className="container">
                    <div className="history-grid">
                        <div className="history-content-wrapper">
                            <div className="section-header-left">
                                <span className="section-tag">Nuestros orígenes</span>
                                <h2 className="section-title">{t.sectionTitle}</h2>
                                <div className="title-line-left"></div>
                            </div>
                            <div className="history-content">
                                {t.historyContent.map((paragraph, index) => (
                                    <p key={index} className="history-paragraph">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="history-stats">
                            <div className="history-stat-card">
                                <div className="history-stat-number">2024</div>
                                <div className="history-stat-label">Año de fundación</div>
                            </div>
                            <div className="history-stat-card">
                                <div className="history-stat-number">4+</div>
                                <div className="history-stat-label">Expertos en equipo</div>
                            </div>
                            <div className="history-stat-card">
                                <div className="history-stat-number">50+</div>
                                <div className="history-stat-label">Proyectos realizados</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose-section fade-in-section">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-tag">Nuestras fortalezas</span>
                        <h2 className="section-title">{t.whyChooseTitle}</h2>
                        <div className="title-line-center"></div>
                    </div>
                    <div className="why-choose-grid">
                        {t.whyChoosePoints.map((point, index) => (
                            <div key={index} className="why-choose-card">
                                <div className="card-number-wrapper">
                                    <span className="card-number">0{index + 1}</span>
                                </div>
                                <h3>{point.title}</h3>
                                <p>{point.desc}</p>
                                <div className="card-corner"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="about-stats-section fade-in-section">
                <div className="stats-background">
                    <div className="stats-gradient"></div>
                    <div className="stats-pattern"></div>
                </div>
                <div className="container">
                    <div className="section-header-center light">
                        <span className="section-tag light">Trayectoria</span>
                        <h2 className="section-title light">{t.statsTitle}</h2>
                        <div className="title-line-center light"></div>
                    </div>
                    <div className="about-stats-grid">
                        {t.stats.map((stat, index) => (
                            <div key={index} className="about-stat-card">
                                <h3 className="stat-number">{stat.number}</h3>
                                <p className="stat-label">{stat.label}</p>
                                <p className="stat-sublabel">{stat.sublabel}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section fade-in-section">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-tag">Talento humano</span>
                        <h2 className="section-title">{t.teamTitle}</h2>
                        <p className="section-subtitle">{t.teamSubtitle}</p>
                        <div className="title-line-center"></div>
                    </div>
                    <div className="team-grid">
                        {t.teamMembers.map((member, index) => (
                            <div key={index} className="team-card">
                                <div className="team-card-inner">
                                    <div className="team-avatar">
                                        <div className="avatar-placeholder">
                                            {member.name.charAt(0)}
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h3>{member.name}</h3>
                                        <p className="team-role">{member.role}</p>
                                        <p className="team-description">{member.description}</p>
                                        <div className="team-expertise">
                                            {member.expertise.map((skill, skillIndex) => (
                                                <span key={skillIndex} className="expertise-tag">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="philosophy-section fade-in-section">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-tag">Nuestra esencia</span>
                        <h2 className="section-title">{t.valuesTitle}</h2>
                        <div className="title-line-center"></div>
                    </div>
                    <div className="philosophy-grid">
                        {t.values.map((value, index) => (
                            <div key={index} className="philosophy-card">
                                <div className="philosophy-icon-wrapper">
                                    <span className="philosophy-icon">✨</span>
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta-section fade-in-section">
                <div className="cta-background">
                    <div className="cta-pattern"></div>
                </div>
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">{t.ctaTitle}</h2>
                        <p className="cta-subtitle">{t.ctaSubtitle}</p>
                        <Link to="/contacto" className="btn-cta">
                            {t.ctaButton}
                            <span className="btn-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;