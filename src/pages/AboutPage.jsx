// src/pages/AboutPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { 
  FaBullseye, 
  FaEye, 
  FaHeart, 
  FaUsers, 
  FaHistory, 
  FaChartLine, 
  FaHandshake,
  FaGlobe,
  FaRocket,
  FaLightbulb,
  FaCode,
  FaPalette,
  FaServer,
  FaCalendarAlt,
  FaStar,
  FaAward
} from 'react-icons/fa';

const AboutPage = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('mision');
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
    controls.start('visible');
  }, [controls]);

  const sections = {
    mision: {
      title: language === 'es' ? 'Nuestra Misión' : 'Our Mission',
      icon: <FaBullseye />,
      color: '#2563eb',
      content: language === 'es' 
        ? 'Transformar ideas en soluciones digitales innovadoras que impulsen el crecimiento de nuestros clientes. Nos dedicamos a crear experiencias tecnológicas excepcionales que no solo resuelven problemas, sino que también generan valor real y sostenible para cada negocio que confía en nosotros.'
        : 'Transform ideas into innovative digital solutions that drive our clients\' growth. We are dedicated to creating exceptional technological experiences that not only solve problems but also generate real and sustainable value for every business that trusts us.'
    },
    vision: {
      title: language === 'es' ? 'Nuestra Visión' : 'Our Vision',
      icon: <FaEye />,
      color: '#7c3aed',
      content: language === 'es' 
        ? 'Ser el socio tecnológico de referencia para empresas que buscan transformación digital en América Latina. Aspiramos a construir un futuro donde cada organización, independientemente de su tamaño, pueda acceder a soluciones tecnológicas de vanguardia que les permitan competir y destacar en el mercado global.'
        : 'To be the reference technological partner for companies seeking digital transformation in Latin America. We aspire to build a future where every organization, regardless of size, can access cutting-edge technological solutions that allow them to compete and stand out in the global market.'
    },
    valores: {
      title: language === 'es' ? 'Nuestros Valores' : 'Our Values',
      icon: <FaHeart />,
      color: '#dc2626',
      content: language === 'es' 
        ? 'Creemos en la transparencia, la excelencia técnica y la colaboración cercana con nuestros clientes. Nuestro compromiso con la calidad, la innovación continua y la satisfacción del cliente son los pilares que guían cada proyecto que emprendemos.'
        : 'We believe in transparency, technical excellence, and close collaboration with our clients. Our commitment to quality, continuous innovation, and customer satisfaction are the pillars that guide every project we undertake.'
    }
  };

  const teamMembers = [
    {
      name: 'William',
      role: language === 'es' ? 'Fundador & Desarrollador Full-Stack' : 'Founder & Full-Stack Developer',
      description: language === 'es' 
        ? 'Con más de 5 años de experiencia en desarrollo web, lidera los proyectos técnicos y asegura la calidad del código.'
        : 'With over 5 years of web development experience, leads technical projects and ensures code quality.',
      skills: ['React', 'Node.js', 'AWS', 'Docker'],
      color: '#2563eb',
      icon: <FaCode />
    },
    {
      name: 'Equipo de Diseño',
      role: language === 'es' ? 'Diseñadores UX/UI' : 'UX/UI Designers',
      description: language === 'es' 
        ? 'Especialistas en crear experiencias de usuario intuitivas y atractivas que conectan con los usuarios finales.'
        : 'Specialists in creating intuitive and engaging user experiences that connect with end-users.',
      skills: ['Figma', 'UX Research', 'Prototyping', 'Design Systems'],
      color: '#7c3aed',
      icon: <FaPalette />
    },
    {
      name: 'Equipo DevOps',
      role: language === 'es' ? 'Ingenieros DevOps' : 'DevOps Engineers',
      description: language === 'es' 
        ? 'Expertos en infraestructura, despliegue y optimización para asegurar el rendimiento y disponibilidad de las aplicaciones.'
        : 'Infrastructure, deployment and optimization experts to ensure application performance and availability.',
      skills: ['AWS', 'Docker', 'CI/CD', 'Monitoring'],
      color: '#059669',
      icon: <FaServer />
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: language === 'es' ? 'Fundación' : 'Foundation',
      description: language === 'es' 
        ? 'Inicio de Code By Will como proyecto personal de desarrollo web.'
        : 'Code By Will started as a personal web development project.',
      icon: <FaRocket />
    },
    {
      year: '2020',
      title: language === 'es' ? 'Primeros Clientes' : 'First Clients',
      description: language === 'es' 
        ? 'Comienzo de colaboraciones profesionales con pequeñas y medianas empresas.'
        : 'Beginning of professional collaborations with small and medium-sized businesses.',
      icon: <FaHandshake />
    },
    {
      year: '2021',
      title: language === 'es' ? 'Expansión de Servicios' : 'Service Expansion',
      description: language === 'es' 
        ? 'Ampliación del portafolio para incluir soporte técnico y migración de sistemas.'
        : 'Expanded portfolio to include technical support and system migration.',
      icon: <FaGlobe />
    },
    {
      year: '2022',
      title: language === 'es' ? 'Equipo Completo' : 'Full Team',
      description: language === 'es' 
        ? 'Formación de un equipo multidisciplinario para ofrecer soluciones integrales.'
        : 'Formation of a multidisciplinary team to offer comprehensive solutions.',
      icon: <FaUsers />
    },
    {
      year: '2023',
      title: language === 'es' ? 'Crecimiento Regional' : 'Regional Growth',
      description: language === 'es' 
        ? 'Expansión de servicios a nivel regional con clientes en múltiples países.'
        : 'Regional service expansion with clients in multiple countries.',
      icon: <FaChartLine />
    },
    {
      year: '2024',
      title: language === 'es' ? 'Innovación Continua' : 'Continuous Innovation',
      description: language === 'es' 
        ? 'Adopción de nuevas tecnologías y metodologías para ofrecer soluciones de vanguardia.'
        : 'Adoption of new technologies and methodologies to offer cutting-edge solutions.',
      icon: <FaLightbulb />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const iconHoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6
      }
    }
  };

  const timelineVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const statsVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const currentSection = sections[activeSection];

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
            marginBottom: '100px'
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '25px'
            }}
          >
            <motion.span
              style={{ color: '#2563eb' }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% auto'
              }}
            >
              Code By Will
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {' - '}
              {language === 'es' ? 'Nuestra Historia' : 'Our Story'}
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              color: '#64748b',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            {language === 'es' 
              ? 'Desde 2019, transformamos ideas en realidades digitales. Somos más que desarrolladores, somos socios tecnológicos comprometidos con el éxito de tu proyecto.'
              : 'Since 2019, we transform ideas into digital realities. We are more than developers, we are technological partners committed to your project\'s success.'}
          </motion.p>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '150px' }}
            transition={{ delay: 0.6, duration: 1 }}
            style={{
              height: '4px',
              background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
              margin: '40px auto',
              borderRadius: '2px'
            }}
          />
        </motion.div>

        {/* Misión, Visión y Valores */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            marginBottom: '100px'
          }}
        >
          {Object.entries(sections).map(([key, section], index) => (
            <motion.div
              key={key}
              custom={index}
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              variants={cardHoverVariants}
              style={{
                background: activeSection === key 
                  ? `linear-gradient(135deg, ${section.color} 0%, ${section.color}dd 100%)`
                  : 'white',
                padding: '40px 30px',
                borderRadius: '24px',
                boxShadow: activeSection === key 
                  ? `0 25px 50px ${section.color}40`
                  : '0 15px 40px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setActiveSection(key)}
            >
              {activeSection === key && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '100px',
                    height: '100px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%'
                  }}
                />
              )}
              
              <motion.div
                variants={iconHoverVariants}
                whileHover="hover"
                style={{
                  width: '90px',
                  height: '90px',
                  background: activeSection === key 
                    ? 'rgba(255, 255, 255, 0.2)'
                    : `${section.color}15`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  margin: '0 auto 30px',
                  color: activeSection === key ? 'white' : section.color
                }}
              >
                {section.icon}
              </motion.div>
              
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: activeSection === key ? 'white' : '#1e293b',
                marginBottom: '25px'
              }}>
                {section.title}
              </h3>
              
              <p style={{
                color: activeSection === key ? 'rgba(255, 255, 255, 0.9)' : '#64748b',
                lineHeight: '1.6',
                fontSize: '1.1rem'
              }}>
                {section.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Nuestro Equipo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{
            background: 'white',
            borderRadius: '28px',
            padding: '80px 60px',
            boxShadow: '0 25px 80px rgba(0,0,0,0.12)',
            marginBottom: '100px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #2563eb20, #7c3aed20)',
              borderRadius: '50%'
            }}
          />
          
          <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative' }}>
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
              {language === 'es' ? 'Nuestro Equipo' : 'Our Team'}
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
                margin: '0 auto'
              }}
            >
              {language === 'es' 
                ? 'Un equipo multidisciplinario de expertos apasionados por la tecnología y comprometidos con la excelencia.'
                : 'A multidisciplinary team of experts passionate about technology and committed to excellence.'}
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              position: 'relative'
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
                variants={cardHoverVariants}
                style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  padding: '40px',
                  borderRadius: '24px',
                  borderTop: `5px solid ${member.color}`,
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '60px',
                    height: '60px',
                    background: `${member.color}10`,
                    borderRadius: '50%'
                  }}
                />
                
                <div style={{ marginBottom: '30px', position: 'relative', zIndex: 2 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    marginBottom: '15px'
                  }}>
                    <motion.div
                      style={{
                        width: '60px',
                        height: '60px',
                        background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}dd 100%)`,
                        borderRadius: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1.8rem'
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {member.icon}
                    </motion.div>
                    <div>
                      <h3 style={{
                        fontSize: '1.6rem',
                        fontWeight: 'bold',
                        color: member.color,
                        marginBottom: '5px'
                      }}>
                        {member.name}
                      </h3>
                      <p style={{
                        color: '#475569',
                        fontSize: '1rem',
                        fontWeight: '500'
                      }}>
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
                
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  marginBottom: '30px'
                }}>
                  {member.description}
                </p>
                
                <motion.div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}
                  variants={containerVariants}
                >
                  {member.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                      style={{
                        background: `${member.color}15`,
                        color: member.color,
                        padding: '10px 20px',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Nuestra Historia - Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
          {/* Floating elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: '20%',
              left: '5%',
              width: '50px',
              height: '50px',
              background: 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%)',
              borderRadius: '50%'
            }}
          />
          
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            style={{
              position: 'absolute',
              bottom: '20%',
              right: '5%',
              width: '70px',
              height: '70px',
              background: 'radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%)',
              borderRadius: '50%'
            }}
          />
          
          <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 2 }}>
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
              {language === 'es' ? 'Nuestra Historia' : 'Our History'}
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
                margin: '0 auto'
              }}
            >
              {language === 'es' 
                ? 'Un viaje de crecimiento, aprendizaje y éxito compartido con nuestros clientes'
                : 'A journey of growth, learning, and shared success with our clients'}
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
              position: 'relative',
              zIndex: 2
            }}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={timelineVariants}
                whileHover="hover"
                initial="initial"
                variants={cardHoverVariants}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '35px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.div
                  style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: '#60a5fa',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {milestone.year}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {milestone.icon}
                  </motion.div>
                </motion.div>
                
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  color: 'white'
                }}>
                  {milestone.title}
                </h3>
                
                <p style={{
                  color: '#cbd5e1',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats del Equipo */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '30px',
            marginBottom: '100px'
          }}
        >
          {[
            { number: '50+', label: language === 'es' ? 'Proyectos Entregados' : 'Projects Delivered', color: '#2563eb', icon: <FaCalendarAlt /> },
            { number: '5+', label: language === 'es' ? 'Años de Experiencia' : 'Years Experience', color: '#7c3aed', icon: <FaHistory /> },
            { number: '100%', label: language === 'es' ? 'Satisfacción Cliente' : 'Client Satisfaction', color: '#059669', icon: <FaStar /> },
            { number: '3', label: language === 'es' ? 'Países Servidos' : 'Countries Served', color: '#ea580c', icon: <FaGlobe /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statsVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              style={{
                background: 'white',
                padding: '40px 30px',
                borderRadius: '20px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '100px',
                  height: '100px',
                  background: `${stat.color}10`,
                  borderRadius: '50%'
                }}
              />
              
              <motion.div
                style={{
                  fontSize: '2rem',
                  marginBottom: '15px',
                  color: stat.color
                }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                {stat.icon}
              </motion.div>
              
              <motion.div
                style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: stat.color,
                  marginBottom: '10px'
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              
              <div style={{
                fontSize: '1.1rem',
                color: '#64748b',
                fontWeight: '600'
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
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
            padding: '80px 40px',
            color: 'white',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
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
                ? '¿Listo para trabajar con nosotros?' 
                : 'Ready to work with us?'}
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
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
            >
              {language === 'es' 
                ? 'Conoce más sobre nuestro trabajo, metodología y cómo podemos ayudarte a alcanzar tus objetivos digitales.'
                : 'Learn more about our work, methodology and how we can help you achieve your digital goals.'}
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
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }}
                >
                  {language === 'es' ? 'Contactar' : 'Contact'}
                </Link>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/proceso"
                  style={{
                    padding: '20px 50px',
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                    fontWeight: 'bold',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {language === 'es' ? 'Ver Proceso' : 'View Process'}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;