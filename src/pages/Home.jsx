// src/pages/Home.jsx - CON CONTADORES ANIMADOS
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { 
  FaRocket, 
  FaTools, 
  FaSync, 
  FaCloud, 
  FaArrowRight,
  FaPhoneAlt,
  FaCalendarAlt,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaLightbulb,
  FaCode,
  FaServer,
  FaShieldAlt,
  FaBullseye,
  FaEye,
  FaHandshake,
  FaHeart,
  FaStar,
  FaGlobe,
  FaRegPaperPlane
} from 'react-icons/fa';

// Componente de contador animado
const AnimatedCounter = ({ value, suffix = '', duration = 2000, color = '#2563eb' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const isPercentage = value.includes('%');
      const isPlus = value.includes('+');
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
      
      let start = 0;
      const increment = numericValue / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  const isPercentage = value.includes('%');
  const isPlus = value.includes('+');
  const is24_7 = value === '24/7';
  
  if (is24_7) {
    return (
      <motion.div
        ref={ref}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        style={{
          fontSize: '2.2rem',
          fontWeight: 'bold',
          color: color,
          marginBottom: '8px'
        }}
      >
        24/7
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring" }}
      style={{
        fontSize: '2.2rem',
        fontWeight: 'bold',
        color: color,
        marginBottom: '8px'
      }}
    >
      {isPercentage 
        ? `${Math.floor(count)}%`
        : isPlus
          ? `${Math.floor(count)}+`
          : Math.floor(count)}
      {suffix}
    </motion.div>
  );
};

// Traducciones locales como fallback
const translations = {
  es: {
    heroTitle1: 'Impulsa tu',
    heroTitle2: 'presencia',
    heroTitle3: 'digital con',
    heroTitle4: 'soluciones innovadoras',
    heroDescription: 'Transformamos ideas en experiencias digitales excepcionales. Especialistas en desarrollo web, soporte IT y migración cloud con enfoque en resultados.',
    verServicios: 'Ver Servicios',
    contactarAhora: 'Contactar Ahora',
    agendaConsulta: 'Agenda una consulta',
    llamarAhora: 'Llamar ahora',
    respuestaRapida: 'Respondemos en menos de 24 horas',
    listoParaEmpezar: '¿Listo para transformar tu negocio?',
    listoDesc: 'Hablemos sobre tu proyecto y encontremos juntos la solución perfecta para tus necesidades tecnológicas.'
  },
  en: {
    heroTitle1: 'Boost your',
    heroTitle2: 'digital',
    heroTitle3: 'presence with',
    heroTitle4: 'innovative solutions',
    heroDescription: 'We transform ideas into exceptional digital experiences. Specialists in web development, IT support and cloud migration with a focus on results.',
    verServicios: 'View Services',
    contactarAhora: 'Contact Now',
    agendaConsulta: 'Schedule a consultation',
    llamarAhora: 'Call now',
    respuestaRapida: 'We respond in less than 24 hours',
    listoParaEmpezar: 'Ready to transform your business?',
    listoDesc: 'Let\'s talk about your project and find together the perfect solution for your technological needs.'
  }
};

const Home = () => {
  const { language } = useLanguage();
  
  // Fallback seguro para traducciones
  const t = translations[language] || translations.es;

  // Variantes de animación
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

  const statHoverVariants = {
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Datos para Misión, Visión y Valores - USANDO FaBullseye
  const missionVisionData = [
    {
      title: language === 'es' ? 'Nuestra Misión' : 'Our Mission',
      icon: <FaBullseye />,
      color: '#2563eb',
      description: language === 'es' 
        ? 'Transformar ideas en soluciones digitales innovadoras que impulsen el crecimiento de nuestros clientes mediante tecnología de vanguardia y un enfoque centrado en resultados.'
        : 'Transform ideas into innovative digital solutions that drive our clients\' growth through cutting-edge technology and a results-focused approach.',
      items: language === 'es' 
        ? ['Innovación constante', 'Excelencia técnica', 'Valor real para el cliente']
        : ['Constant innovation', 'Technical excellence', 'Real value for clients']
    },
    {
      title: language === 'es' ? 'Nuestra Visión' : 'Our Vision',
      icon: <FaEye />,
      color: '#7c3aed',
      description: language === 'es' 
        ? 'Ser el socio tecnológico de referencia en América Latina, reconocido por nuestra capacidad para entregar soluciones que transforman negocios digitales y generan impacto positivo.'
        : 'To be the reference technological partner in Latin America, recognized for our ability to deliver solutions that transform digital businesses and generate positive impact.',
      items: language === 'es' 
        ? ['Liderazgo regional', 'Innovación disruptiva', 'Sostenibilidad digital']
        : ['Regional leadership', 'Disruptive innovation', 'Digital sustainability']
    },
    {
      title: language === 'es' ? 'Nuestros Valores' : 'Our Values',
      icon: <FaHeart />,
      color: '#dc2626',
      description: language === 'es' 
        ? 'Creemos en la transparencia, colaboración cercana y compromiso con la calidad. Cada proyecto es una oportunidad para superar expectativas y construir relaciones duraderas.'
        : 'We believe in transparency, close collaboration and commitment to quality. Every project is an opportunity to exceed expectations and build lasting relationships.',
      items: language === 'es' 
        ? ['Transparencia total', 'Colaboración activa', 'Calidad garantizada']
        : ['Total transparency', 'Active collaboration', 'Guaranteed quality']
    }
  ];

  // Datos para Objetivos Estratégicos
  const strategicObjectives = [
    {
      number: '2025',
      title: language === 'es' ? 'Expansión Regional' : 'Regional Expansion',
      description: language === 'es' 
        ? 'Establecer presencia en 3 países adicionales de Latinoamérica'
        : 'Establish presence in 3 additional Latin American countries',
      icon: <FaGlobe />,
      color: '#2563eb'
    },
    {
      number: '100+',
      title: language === 'es' ? 'Proyectos de Impacto' : 'Impact Projects',
      description: language === 'es' 
        ? 'Entregar soluciones que transformen digitalmente a nuestros clientes'
        : 'Deliver solutions that digitally transform our clients',
      icon: <FaHandshake />,
      color: '#7c3aed'
    },
    {
      number: '95%',
      title: language === 'es' ? 'Satisfacción' : 'Satisfaction',
      description: language === 'es' 
        ? 'Mantener y superar nuestro estándar de satisfacción del cliente'
        : 'Maintain and exceed our customer satisfaction standard',
      icon: <FaUsers />,
      color: '#059669'
    },
    {
      number: '10+',
      title: language === 'es' ? 'Innovación Continua' : 'Continuous Innovation',
      description: language === 'es' 
        ? 'Adoptar nuevas tecnologías emergentes cada año'
        : 'Adopt new emerging technologies each year',
      icon: <FaLightbulb />,
      color: '#ea580c'
    }
  ];

  // Datos para Servicios
  const services = [
    {
      title: language === 'es' ? 'Desarrollo Web' : 'Web Development',
      description: language === 'es' 
        ? 'Aplicaciones web modernas, escalables y de alto rendimiento con tecnologías de vanguardia.'
        : 'Modern, scalable, high-performance web applications with cutting-edge technologies.',
      icon: <FaRocket />,
      color: '#2563eb',
      tags: ['React', 'Vue.js', 'Node.js']
    },
    {
      title: language === 'es' ? 'Soporte TI' : 'IT Support',
      description: language === 'es' 
        ? 'Mantenimiento proactivo, optimización y resolución de incidencias 24/7 para tu infraestructura.'
        : 'Proactive maintenance, optimization and 24/7 incident resolution for your infrastructure.',
      icon: <FaTools />,
      color: '#7c3aed',
      tags: ['Monitoreo', 'Backups', 'Seguridad']
    },
    {
      title: language === 'es' ? 'Migración' : 'Migration',
      description: language === 'es' 
        ? 'Modernización de sistemas legacy, migración a la nube y actualización de tecnologías obsoletas.'
        : 'Legacy system modernization, cloud migration and obsolete technology updates.',
      icon: <FaSync />,
      color: '#059669',
      tags: ['Cloud', 'Legacy', 'Datos']
    },
    {
      title: language === 'es' ? 'Hosting & Cloud' : 'Hosting & Cloud',
      description: language === 'es' 
        ? 'Infraestructura en la nube, servidores gestionados y despliegues automatizados para máxima disponibilidad.'
        : 'Cloud infrastructure, managed servers and automated deployments for maximum availability.',
      icon: <FaCloud />,
      color: '#dc2626',
      tags: ['AWS', 'Docker', 'CI/CD']
    }
  ];

  // Datos para Proceso
  const processSteps = [
    { 
      step: '1', 
      icon: <FaUsers />, 
      title: language === 'es' ? 'Análisis' : 'Analysis', 
      description: language === 'es' 
        ? 'Comprendemos tus necesidades y objetivos específicos'
        : 'We understand your specific needs and objectives' 
    },
    { 
      step: '2', 
      icon: <FaLightbulb />, 
      title: language === 'es' ? 'Diseño' : 'Design', 
      description: language === 'es' 
        ? 'Creamos la arquitectura y diseño de la solución'
        : 'We create the solution architecture and design' 
    },
    { 
      step: '3', 
      icon: <FaCode />, 
      title: language === 'es' ? 'Desarrollo' : 'Development', 
      description: language === 'es' 
        ? 'Implementamos con las mejores tecnologías y prácticas'
        : 'We implement with the best technologies and practices' 
    },
    { 
      step: '4', 
      icon: <FaCheckCircle />, 
      title: language === 'es' ? 'Entrega' : 'Delivery', 
      description: language === 'es' 
        ? 'Desplegamos y entregamos la solución final'
        : 'We deploy and deliver the final solution' 
    }
  ];

  // Datos para Stats CON VALORES NUMÉRICOS PARA EL CONTADOR
  const stats = [
    { 
      value: '5', 
      suffix: '+', // Se agregará el + después del contador
      label: language === 'es' ? 'Años Experiencia' : 'Years Experience', 
      color: '#2563eb',
      icon: <FaChartLine />,
      duration: 1500
    },
    { 
      value: '50', 
      suffix: '+', // Se agregará el + después del contador
      label: language === 'es' ? 'Proyectos Entregados' : 'Projects Delivered', 
      color: '#7c3aed',
      icon: <FaServer />,
      duration: 1800
    },
    { 
      value: '100', 
      suffix: '%', // Se agregará el % después del contador
      label: language === 'es' ? 'Satisfacción Cliente' : 'Client Satisfaction', 
      color: '#059669',
      icon: <FaUsers />,
      duration: 2000
    },
    { 
      value: '24/7', // Este será estático
      suffix: '',
      label: language === 'es' ? 'Soporte Disponible' : 'Support Available', 
      color: '#ea580c',
      icon: <FaShieldAlt />,
      duration: 1000
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ minHeight: '100vh' }}
    >
      
      {/* === SECCIÓN 1: HERO === */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Elementos de fondo animados */}
        <motion.div
          animate={floatAnimation}
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }}
        />
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }
          }}
          style={{
            position: 'absolute',
            bottom: '30%',
            right: '15%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }}
        />
        
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px', 
          textAlign: 'center',
          position: 'relative',
          zIndex: 1 
        }}>
          
          {/* Logo con efecto gradiente animado */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '40px' }}
          >
            <motion.h1
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 'bold',
                marginBottom: '20px',
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% auto'
              }}
            >
              CodeByWill
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{
                height: '4px',
                background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
                margin: '0 auto',
                borderRadius: '2px'
              }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '30px',
              lineHeight: '1.3'
            }}
          >
            <motion.span variants={itemVariants}>
              {t.heroTitle1}{' '}
            </motion.span>
            <motion.span
              variants={itemVariants}
              style={{ color: '#2563eb' }}
            >
              {t.heroTitle2}{' '}
            </motion.span>
            <motion.span variants={itemVariants}>
              {t.heroTitle3}{' '}
            </motion.span>
            <motion.span
              variants={itemVariants}
              style={{ color: '#7c3aed' }}
            >
              {t.heroTitle4}
            </motion.span>
          </motion.h2>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#64748b',
              marginBottom: '40px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.6'
            }}
          >
            {t.heroDescription}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '60px'
            }}
          >
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              variants={buttonHoverVariants}
            >
              <Link 
                to="/servicios"
                style={{
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  color: 'white',
                  fontWeight: 'bold',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  minWidth: '200px',
                  justifyContent: 'center',
                  boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaRocket />
                </motion.span>
                <span>{t.verServicios}</span>
                <motion.span
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ marginLeft: 'auto' }}
                >
                  <FaArrowRight />
                </motion.span>
              </Link>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              variants={buttonHoverVariants}
            >
              <Link 
                to="/contacto"
                style={{
                  padding: '16px 32px',
                  background: 'white',
                  color: '#2563eb',
                  border: '2px solid #2563eb',
                  fontWeight: 'bold',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  minWidth: '200px',
                  justifyContent: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaRegPaperPlane />
                </motion.span>
                <span>{t.contactarAhora}</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats CON CONTADORES ANIMADOS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '20px',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                variants={statHoverVariants}
                style={{
                  background: 'white',
                  padding: '25px 20px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                {/* Top border animada */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    height: '3px',
                    background: `linear-gradient(90deg, ${stat.color}, ${stat.color}dd)`,
                    transformOrigin: 'left'
                  }}
                />
                
                <motion.div
                  style={{
                    fontSize: '1.5rem',
                    color: stat.color,
                    marginBottom: '10px'
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                
                {/* CONTADOR ANIMADO */}
                <AnimatedCounter 
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={stat.duration}
                  color={stat.color}
                />
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  style={{
                    fontSize: '0.9rem',
                    color: '#64748b',
                    fontWeight: '500'
                  }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* === SECCIÓN 2: MISIÓN, VISIÓN Y VALORES === */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          padding: '100px 20px',
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Elementos decorativos */}
        <motion.div
          animate={floatAnimation}
          style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)',
            borderRadius: '50%'
          }}
        />
        
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          position: 'relative',
          zIndex: 1 
        }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#1e293b',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px'
              }}
            >
              <FaBullseye style={{ color: '#2563eb' }} /> {/* CAMBIADO A FaBullseye */}
              <span style={{ color: '#2563eb' }}>
                {language === 'es' ? 'Propósito y Valores' : 'Purpose & Values'}
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: '1.2rem',
                color: '#64748b',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
            >
              {language === 'es' 
                ? 'Más que una empresa de desarrollo, somos socios comprometidos con tu éxito digital. Conoce los principios que guían cada proyecto.'
                : 'More than a development company, we are partners committed to your digital success. Discover the principles that guide every project.'}
            </motion.p>
          </div>

          {/* Grid de Misión, Visión y Valores */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '40px',
              marginBottom: '60px'
            }}
          >
            {missionVisionData.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
                variants={cardHoverVariants}
                style={{
                  background: 'white',
                  padding: '50px 40px',
                  borderRadius: '24px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  border: `1px solid ${item.color}20`
                }}
              >
                {/* Elemento decorativo superior */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    height: '4px',
                    background: `linear-gradient(90deg, ${item.color}, ${item.color}dd)`,
                    transformOrigin: 'left'
                  }}
                />
                
                {/* Icono animado */}
                <motion.div
                  style={{
                    width: '80px',
                    height: '80px',
                    background: `${item.color}15`,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    margin: '0 auto 30px',
                    color: item.color
                  }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                
                {/* Título */}
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '25px'
                }}>
                  {item.title}
                </h3>
                
                {/* Descripción */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  style={{
                    color: '#475569',
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    marginBottom: '30px',
                    minHeight: '120px'
                  }}
                >
                  {item.description}
                </motion.p>
                
                {/* Items */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                  textAlign: 'left'
                }}>
                  {item.items.map((listItem, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + itemIndex * 0.1 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                      }}
                    >
                      <motion.div
                        style={{
                          width: '30px',
                          height: '30px',
                          background: `${item.color}15`,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: item.color,
                          fontSize: '0.8rem',
                          flexShrink: 0
                        }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        ✓
                      </motion.div>
                      <span style={{
                        color: '#475569',
                        fontSize: '1rem',
                        fontWeight: '500'
                      }}>
                        {listItem}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Objetivos Estratégicos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{
              background: 'white',
              borderRadius: '24px',
              padding: '60px 50px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              marginTop: '40px'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '15px'
                }}
              >
                <FaStar style={{ color: '#f59e0b' }} />
                <span style={{ color: '#2563eb' }}>
                  {language === 'es' ? 'Objetivos Estratégicos' : 'Strategic Objectives'}
                </span>
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                style={{
                  fontSize: '1.1rem',
                  color: '#64748b',
                  maxWidth: '800px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}
              >
                {language === 'es' 
                  ? 'Metas claras que guían nuestro crecimiento y garantizan que cada proyecto contribuya a nuestro propósito principal'
                  : 'Clear goals that guide our growth and ensure every project contributes to our main purpose'}
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '30px'
              }}
            >
              {strategicObjectives.map((objective, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  style={{
                    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                    padding: '35px 30px',
                    borderRadius: '20px',
                    textAlign: 'center',
                    border: `1px solid ${objective.color}20`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: 'bold',
                      color: objective.color,
                      marginBottom: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px'
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    {objective.icon} {objective.number}
                  </motion.div>
                  
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '15px'
                  }}>
                    {objective.title}
                  </h4>
                  
                  <p style={{
                    color: '#475569',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {objective.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA para conocer más */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              style={{
                textAlign: 'center',
                marginTop: '60px',
                paddingTop: '40px',
                borderTop: '1px solid #e2e8f0'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/nosotros"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '15px',
                    padding: '18px 45px',
                    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)'
                  }}
                >
                  <FaBullseye />
                  {language === 'es' ? 'Conoce nuestra historia completa' : 'Discover our full story'}
                  <motion.span
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ marginLeft: '10px' }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* === SECCIÓN 3: SERVICIOS === */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{
          padding: '100px 20px',
          background: 'white',
          position: 'relative'
        }}
      >
        
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          textAlign: 'center',
          position: 'relative',
          zIndex: 1 
        }}>
          
          <div style={{ marginBottom: '80px' }}>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#1e293b',
                marginBottom: '20px',
                position: 'relative',
                display: 'inline-block'
              }}
            >
              <span style={{ color: '#2563eb' }}>Nuestros</span> Servicios
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  height: '4px',
                  background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
                  borderRadius: '2px'
                }}
              />
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{
                fontSize: '1.2rem',
                color: '#64748b',
                marginBottom: '60px',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.6'
              }}
            >
              {language === 'es' 
                ? 'Soluciones tecnológicas integrales diseñadas para impulsar tu negocio digital'
                : 'Comprehensive technological solutions designed to boost your digital business'}
            </motion.p>
          </div>

          {/* Servicios en grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              marginBottom: '80px'
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
                variants={cardHoverVariants}
                style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  padding: '50px 40px',
                  borderRadius: '24px',
                  textAlign: 'center',
                  border: '1px solid #e2e8f0',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Efecto de fondo al hover */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${service.color}05, ${service.color}10)`,
                    zIndex: 1
                  }}
                />
                
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      width: '80px',
                      height: '80px',
                      background: `${service.color}15`,
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                      margin: '0 auto 30px',
                      color: service.color
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 style={{
                    fontSize: '1.6rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '20px'
                  }}>
                    {service.title}
                  </h3>
                  
                  <p style={{ 
                    color: '#475569', 
                    lineHeight: '1.7',
                    marginBottom: '30px',
                    fontSize: '1.05rem'
                  }}>
                    {service.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    justifyContent: 'center'
                  }}>
                    {service.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        style={{
                          background: `${service.color}15`,
                          color: service.color,
                          padding: '8px 16px',
                          borderRadius: '25px',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          border: `1px solid ${service.color}30`
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Servicios */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/servicios"
                style={{
                  display: 'inline-block',
                  padding: '18px 45px',
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  color: 'white',
                  fontWeight: 'bold',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.span
                  style={{ marginRight: '15px' }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
                {language === 'es' ? 'Ver todos los servicios' : 'View all services'}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* === SECCIÓN 4: PROCESO === */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          padding: '100px 20px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Elementos decorativos */}
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
            top: '-100px',
            right: '-100px',
            width: '200px',
            height: '200px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '50%'
          }}
        />
        
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          position: 'relative',
          zIndex: 2 
        }}>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}
          >
            <FaLightbulb style={{ color: '#60a5fa' }} />
            <span style={{ color: '#60a5fa' }}>Nuestro</span> Proceso
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: '1.2rem',
              color: '#cbd5e1',
              marginBottom: '80px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.6'
            }}
          >
            {language === 'es' 
              ? 'Una metodología estructurada que garantiza calidad, transparencia y resultados excepcionales en cada proyecto'
              : 'A structured methodology that ensures quality, transparency and exceptional results in every project'}
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
              marginBottom: '80px'
            }}
          >
            {processSteps.map((item, index) => (
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
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: index * 0.1 }}
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    margin: '0 auto 25px'
                  }}
                >
                  {item.step}
                </motion.div>
                
                <motion.div
                  style={{
                    fontSize: '2.5rem',
                    marginBottom: '20px',
                    color: '#60a5fa'
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  color: 'white'
                }}>
                  {item.title}
                </h3>
                
                <p style={{
                  color: '#cbd5e1',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/proceso"
                style={{
                  display: 'inline-block',
                  padding: '18px 45px',
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  color: 'white',
                  fontWeight: 'bold',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)'
                }}
              >
                <span style={{ marginRight: '15px' }}>📋</span>
                {language === 'es' ? 'Conocer nuestro proceso completo' : 'View our complete process'}
                <motion.span
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ marginLeft: '15px' }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* === SECCIÓN 5: CTA FINAL === */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          padding: '100px 20px',
          background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Elementos decorativos animados */}
        <motion.div
          animate={floatAnimation}
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '300px',
            height: '300px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%'
          }}
        />
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }
          }}
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-150px',
            width: '400px',
            height: '400px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '50%'
          }}
        />
        
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          position: 'relative',
          zIndex: 1 
        }}>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '30px'
            }}
          >
            {t.listoParaEmpezar}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: '1.2rem',
              marginBottom: '50px',
              opacity: '0.9',
              lineHeight: '1.6'
            }}
          >
            {t.listoDesc}
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
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}
          >
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              variants={buttonHoverVariants}
            >
              <Link 
                to="/contacto"
                style={{
                  padding: '18px 40px',
                  background: 'white',
                  color: '#2563eb',
                  fontWeight: 'bold',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  minWidth: '200px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '15px'
                }}
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaCalendarAlt />
                </motion.span>
                <span>{t.agendaConsulta}</span>
                <motion.span
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaArrowRight />
                </motion.span>
              </Link>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              variants={buttonHoverVariants}
            >
              <a 
                href={`tel:+595982375298`}
                style={{
                  padding: '18px 40px',
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  fontWeight: 'bold',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  minWidth: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '15px',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaPhoneAlt />
                </motion.span>
                <span>{t.llamarAhora}</span>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1rem'
            }}
          >
            {t.respuestaRapida}
          </motion.p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;