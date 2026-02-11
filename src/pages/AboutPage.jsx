// src/pages/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './AboutPage.css';

const AboutPage = () => {
    const { language } = useLanguage();

    const content = {
        es: {
            heroTitle: 'Conoce a CodeByWill',
            heroSubtitle: 'Jóvenes, apasionados y profesionales del desarrollo web',
            sectionTitle: 'Nuestra Historia',
            historyContent: [
                "Fundada en 2024, CodeByWill nació de la pasión por crear soluciones digitales innovadoras. A pesar de ser una empresa joven, nuestro equipo cuenta con años de experiencia individual en el sector tecnológico.",
                "Comenzamos como un pequeño grupo de desarrolladores freelance que compartían la visión de ofrecer calidad y profesionalismo en cada proyecto. Hoy, hemos crecido hasta convertirnos en un referente en desarrollo web en la región.",
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
            teamTitle: 'Nuestro Equipo',
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
            statsTitle: 'En Números',
            stats: [
                { number: '2+', label: 'Años en el mercado', icon: '📈' },
                { number: '50+', label: 'Proyectos completados', icon: '🚀' },
                { number: '25+', label: 'Clientes satisfechos', icon: '😊' },
                { number: '100%', label: 'Tasa de satisfacción', icon: '⭐' },
                { number: '15+', label: 'Tecnologías dominadas', icon: '💻' },
                { number: '24/7', label: 'Soporte disponible', icon: '🛡️' }
            ],
            ctaTitle: '¿Listo para trabajar juntos?',
            ctaSubtitle: 'Cuéntanos sobre tu proyecto y creemos algo increíble',
            ctaButton: 'Iniciar proyecto'
        },
        en: {
            heroTitle: 'Meet CodeByWill',
            heroSubtitle: 'Young, passionate, and professional web developers',
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
            teamTitle: 'Our Team',
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
            statsTitle: 'By the Numbers',
            stats: [
                { number: '2+', label: 'Years in the market', icon: '📈' },
                { number: '50+', label: 'Projects completed', icon: '🚀' },
                { number: '25+', label: 'Satisfied clients', icon: '😊' },
                { number: '100%', label: 'Satisfaction rate', icon: '⭐' },
                { number: '15+', label: 'Technologies mastered', icon: '💻' },
                { number: '24/7', label: 'Support available', icon: '🛡️' }
            ],
            ctaTitle: 'Ready to work together?',
            ctaSubtitle: 'Tell us about your project and let\'s create something amazing',
            ctaButton: 'Start project'
        }
    };

    const t = content[language];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1 className="about-hero-title">{t.heroTitle}</h1>
                    <p className="about-hero-subtitle">{t.heroSubtitle}</p>
                    <div className="hero-badge">
                        <span className="since-badge">Innovando desde 2024</span>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">{t.sectionTitle}</h2>
                        <div className="title-line"></div>
                    </div>
                    <div className="history-content">
                        {t.historyContent.map((paragraph, index) => (
                            <p key={index} className="history-paragraph">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">{t.whyChooseTitle}</h2>
                        <div className="title-line"></div>
                    </div>
                    <div className="why-choose-grid">
                        {t.whyChoosePoints.map((point, index) => (
                            <div key={index} className="why-choose-card">
                                <div className="card-number">{index + 1}</div>
                                <h3>{point.title}</h3>
                                <p>{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title white-title">{t.statsTitle}</h2>
                        <div className="title-line white-line"></div>
                    </div>
                    <div className="about-stats-grid">
                        {t.stats.map((stat, index) => (
                            <div key={index} className="about-stat-card">
                                <div className="stat-icon">{stat.icon}</div>
                                <h3 className="stat-number">{stat.number}</h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            {/*<section className="section">*/}
            {/*    <div className="container">*/}
            {/*        <div className="section-header">*/}
            {/*            <h2 className="section-title">{t.teamTitle}</h2>*/}
            {/*            <div className="title-line"></div>*/}
            {/*        </div>*/}
            {/*        <div className="team-grid">*/}
            {/*            {t.teamMembers.map((member, index) => (*/}
            {/*                <div key={index} className="team-card">*/}
            {/*                    <div className="team-avatar">*/}
            {/*                        <div className="avatar-placeholder">*/}
            {/*                            {member.name.charAt(0)}*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="team-info">*/}
            {/*                        <h3>{member.name}</h3>*/}
            {/*                        <p className="team-role">{member.role}</p>*/}
            {/*                        <p className="team-description">{member.description}</p>*/}
            {/*                        <div className="team-expertise">*/}
            {/*                            {member.expertise.map((skill, skillIndex) => (*/}
            {/*                                <span key={skillIndex} className="expertise-tag">*/}
            {/*                                    {skill}*/}
            {/*                                </span>*/}
            {/*                            ))}*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Philosophy Section */}
            <section className="section bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">{t.valuesTitle}</h2>
                        <div className="title-line"></div>
                    </div>
                    <div className="philosophy-grid">
                        {t.values.map((value, index) => (
                            <div key={index} className="philosophy-card">
                                <div className="philosophy-icon">✨</div>
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="cta-title">{t.ctaTitle}</h2>
                    <p className="cta-subtitle">{t.ctaSubtitle}</p>
                    <Link to="/contacto" className="btn-cta">
                        {t.ctaButton}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;