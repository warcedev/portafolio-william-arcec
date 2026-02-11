// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './ContactPage.css';

const ContactPage = () => {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const content = {
        es: {
            heroTitle: 'Contáctanos',
            heroSubtitle: 'Hablemos sobre tu proyecto. Estamos listos para convertir tus ideas en realidad.',
            formTitle: 'Envíanos un mensaje',
            nameLabel: 'Nombre completo *',
            emailLabel: 'Correo electrónico *',
            phoneLabel: 'Teléfono',
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
            messageLabel: 'Cuéntanos sobre tu proyecto *',
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
            faqTitle: 'Preguntas antes de contactar',
            faqs: [
                {
                    question: '¿Cuál es el proceso después de contactarlos?',
                    answer: '1) Reunión inicial gratuita, 2) Propuesta detallada, 3) Planificación del proyecto, 4) Desarrollo, 5) Entrega y soporte.'
                },
                {
                    question: '¿Trabajan con empresas internacionales?',
                    answer: 'Sí, trabajamos con clientes en toda America y tenemos experiencia en proyectos internacionales.'
                },
                {
                    question: '¿Cuál es el tiempo de respuesta?',
                    answer: 'Respondemos todos los mensajes en menos de 24 horas hábiles.'
                },
                {
                    question: '¿Ofrecen mantenimiento después del proyecto?',
                    answer: 'Sí, ofrecemos planes de mantenimiento mensual, trimestral y anual según tus necesidades.'
                }
            ],
            successMessage: '¡Mensaje enviado! Te contactaremos en menos de 24 horas.',
            errorMessage: 'Error al enviar. Por favor, inténtalo de nuevo.',
            validationErrors: {
                name: 'El nombre es requerido',
                email: 'Email inválido',
                projectType: 'Selecciona un tipo de proyecto',
                message: 'El mensaje es requerido'
            }
        },
        en: {
            heroTitle: 'Contact Us',
            heroSubtitle: "Let's talk about your project. We're ready to turn your ideas into reality.",
            formTitle: 'Send us a message',
            nameLabel: 'Full name *',
            emailLabel: 'Email *',
            phoneLabel: 'Phone',
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
            messageLabel: 'Tell us about your project *',
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
            faqTitle: 'Questions before contacting',
            faqs: [
                {
                    question: 'What is the process after contacting you?',
                    answer: '1) Free initial meeting, 2) Detailed proposal, 3) Project planning, 4) Development, 5) Delivery and support.'
                },
                {
                    question: 'Do you work with international companies?',
                    answer: 'Yes, we work with clients throughout Latin America and have experience in international projects.'
                },
                {
                    question: 'What is the response time?',
                    answer: 'We respond to all messages in less than 24 business hours.'
                },
                {
                    question: 'Do you offer maintenance after the project?',
                    answer: 'Yes, we offer monthly, quarterly, and annual maintenance plans according to your needs.'
                }
            ],
            successMessage: 'Message sent! We will contact you in less than 24 hours.',
            errorMessage: 'Error sending. Please try again.',
            validationErrors: {
                name: 'Name is required',
                email: 'Invalid email',
                projectType: 'Select a project type',
                message: 'Message is required'
            }
        }
    };

    const t = content[language];
    const [errors, setErrors] = useState({});

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
                message: ''
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

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <h1 className="contact-hero-title">{t.heroTitle}</h1>
                    <p className="contact-hero-subtitle">{t.heroSubtitle}</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className="container">
                    <div className="contact-content">
                        {/* Left Column - Form */}
                        <div className="contact-form-section">
                            <div className="form-header">
                                <h2 className="form-title">{t.formTitle}</h2>
                                <p className="form-subtitle">{t.responseTime}</p>
                            </div>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="success-message">
                                    <span className="success-icon">✓</span>
                                    {t.successMessage}
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="error-message">
                                    <span className="error-icon">!</span>
                                    {t.errorMessage}
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
                                    <label htmlFor="message">{t.messageLabel}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={errors.message ? 'error' : ''}
                                        placeholder="Describe tu proyecto, necesidades, timeline, presupuesto aproximado..."
                                        rows="6"
                                    />
                                    {errors.message && <span className="error-text">{errors.message}</span>}
                                </div>

                                <button
                                    type="submit"
                                    className="submit-button"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? t.submittingButton : t.submitButton}
                                </button>
                            </form>
                        </div>

                        {/* Right Column - Info */}
                        <div className="contact-info-section">
                            {/* Contact Information */}
                            <div className="info-card">
                                <h3 className="info-title">{t.contactInfoTitle}</h3>

                                <div className="contact-method">
                                    <div className="method-icon">✉️</div>
                                    <div className="method-content">
                                        <h4>{t.emailTitle}</h4>
                                        <a href="mailto:william.arcedev@gmail.com" className="method-link">
                                            {t.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon">📱</div>
                                    <div className="method-content">
                                        <h4>{t.phoneTitle}</h4>
                                        <a href="https://wa.me/595994847788" className="method-link">
                                            {t.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon">📍</div>
                                    <div className="method-content">
                                        <h4>{t.locationTitle}</h4>
                                        <p className="method-text">{t.location}</p>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon">🕐</div>
                                    <div className="method-content">
                                        <h4>{t.hoursTitle}</h4>
                                        <p className="method-text">{t.hours}</p>
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

                            {/* FAQ */}
                            <div className="info-card">
                                <h3 className="info-title">{t.faqTitle}</h3>
                                <div className="faq-list">
                                    {t.faqs.map((faq, index) => (
                                        <div key={index} className="faq-item">
                                            <h4>{faq.question}</h4>
                                            <p>{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="map-section">
                <div className="container">
                    <div className="map-placeholder">
                        <div className="map-content">
                            <div className="map-icon">📍</div>
                            <h3>Estamos en Paraguay</h3>
                            <p>Servimos clientes en toda America de manera remota</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;