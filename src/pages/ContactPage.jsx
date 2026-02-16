// src/pages/ContactPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './ContactPage.css';

const ContactPage = () => {
    const { language } = useLanguage();
    const observerRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
        budget: '',
        timeline: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [activeFaq, setActiveFaq] = useState(null);

    const content = {
        es: {
            heroTitle: 'Contáctanos',
            heroSubtitle: 'Hablemos sobre tu proyecto. Estamos listos para convertir tus ideas en realidad.',
            heroBadge: 'Respuesta en < 24h',
            formTitle: 'Envíanos un mensaje',
            formSubtitle: 'Cuéntanos sobre tu proyecto y te responderemos a la brevedad',
            nameLabel: 'Nombre completo *',
            emailLabel: 'Correo electrónico *',
            phoneLabel: 'Teléfono / WhatsApp',
            companyLabel: 'Empresa / Organización',
            projectTypeLabel: 'Tipo de proyecto *',
            projectTypeOptions: [
                'Selecciona una opción',
                'Sitio web corporativo',
                'E-commerce / Tienda online',
                'Aplicación web',
                'Aplicación móvil',
                'Sistema administrativo',
                'Consultoría técnica',
                'Mantenimiento web',
                'Otro'
            ],
            budgetLabel: 'Presupuesto estimado',
            budgetOptions: [
                'Selecciona un rango',
                'Menos de $2,000',
                '$2,000 - $5,000',
                '$5,000 - $10,000',
                '$10,000 - $20,000',
                'Más de $20,000',
                'Por definir'
            ],
            timelineLabel: 'Tiempo estimado',
            timelineOptions: [
                'Selecciona un plazo',
                'Menos de 1 mes',
                '1-3 meses',
                '3-6 meses',
                '6+ meses',
                'Sin plazo definido'
            ],
            messageLabel: 'Cuéntanos sobre tu proyecto *',
            messagePlaceholder: 'Describe tu proyecto, necesidades, objetivos y cualquier detalle relevante...',
            submitButton: 'Enviar mensaje',
            submittingButton: 'Enviando...',
            contactInfoTitle: 'Información de contacto',
            emailTitle: 'Correo electrónico',
            email: 'william.arcedev@gmail.com',
            phoneTitle: 'Teléfono / WhatsApp',
            phone: '+595 994 847788',
            locationTitle: 'Ubicación',
            location: 'Asunción, Paraguay',
            hoursTitle: 'Horario de atención',
            hours: 'Lunes a Viernes: 9:00 - 18:00',
            responseTime: 'Respondemos en menos de 24 horas',
            whyContactTitle: '¿Por qué contactarnos?',
            whyContactPoints: [
                {
                    title: 'Consulta gratuita',
                    description: 'Primera reunión sin costo para entender tus necesidades'
                },
                {
                    title: 'Presupuesto detallado',
                    description: 'Transparencia total en costos y tiempos'
                },
                {
                    title: 'Soporte personalizado',
                    description: 'Atención dedicada desde el primer contacto'
                },
                {
                    title: 'Sin compromiso',
                    description: 'Evaluación inicial sin obligación de contratar'
                }
            ],
            faqTitle: 'Preguntas frecuentes',
            faqSubtitle: 'Resolvemos tus dudas antes de contactarnos',
            faqs: [
                {
                    question: '¿Cuál es el proceso después de contactarlos?',
                    answer: '1. Reunión inicial gratuita para conocer tu proyecto (30-45 min)\n2. Propuesta detallada con presupuesto y timeline\n3. Planificación del proyecto y definición de alcance\n4. Desarrollo con entregas parciales\n5. Pruebas y ajustes\n6. Entrega final y soporte continuo'
                },
                {
                    question: '¿Trabajan con empresas internacionales?',
                    answer: 'Sí, trabajamos con clientes en toda América y Europa. Tenemos experiencia en proyectos internacionales y estamos equipados para colaborar de manera remota y eficiente, manejando diferentes husos horarios sin problemas.'
                },
                {
                    question: '¿Cuál es el tiempo de respuesta?',
                    answer: 'Respondemos todos los mensajes en menos de 24 horas hábiles. Normalmente, respondemos en menos de 4 horas durante nuestro horario laboral.'
                },
                {
                    question: '¿Ofrecen mantenimiento después del proyecto?',
                    answer: 'Sí, ofrecemos planes de mantenimiento mensual, trimestral y anual según tus necesidades. Incluyen actualizaciones de seguridad, copias de seguridad, soporte técnico y mejoras continuas.'
                },
                {
                    question: '¿Cómo manejan la confidencialidad?',
                    answer: 'Podemos firmar acuerdos de confidencialidad (NDA) antes de compartir detalles sensibles de tu proyecto. La privacidad y seguridad de tu información son prioritarias para nosotros.'
                },
                {
                    question: '¿Qué métodos de pago aceptan?',
                    answer: 'Aceptamos transferencias bancarias, PayPal, criptomonedas y podemos adaptarnos a tus necesidades. Trabajamos con contratos claros y pagos fraccionados por hitos.'
                }
            ],
            successMessage: '¡Mensaje enviado con éxito! Te contactaremos en menos de 24 horas.',
            errorMessage: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
            validationErrors: {
                name: 'El nombre es requerido',
                email: 'Ingresa un email válido',
                projectType: 'Selecciona un tipo de proyecto',
                message: 'El mensaje es requerido'
            },
            mapTitle: 'Estamos en Paraguay',
            mapSubtitle: 'Servimos clientes en toda América de manera remota',
            socialTitle: 'Síguenos en redes'
        },
        en: {
            heroTitle: 'Contact Us',
            heroSubtitle: "Let's talk about your project. We're ready to turn your ideas into reality.",
            heroBadge: 'Response < 24h',
            formTitle: 'Send us a message',
            formSubtitle: 'Tell us about your project and we\'ll get back to you shortly',
            nameLabel: 'Full name *',
            emailLabel: 'Email *',
            phoneLabel: 'Phone / WhatsApp',
            companyLabel: 'Company / Organization',
            projectTypeLabel: 'Project type *',
            projectTypeOptions: [
                'Select an option',
                'Corporate website',
                'E-commerce / Online store',
                'Web application',
                'Mobile application',
                'Administrative system',
                'Technical consulting',
                'Web maintenance',
                'Other'
            ],
            budgetLabel: 'Estimated budget',
            budgetOptions: [
                'Select a range',
                'Less than $2,000',
                '$2,000 - $5,000',
                '$5,000 - $10,000',
                '$10,000 - $20,000',
                'More than $20,000',
                'To be defined'
            ],
            timelineLabel: 'Estimated timeline',
            timelineOptions: [
                'Select a timeframe',
                'Less than 1 month',
                '1-3 months',
                '3-6 months',
                '6+ months',
                'No defined timeline'
            ],
            messageLabel: 'Tell us about your project *',
            messagePlaceholder: 'Describe your project, needs, goals, and any relevant details...',
            submitButton: 'Send message',
            submittingButton: 'Sending...',
            contactInfoTitle: 'Contact information',
            emailTitle: 'Email',
            email: 'william.arcedev@gmail.com',
            phoneTitle: 'Phone / WhatsApp',
            phone: '+595 982 375 298',
            locationTitle: 'Location',
            location: 'Asunción, Paraguay',
            hoursTitle: 'Business hours',
            hours: 'Monday to Friday: 9:00 - 18:00',
            responseTime: 'We respond in less than 24 hours',
            whyContactTitle: 'Why contact us?',
            whyContactPoints: [
                {
                    title: 'Free consultation',
                    description: 'First meeting at no cost to understand your needs'
                },
                {
                    title: 'Detailed budget',
                    description: 'Total transparency in costs and timelines'
                },
                {
                    title: 'Personalized support',
                    description: 'Dedicated attention from the first contact'
                },
                {
                    title: 'No commitment',
                    description: 'Initial evaluation without obligation to hire'
                }
            ],
            faqTitle: 'Frequently Asked Questions',
            faqSubtitle: 'Answers to your questions before contacting us',
            faqs: [
                {
                    question: 'What is the process after contacting you?',
                    answer: '1. Free initial meeting to learn about your project (30-45 min)\n2. Detailed proposal with budget and timeline\n3. Project planning and scope definition\n4. Development with partial deliveries\n5. Testing and adjustments\n6. Final delivery and ongoing support'
                },
                {
                    question: 'Do you work with international companies?',
                    answer: 'Yes, we work with clients throughout America and Europe. We have experience in international projects and are equipped to collaborate remotely and efficiently, handling different time zones seamlessly.'
                },
                {
                    question: 'What is the response time?',
                    answer: 'We respond to all messages within 24 business hours. Typically, we respond within 4 hours during our business hours.'
                },
                {
                    question: 'Do you offer maintenance after the project?',
                    answer: 'Yes, we offer monthly, quarterly, and annual maintenance plans according to your needs. They include security updates, backups, technical support, and continuous improvements.'
                },
                {
                    question: 'How do you handle confidentiality?',
                    answer: 'We can sign non-disclosure agreements (NDAs) before sharing sensitive details of your project. Your privacy and information security are priorities for us.'
                },
                {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept bank transfers, PayPal, cryptocurrencies, and can adapt to your needs. We work with clear contracts and milestone-based payments.'
                }
            ],
            successMessage: 'Message sent successfully! We will contact you within 24 hours.',
            errorMessage: 'Error sending message. Please try again.',
            validationErrors: {
                name: 'Name is required',
                email: 'Enter a valid email',
                projectType: 'Select a project type',
                message: 'Message is required'
            },
            mapTitle: 'We are in Paraguay',
            mapSubtitle: 'We serve clients throughout America remotely',
            socialTitle: 'Follow us'
        }
    };

    const t = content[language];
    const [errors, setErrors] = useState({});

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = t.validationErrors.name;
        }

        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t.validationErrors.email;
        }

        if (!formData.projectType || formData.projectType === t.projectTypeOptions[0]) {
            newErrors.projectType = t.validationErrors.projectType;
        }

        if (!formData.message.trim()) {
            newErrors.message = t.validationErrors.message;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            // Scroll to form with error
            document.querySelector('.contact-form-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Here you would typically send data to your backend
            console.log('Form submitted:', formData);

            setSubmitStatus('success');

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                projectType: '',
                message: '',
                budget: '',
                timeline: ''
            });

            // Reset status after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);

        } catch (error) {
            setSubmitStatus('error');
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="hero-background">
                    <div className="hero-gradient"></div>
                    <div className="hero-pattern"></div>
                </div>
                <div className="contact-hero-content container">
                    <div className="hero-badge">
                        <span className="since-badge">{t.heroBadge}</span>
                    </div>
                    <h1 className="contact-hero-title">{t.heroTitle}</h1>
                    <p className="contact-hero-subtitle">{t.heroSubtitle}</p>
                </div>
                <div className="hero-scroll-indicator">
                    <span className="scroll-text">Contáctanos</span>
                    <div className="scroll-line"></div>
                </div>
            </section>

            {/* Main Content */}
            <section className="contact-main-section fade-in-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Left Column - Form */}
                        <div className="contact-form-wrapper">
                            <div className="form-header">
                                <span className="section-tag">Hablemos</span>
                                <h2 className="form-title">{t.formTitle}</h2>
                                <p className="form-subtitle">{t.formSubtitle}</p>
                                <div className="title-line-left"></div>
                            </div>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="status-message success">
                                    <div className="status-icon">✓</div>
                                    <div className="status-content">
                                        <h4>¡Mensaje enviado!</h4>
                                        <p>{t.successMessage}</p>
                                    </div>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="status-message error">
                                    <div className="status-icon">!</div>
                                    <div className="status-content">
                                        <h4>Error</h4>
                                        <p>{t.errorMessage}</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">{t.nameLabel}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? 'error' : ''}
                                        placeholder="Juan Pérez"
                                    />
                                    {errors.name && <span className="error-text">{errors.name}</span>}
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">{t.emailLabel}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={errors.email ? 'error' : ''}
                                            placeholder="juan@empresa.com"
                                        />
                                        {errors.email && <span className="error-text">{errors.email}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">{t.phoneLabel}</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+595 999 888 777"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company">{t.companyLabel}</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Nombre de tu empresa"
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="projectType">{t.projectTypeLabel}</label>
                                        <select
                                            id="projectType"
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            className={errors.projectType ? 'error' : ''}
                                        >
                                            {t.projectTypeOptions.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.projectType && <span className="error-text">{errors.projectType}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="budget">{t.budgetLabel}</label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                        >
                                            {t.budgetOptions.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="timeline">{t.timelineLabel}</label>
                                    <select
                                        id="timeline"
                                        name="timeline"
                                        value={formData.timeline}
                                        onChange={handleChange}
                                    >
                                        {t.timelineOptions.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">{t.messageLabel}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={errors.message ? 'error' : ''}
                                        placeholder={t.messagePlaceholder}
                                        rows="6"
                                    />
                                    {errors.message && <span className="error-text">{errors.message}</span>}
                                </div>

                                <button
                                    type="submit"
                                    className="submit-button"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner"></span>
                                            {t.submittingButton}
                                        </>
                                    ) : t.submitButton}
                                </button>
                            </form>
                        </div>

                        {/* Right Column - Info */}
                        <div className="contact-info-wrapper">
                            {/* Contact Information */}
                            <div className="info-card">
                                <h3 className="info-title">{t.contactInfoTitle}</h3>

                                <div className="info-list">
                                    <div className="info-item">
                                        <div className="info-icon">✉️</div>
                                        <div className="info-content">
                                            <h4>{t.emailTitle}</h4>
                                            <a href={`mailto:${t.email}`} className="info-link">
                                                {t.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <div className="info-icon">📱</div>
                                        <div className="info-content">
                                            <h4>{t.phoneTitle}</h4>
                                            <a href={`https://wa.me/595994847788`} className="info-link">
                                                {t.phone}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <div className="info-icon">📍</div>
                                        <div className="info-content">
                                            <h4>{t.locationTitle}</h4>
                                            <p className="info-text">{t.location}</p>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <div className="info-icon">🕐</div>
                                        <div className="info-content">
                                            <h4>{t.hoursTitle}</h4>
                                            <p className="info-text">{t.hours}</p>
                                            <span className="info-badge">{t.responseTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Why Contact Us */}
                            <div className="info-card">
                                <h3 className="info-title">{t.whyContactTitle}</h3>
                                <div className="benefits-list">
                                    {t.whyContactPoints.map((point, index) => (
                                        <div key={index} className="benefit-item">
                                            <div className="benefit-icon">✓</div>
                                            <div className="benefit-content">
                                                <h4>{point.title}</h4>
                                                <p>{point.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Response */}
                            <div className="quick-response-card">
                                <div className="quick-response-icon">⚡</div>
                                <div className="quick-response-content">
                                    <h4>Respuesta rápida</h4>
                                    <p>Garantizamos respuesta en menos de 24 horas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section fade-in-section">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-tag">Preguntas frecuentes</span>
                        <h2 className="section-title">{t.faqTitle}</h2>
                        <p className="section-subtitle">{t.faqSubtitle}</p>
                        <div className="title-line-center"></div>
                    </div>
                    <div className="faq-grid">
                        {t.faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="faq-question">
                                    <h3>{faq.question}</h3>
                                    <span className="faq-toggle">{activeFaq === index ? '−' : '+'}</span>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section fade-in-section">
                <div className="container">
                    <div className="map-card">
                        <div className="map-content">
                            <div className="map-icon">📍</div>
                            <h3>{t.mapTitle}</h3>
                            <p>{t.mapSubtitle}</p>
                            <div className="map-stats">
                                <div className="map-stat">
                                    <span className="map-stat-value">+5</span>
                                    <span className="map-stat-label">Países</span>
                                </div>
                                <div className="map-stat">
                                    <span className="map-stat-value">100%</span>
                                    <span className="map-stat-label">Remoto</span>
                                </div>
                                <div className="map-stat">
                                    <span className="map-stat-value">24/7</span>
                                    <span className="map-stat-label">Disponibilidad</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;