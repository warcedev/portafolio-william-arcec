// src/pages/ServicesPage.jsx - VERSIÓN CON ANIMACIONES DE STATS Y FRAMER MOTION
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { 
  FaRocket, 
  FaTools, 
  FaSync, 
  FaCloud, 
  FaCode,
  FaChartLine,
  FaShieldAlt,
  FaDatabase,
  FaServer,
  FaCheckCircle,
  FaClock,
  FaUsers,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
  FaLightbulb,
  FaRegPaperPlane,
  FaStar,
  FaAward
} from 'react-icons/fa';

// Componente para las cards animadas de stats
const AnimatedStatCard = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            controls.start('visible');
            startCounter();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [controls]);

  const startCounter = () => {
    const startTime = Date.now();
    const endTime = startTime + stat.duration;
    
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / stat.duration, 1);
      
      // Usar easing para una animación más suave
      const easeOutQuad = progress => progress * (2 - progress);
      const easedProgress = easeOutQuad(progress);
      
      const currentCount = Math.floor(easedProgress * stat.number);
      setCount(currentCount);
      
      if (now < endTime) {
        requestAnimationFrame(animate);
      } else {
        setCount(stat.number);
      }
    };
    
    requestAnimationFrame(animate);
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      custom={index}
      style={{
        background: 'white',
        padding: '30px 20px',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
      variants={{
        hover: {
          y: -10,
          scale: 1.02,
          boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)',
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 15
          }
        }
      }}
    >
      {/* Animated top border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '3px',
          background: `linear-gradient(90deg, ${stat.color}, ${stat.color}dd)`,
          transformOrigin: 'left',
        }}
      />
      
      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
        style={{
          fontSize: '2rem',
          color: stat.color,
          marginBottom: '15px'
        }}
      >
        {stat.icon}
      </motion.div>
      
      {/* Counter */}
      <div style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: stat.color,
        marginBottom: '10px',
        height: '3.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <span style={{
          display: 'inline-block',
          minWidth: '45px',
          textAlign: 'center'
        }}>
          {count}
        </span>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
          style={{
            fontSize: '2rem',
            opacity: 0.9
          }}
        >
          {stat.suffix}
        </motion.span>
      </div>
      
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.7 }}
        style={{
          fontSize: '1rem',
          color: '#64748b',
          fontWeight: '500'
        }}
      >
        {stat.label}
      </motion.div>
    </motion.div>
  );
};

// Componente principal de la página
const ServicesPage = () => {
  const { language } = useLanguage();
  const [activeService, setActiveService] = useState('desarrollo');
  const controls = useAnimation();

  const servicesData = {
    desarrollo: {
      title: language === 'es' ? 'Desarrollo Web' : 'Web Development',
      subtitle: language === 'es' 
        ? 'Construimos aplicaciones web modernas desde cero, diseñadas para crecer contigo.'
        : 'We build modern web applications from scratch, designed to grow with you.',
      icon: <FaRocket />,
      color: '#2563eb',
      technologies: ['React', 'Next.js', 'Node.js'],
      description: language === 'es' 
        ? 'Utilizamos tecnologías como React, Next.js y Node.js para crear interfaces rápidas, intuitivas y escalables. No solo desarrollamos código, sino experiencias digitales que resuelven problemas reales, optimizan procesos y conectan con tus usuarios de manera significativa.'
        : 'We use technologies like React, Next.js and Node.js to create fast, intuitive and scalable interfaces. We don\'t just develop code, but digital experiences that solve real problems, optimize processes and meaningfully connect with your users.'
    },
    soporte: {
      title: language === 'es' ? 'Soporte TI' : 'IT Support',
      subtitle: language === 'es' 
        ? 'Ofrecemos mantenimiento continuo y soporte técnico proactivo para que tu aplicación siempre funcione al máximo.'
        : 'We offer continuous maintenance and proactive technical support so your application always performs at its best.',
      icon: <FaTools />,
      color: '#7c3aed',
      technologies: ['Monitoreo 24/7', 'Seguridad', 'Optimización'],
      description: language === 'es' 
        ? 'Monitoreamos el rendimiento, aplicamos parches de seguridad, optimizamos bases de datos y estamos disponibles para resolver cualquier incidencia. Tu tranquilidad es nuestra prioridad: nos encargamos de que todo siga funcionando mientras tú te enfocas en lo importante.'
        : 'We monitor performance, apply security patches, optimize databases and are available to resolve any incident. Your peace of mind is our priority: we make sure everything keeps running while you focus on what matters.'
    },
    migracion: {
      title: language === 'es' ? 'Migración' : 'Migration',
      subtitle: language === 'es' 
        ? 'Modernizamos sistemas legacy llevándolos a arquitecturas actuales sin interrumpir tu operación.'
        : 'We modernize legacy systems by bringing them to current architectures without interrupting your operation.',
      icon: <FaSync />,
      color: '#059669',
      technologies: ['Legacy', 'Cloud', 'Datos'],
      description: language === 'es' 
        ? 'Migramos datos de manera segura, reestructuramos bases de datos, actualizamos interfaces y mejoramos la infraestructura para que tu negocio opere con mayor velocidad, seguridad y capacidad de crecimiento. Lo hacemos porque el software no debería ser un freno, sino un motor.'
        : 'We securely migrate data, restructure databases, update interfaces and improve infrastructure so your business operates with greater speed, security and growth capacity. We do it because software shouldn\'t be a brake, but an engine.'
    },
    hosting: {
      title: language === 'es' ? 'Hosting & Cloud' : 'Hosting & Cloud',
      subtitle: language === 'es' 
        ? 'Gestionamos servidores, dominios, certificados SSL y despliegues automatizados en entornos confiables y escalables.'
        : 'We manage servers, domains, SSL certificates and automated deployments in reliable and scalable environments.',
      icon: <FaCloud />,
      color: '#dc2626',
      technologies: ['Servidores', 'SSL', 'CDN', 'Backups'],
      description: language === 'es' 
        ? 'Configuramos balanceadores de carga, copias de seguridad automáticas y redes de entrega de contenido (CDN) para garantizar que tu aplicación esté siempre disponible, rápida y segura. Porque una gran aplicación merece un gran hogar digital.'
        : 'We configure load balancers, automated backups and content delivery networks (CDN) to ensure your application is always available, fast and secure. Because a great application deserves a great digital home.'
    }
  };

  const processSteps = [
    {
      number: '1',
      title: language === 'es' ? 'Consulta' : 'Consultation',
      description: language === 'es' 
        ? 'Analizamos tus necesidades y objetivos específicos'
        : 'We analyze your specific needs and objectives',
      icon: <FaUsers />
    },
    {
      number: '2',
      title: language === 'es' ? 'Planificación' : 'Planning',
      description: language === 'es' 
        ? 'Diseñamos la arquitectura y estrategia de implementación'
        : 'We design the architecture and implementation strategy',
      icon: <FaLightbulb />
    },
    {
      number: '3',
      title: language === 'es' ? 'Desarrollo' : 'Development',
      description: language === 'es' 
        ? 'Implementamos con las mejores tecnologías y prácticas'
        : 'We implement with the best technologies and practices',
      icon: <FaCode />
    },
    {
      number: '4',
      title: language === 'es' ? 'Entrega y Soporte' : 'Delivery & Support',
      description: language === 'es' 
        ? 'Entregamos la solución y proporcionamos mantenimiento continuo'
        : 'We deliver the solution and provide continuous maintenance',
      icon: <FaCheckCircle />
    }
  ];

  const statsData = [
    { 
      number: 50, 
      suffix: '+', 
      label: language === 'es' ? 'Proyectos Completados' : 'Projects Completed',
      color: '#2563eb',
      duration: 2000,
      icon: <FaAward />
    },
    { 
      number: 100, 
      suffix: '%', 
      label: language === 'es' ? 'Satisfacción Cliente' : 'Client Satisfaction',
      color: '#7c3aed',
      duration: 2500,
      icon: <FaStar />
    },
    { 
      number: 24, 
      suffix: '/7', 
      label: language === 'es' ? 'Soporte Disponible' : 'Support Available',
      color: '#059669',
      duration: 1500,
      icon: <FaClock />
    },
    { 
      number: 5, 
      suffix: '+', 
      label: language === 'es' ? 'Años de Experiencia' : 'Years Experience',
      color: '#dc2626',
      duration: 3000,
      icon: <FaChartLine />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardHoverVariants = {
    initial: { y: 0, scale: 1 },
    hover: { 
      y: -15,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const tabHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const serviceSwitchVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring"
      }
    }
  };

  const currentService = servicesData[activeService];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        paddingTop: '100px'
      }}
    >
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '40px 20px' 
      }}>
        
        {/* Hero Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          style={{
            textAlign: 'center',
            marginBottom: '100px',
            position: 'relative'
          }}
        >
          <div style={{ marginBottom: '40px' }}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '20px'
              }}
            >
              Code By Will
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              transition={{ delay: 0.4, duration: 1 }}
              style={{
                height: '4px',
                background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
                margin: '0 auto 30px',
                borderRadius: '2px'
              }}
            />
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '20px'
            }}
          >
            {language === 'es' ? 'Nuestros Servicios' : 'Our Services'}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              color: '#64748b',
              maxWidth: '800px',
              margin: '0 auto 60px',
              lineHeight: '1.6'
            }}
          >
            {language === 'es' 
              ? 'Soluciones integrales de desarrollo web, desde la concepción hasta el mantenimiento continuo.'
              : 'Comprehensive web development solutions, from conception to continuous maintenance.'}
          </motion.p>

          {/* Stats - CON ANIMACIONES */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '30px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >
            {statsData.map((stat, index) => (
              <AnimatedStatCard 
                key={index}
                stat={stat}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Servicios Principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'white',
            borderRadius: '28px',
            overflow: 'hidden',
            boxShadow: '0 25px 80px rgba(0,0,0,0.12)',
            marginBottom: '100px'
          }}
        >
          
          {/* Pestañas de servicios */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              borderBottom: '2px solid #f1f5f9'
            }}
          >
            {Object.entries(servicesData).map(([key, service], index) => (
              <motion.button
                key={key}
                variants={itemVariants}
                whileHover="hover"
                variants={tabHoverVariants}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveService(key)}
                style={{
                  padding: '25px 20px',
                  background: activeService === key ? service.color : 'transparent',
                  color: activeService === key ? 'white' : '#64748b',
                  border: 'none',
                  borderBottom: `4px solid ${activeService === key ? service.color : 'transparent'}`,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {activeService === key && (
                  <motion.div
                    layoutId="activeServiceTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: service.color,
                      zIndex: 1
                    }}
                  />
                )}
                
                <motion.div
                  style={{ 
                    fontSize: '1.8rem',
                    zIndex: 2,
                    color: activeService === key ? 'white' : service.color
                  }}
                  animate={activeService === key ? {
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  } : {}}
                  transition={activeService === key ? {
                    rotate: { duration: 0.6 },
                    scale: { duration: 0.3 }
                  } : {}}
                >
                  {service.icon}
                </motion.div>
                
                <motion.div 
                  style={{ zIndex: 2 }}
                  animate={activeService === key ? {
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.div>
              </motion.button>
            ))}
          </motion.div>

          {/* Contenido del servicio activo */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              variants={serviceSwitchVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{ padding: '60px' }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '40px',
                  marginBottom: '40px'
                }}
              >
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  style={{
                    width: '100px',
                    height: '100px',
                    background: `${currentService.color}15`,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    border: `3px solid ${currentService.color}30`,
                    flexShrink: 0,
                    color: currentService.color
                  }}
                >
                  {currentService.icon}
                </motion.div>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '15px'
                  }}>
                    {currentService.title}
                  </h3>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                      fontSize: '1.3rem',
                      color: currentService.color,
                      fontWeight: '600',
                      marginBottom: '25px'
                    }}
                  >
                    {currentService.subtitle}
                  </motion.p>
                  
                  <motion.div
                    variants={containerVariants}
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '10px',
                      marginBottom: '30px'
                    }}
                  >
                    {currentService.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        custom={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        style={{
                          background: `${currentService.color}15`,
                          color: currentService.color,
                          padding: '10px 20px',
                          borderRadius: '25px',
                          fontSize: '0.95rem',
                          fontWeight: '600',
                          border: `1px solid ${currentService.color}30`
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Descripción detallada */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{
                  background: '#f8fafc',
                  padding: '40px',
                  borderRadius: '16px',
                  borderLeft: `5px solid ${currentService.color}`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '100px',
                    height: '100px',
                    background: `${currentService.color}05`,
                    borderRadius: '50%'
                  }}
                />
                
                <p style={{
                  fontSize: '1.2rem',
                  color: '#475569',
                  lineHeight: '1.8',
                  margin: 0,
                  position: 'relative',
                  zIndex: 2
                }}>
                  {currentService.description}
                </p>
              </motion.div>

              {/* CTA específico del servicio */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{
                  textAlign: 'center',
                  marginTop: '50px',
                  paddingTop: '40px',
                  borderTop: '2px solid #f1f5f9'
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contacto"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '20px 50px',
                      background: `linear-gradient(135deg, ${currentService.color} 0%, ${currentService.color}dd 100%)`,
                      color: 'white',
                      fontWeight: 'bold',
                      borderRadius: '16px',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      boxShadow: `0 10px 30px ${currentService.color}40`
                    }}
                  >
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {currentService.icon}
                    </motion.span>
                    <span>
                      {language === 'es' 
                        ? `Solicitar ${currentService.title}` 
                        : `Request ${currentService.title}`}
                    </span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <FaChevronRight />
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Nuestro Proceso de Trabajo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderRadius: '28px',
            padding: '80px 40px',
            color: 'white',
            marginBottom: '100px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Elementos decorativos animados */}
          <motion.div
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
              borderRadius: '50%'
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  fontSize: '2.8rem',
                  fontWeight: 'bold',
                  marginBottom: '20px'
                }}
              >
                {language === 'es' ? 'Nuestro Proceso de Trabajo' : 'Our Work Process'}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                style={{
                  fontSize: '1.2rem',
                  color: '#cbd5e1',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}
              >
                {language === 'es' 
                  ? 'Una metodología estructurada que garantiza calidad, transparencia y resultados excepcionales en cada proyecto'
                  : 'A structured methodology that ensures quality, transparency and exceptional results in every project'}
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '35px'
              }}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  whileHover="hover"
                  variants={cardHoverVariants}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '40px 30px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      fontSize: '4rem',
                      fontWeight: 'bold',
                      color: 'rgba(255, 255, 255, 0.1)'
                    }}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {step.number}
                  </motion.div>
                  
                  <motion.div
                    style={{
                      fontSize: '2.5rem',
                      marginBottom: '25px',
                      color: '#60a5fa'
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.icon}
                  </motion.div>
                  
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '15px',
                    color: 'white'
                  }}>
                    {step.title}
                  </h3>
                  
                  <p style={{
                    color: '#cbd5e1',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Comparación de Servicios */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'white',
            borderRadius: '28px',
            padding: '80px 60px',
            boxShadow: '0 25px 80px rgba(0,0,0,0.12)',
            marginBottom: '100px'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: '2.8rem',
                fontWeight: 'bold',
                color: '#1e293b',
                marginBottom: '20px'
              }}
            >
              {language === 'es' ? '¿Qué servicio necesitas?' : 'Which service do you need?'}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: '1.2rem',
                color: '#64748b',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
            >
              {language === 'es' 
                ? 'Cada servicio está diseñado para resolver necesidades específicas. Encuentra el que mejor se adapte a tus objetivos.'
                : 'Each service is designed to solve specific needs. Find the one that best fits your goals.'}
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '35px'
            }}
          >
            {Object.entries(servicesData).map(([key, service]) => (
              <motion.div
                key={key}
                custom={key}
                variants={itemVariants}
                whileHover="hover"
                variants={cardHoverVariants}
                onClick={() => setActiveService(key)}
                style={{
                  background: '#f8fafc',
                  padding: '40px 35px',
                  borderRadius: '20px',
                  border: `3px solid ${key === activeService ? service.color : '#e2e8f0'}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  marginBottom: '25px'
                }}>
                  <motion.div
                    style={{
                      width: '60px',
                      height: '60px',
                      background: `${service.color}15`,
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.8rem',
                      color: service.color
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    margin: 0
                  }}>
                    {service.title}
                  </h3>
                </div>
                
                <p style={{
                  color: '#475569',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  margin: '0 0 25px 0'
                }}>
                  {service.subtitle}
                </p>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  {service.technologies.slice(0, 3).map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      style={{
                        background: `${service.color}10`,
                        color: service.color,
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        border: `1px solid ${service.color}30`
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
            borderRadius: '28px',
            padding: '80px 60px',
            color: 'white',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Animated background */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
              zIndex: 1
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: '2.8rem',
                fontWeight: 'bold',
                marginBottom: '25px'
              }}
            >
              {language === 'es' 
                ? '¿Listo para transformar tu proyecto?' 
                : 'Ready to transform your project?'}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: '1.3rem',
                marginBottom: '50px',
                opacity: '0.9',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
            >
              {language === 'es' 
                ? 'Cuéntanos sobre tu idea y juntos crearemos una solución que impulse tu negocio digital al siguiente nivel.'
                : 'Tell us about your idea and together we\'ll create a solution that takes your digital business to the next level.'}
            </motion.p>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                display: 'flex',
                gap: '25px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contacto"
                  style={{
                    padding: '20px 50px',
                    background: 'white',
                    color: '#2563eb',
                    fontWeight: 'bold',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }}
                >
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaRegPaperPlane />
                  </motion.span>
                  <span>{language === 'es' ? 'Contactar Ahora' : 'Contact Now'}</span>
                </Link>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/tecnologias"
                  style={{
                    padding: '20px 50px',
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                    fontWeight: 'bold',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <FaCode />
                  </motion.span>
                  <span>{language === 'es' ? 'Ver Tecnologías' : 'View Technologies'}</span>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              style={{
                marginTop: '50px',
                paddingTop: '40px',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '20px',
                opacity: '0.9'
              }}>
                {language === 'es' ? 'También puedes contactarnos directamente:' : 'You can also contact us directly:'}
              </p>
              
              <div style={{
                display: 'flex',
                gap: '30px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="tel:+595982375298"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '1.1rem',
                    opacity: '0.9',
                    transition: 'opacity 0.3s'
                  }}
                >
                  <FaPhoneAlt />
                  <span>+595 982 375298</span>
                </motion.a>
                
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ opacity: '0.5' }}
                >
                  •
                </motion.span>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="mailto:contacto@codebywill.com"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '1.1rem',
                    opacity: '0.9',
                    transition: 'opacity 0.3s'
                  }}
                >
                  <FaEnvelope />
                  <span>contacto@codebywill.com</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;