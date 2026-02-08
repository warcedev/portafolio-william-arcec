// src/pages/ProcessPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { 
  FaSearch, 
  FaPalette, 
  FaCode, 
  FaRocket,
  FaChevronRight,
  FaClock,
  FaCheckCircle,
  FaListAlt,
  FaCalendarCheck,
  FaUsers,
  FaLightbulb,
  FaCogs,
  FaServer,
  FaChartLine,
  FaHandshake,
  FaRegPaperPlane
} from 'react-icons/fa';

const ProcessPage = () => {
  const { language } = useLanguage();
  const [activePhase, setActivePhase] = useState('discovery');
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
    controls.start('visible');
  }, [controls]);

  const phases = {
    discovery: {
      title: language === 'es' ? 'Descubrimiento' : 'Discovery',
      icon: <FaSearch />,
      color: '#2563eb',
      steps: [
        {
          title: language === 'es' ? 'Reunión Inicial' : 'Initial Meeting',
          description: language === 'es' 
            ? 'Analizamos tus necesidades, objetivos y expectativas para entender completamente tu proyecto.'
            : 'We analyze your needs, objectives and expectations to fully understand your project.',
          duration: language === 'es' ? '1-2 días' : '1-2 days',
          icon: <FaUsers />
        },
        {
          title: language === 'es' ? 'Análisis de Requerimientos' : 'Requirements Analysis',
          description: language === 'es' 
            ? 'Documentamos todas las funcionalidades, especificaciones técnicas y casos de uso.'
            : 'We document all functionalities, technical specifications and use cases.',
          duration: language === 'es' ? '2-3 días' : '2-3 days',
          icon: <FaListAlt />
        },
        {
          title: language === 'es' ? 'Propuesta Detallada' : 'Detailed Proposal',
          description: language === 'es' 
            ? 'Creamos una propuesta completa con alcance, cronograma y presupuesto.'
            : 'We create a complete proposal with scope, timeline and budget.',
          duration: language === 'es' ? '1-2 días' : '1-2 days',
          icon: <FaCalendarCheck />
        }
      ],
      deliverables: language === 'es' 
        ? ['Documento de requerimientos', 'Wireframes iniciales', 'Propuesta técnica', 'Cronograma estimado']
        : ['Requirements document', 'Initial wireframes', 'Technical proposal', 'Estimated timeline']
    },
    design: {
      title: language === 'es' ? 'Diseño' : 'Design',
      icon: <FaPalette />,
      color: '#7c3aed',
      steps: [
        {
          title: language === 'es' ? 'Arquitectura de Información' : 'Information Architecture',
          description: language === 'es' 
            ? 'Estructuramos la navegación y organización del contenido para una experiencia óptima.'
            : 'We structure navigation and content organization for an optimal experience.',
          duration: language === 'es' ? '3-5 días' : '3-5 days',
          icon: <FaLightbulb />
        },
        {
          title: language === 'es' ? 'Diseño UX/UI' : 'UX/UI Design',
          description: language === 'es' 
            ? 'Creamos wireframes, prototipos y diseños visuales centrados en el usuario.'
            : 'We create user-centered wireframes, prototypes and visual designs.',
          duration: language === 'es' ? '5-10 días' : '5-10 days',
          icon: <FaPalette />
        },
        {
          title: language === 'es' ? 'Revisión y Aprobación' : 'Review & Approval',
          description: language === 'es' 
            ? 'Presentamos los diseños, recopilamos feedback y realizamos ajustes necesarios.'
            : 'We present designs, collect feedback and make necessary adjustments.',
          duration: language === 'es' ? '2-4 días' : '2-4 days',
          icon: <FaCheckCircle />
        }
      ],
      deliverables: language === 'es' 
        ? ['Wireframes completos', 'Prototipos interactivos', 'Sistema de diseño', 'Guías de estilo']
        : ['Complete wireframes', 'Interactive prototypes', 'Design system', 'Style guides']
    },
    development: {
      title: language === 'es' ? 'Desarrollo' : 'Development',
      icon: <FaCode />,
      color: '#059669',
      steps: [
        {
          title: language === 'es' ? 'Configuración del Entorno' : 'Environment Setup',
          description: language === 'es' 
            ? 'Preparamos el entorno de desarrollo, repositorios y herramientas necesarias.'
            : 'We prepare the development environment, repositories and necessary tools.',
          duration: language === 'es' ? '1-2 días' : '1-2 days',
          icon: <FaCogs />
        },
        {
          title: language === 'es' ? 'Desarrollo Iterativo' : 'Iterative Development',
          description: language === 'es' 
            ? 'Codificamos en sprints, con entregas frecuentes y revisiones continuas.'
            : 'We code in sprints, with frequent deliveries and continuous reviews.',
          duration: language === 'es' ? 'Variable según proyecto' : 'Variable per project',
          icon: <FaCode />
        },
        {
          title: language === 'es' ? 'Integración y Testing' : 'Integration & Testing',
          description: language === 'es' 
            ? 'Integramos todos los módulos y realizamos pruebas exhaustivas de calidad.'
            : 'We integrate all modules and perform comprehensive quality testing.',
          duration: language === 'es' ? '5-15 días' : '5-15 days',
          icon: <FaServer />
        }
      ],
      deliverables: language === 'es' 
        ? ['Código fuente', 'APIs documentadas', 'Pruebas unitarias', 'Entornos de staging']
        : ['Source code', 'Documented APIs', 'Unit tests', 'Staging environments']
    },
    deployment: {
      title: language === 'es' ? 'Despliegue' : 'Deployment',
      icon: <FaRocket />,
      color: '#ea580c',
      steps: [
        {
          title: language === 'es' ? 'Preparación para Producción' : 'Production Preparation',
          description: language === 'es' 
            ? 'Optimizamos el rendimiento, seguridad y configuramos el entorno de producción.'
            : 'We optimize performance, security and configure the production environment.',
          duration: language === 'es' ? '2-4 días' : '2-4 days',
          icon: <FaChartLine />
        },
        {
          title: language === 'es' ? 'Lanzamiento Controlado' : 'Controlled Launch',
          description: language === 'es' 
            ? 'Desplegamos gradualmente, monitoreando cada aspecto del sistema.'
            : 'We deploy gradually, monitoring every aspect of the system.',
          duration: language === 'es' ? '1-3 días' : '1-3 days',
          icon: <FaRocket />
        },
        {
          title: language === 'es' ? 'Post-Lanzamiento' : 'Post-Launch',
          description: language === 'es' 
            ? 'Monitoreamos, optimizamos y resolvemos cualquier incidencia post-despliegue.'
            : 'We monitor, optimize and resolve any post-deployment issues.',
          duration: language === 'es' ? 'Primeros 30 días' : 'First 30 days',
          icon: <FaHandshake />
        }
      ],
      deliverables: language === 'es' 
        ? ['Sistema en producción', 'Documentación técnica', 'Guías de usuario', 'Plan de mantenimiento']
        : ['Production system', 'Technical documentation', 'User guides', 'Maintenance plan']
    }
  };

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
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const phaseCardHoverVariants = {
    initial: { y: 0 },
    hover: { 
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const stepHoverVariants = {
    initial: { y: 0 },
    hover: { 
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const timelineItemVariants = {
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

  const currentPhase = phases[activePhase];

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
        
        {/* Header */}
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
              {language === 'es' ? 'Nuestra' : 'Our'}
            </motion.span>{' '}
            {language === 'es' ? 'Metodología' : 'Methodology'}
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
              ? 'Un proceso estructurado y probado que garantiza calidad, transparencia y resultados excepcionales en cada proyecto.'
              : 'A structured and proven process that ensures quality, transparency and exceptional results in every project.'}
          </motion.p>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '150px' }}
            transition={{ delay: 0.6, duration: 1 }}
            style={{
              height: '4px',
              background: 'linear-gradient(90deg, #2563eb, #7c3aed, #059669, #ea580c)',
              margin: '40px auto',
              borderRadius: '2px'
            }}
          />
        </motion.div>

        {/* Fases del Proceso */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px',
            marginBottom: '80px'
          }}
        >
          {Object.entries(phases).map(([key, phase], index) => (
            <motion.button
              key={key}
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              variants={phaseCardHoverVariants}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePhase(key)}
              style={{
                padding: '30px 25px',
                background: activePhase === key 
                  ? `linear-gradient(135deg, ${phase.color} 0%, ${phase.color}dd 100%)`
                  : 'white',
                color: activePhase === key ? 'white' : '#475569',
                border: `2px solid ${activePhase === key ? 'transparent' : '#e2e8f0'}`,
                borderRadius: '20px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                textAlign: 'center',
                boxShadow: activePhase === key 
                  ? `0 15px 35px ${phase.color}40`
                  : '0 10px 30px rgba(0,0,0,0.08)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              {activePhase === key && (
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
                style={{
                  width: '80px',
                  height: '80px',
                  background: activePhase === key 
                    ? 'rgba(255, 255, 255, 0.2)'
                    : `${phase.color}15`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: activePhase === key ? 'white' : phase.color
                }}
                animate={activePhase === key ? {
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                } : {}}
                transition={activePhase === key ? {
                  rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                  scale: { duration: 0.5 }
                } : {}}
              >
                {phase.icon}
              </motion.div>
              
              <div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  marginBottom: '8px'
                }}>
                  {phase.title}
                </h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    fontSize: '0.95rem',
                    opacity: activePhase === key ? 0.9 : 0.7
                  }}
                >
                  {language === 'es' ? `${phase.steps.length} pasos` : `${phase.steps.length} steps`}
                </motion.div>
              </div>
              
              {activePhase === key && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    position: 'absolute',
                    bottom: '15px',
                    right: '15px'
                  }}
                >
                  <FaChevronRight />
                </motion.div>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Detalles de la Fase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'white',
              borderRadius: '28px',
              padding: '60px',
              boxShadow: '0 25px 80px rgba(0,0,0,0.12)',
              marginBottom: '80px',
              borderLeft: `8px solid ${currentPhase.color}`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background decoration */}
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
                background: `${currentPhase.color}05`,
                borderRadius: '50%'
              }}
            />
            
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '25px',
                marginBottom: '50px'
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                style={{
                  width: '90px',
                  height: '90px',
                  background: `${currentPhase.color}15`,
                  borderRadius: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  color: currentPhase.color
                }}
              >
                {currentPhase.icon}
              </motion.div>
              <div>
                <h2 style={{
                  fontSize: '2.8rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>
                  {currentPhase.title}
                </h2>
                <p style={{
                  color: '#64748b',
                  fontSize: '1.2rem'
                }}>
                  {language === 'es' 
                    ? 'Fase crítica donde establecemos las bases para el éxito del proyecto'
                    : 'Critical phase where we establish the foundations for project success'}
                </p>
              </div>
            </motion.div>

            {/* Pasos de la fase */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '35px',
                marginBottom: '60px'
              }}
            >
              {currentPhase.steps.map((step, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  whileHover="hover"
                  initial="initial"
                  variants={stepHoverVariants}
                  style={{
                    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                    padding: '35px',
                    borderRadius: '20px',
                    border: `1px solid ${currentPhase.color}30`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      position: 'absolute',
                      top: '-20px',
                      left: '30px',
                      background: currentPhase.color,
                      color: 'white',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      boxShadow: `0 5px 15px ${currentPhase.color}40`
                    }}
                  >
                    {index + 1}
                  </motion.div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    marginBottom: '20px',
                    marginTop: '15px'
                  }}>
                    <motion.div
                      style={{
                        color: currentPhase.color,
                        fontSize: '1.8rem'
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      {step.icon}
                    </motion.div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: '#1e293b',
                      margin: 0
                    }}>
                      {step.title}
                    </h3>
                  </div>
                  
                  <p style={{
                    color: '#475569',
                    lineHeight: '1.6',
                    marginBottom: '25px'
                  }}>
                    {step.description}
                  </p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: currentPhase.color,
                      fontSize: '1rem',
                      fontWeight: '600',
                      background: `${currentPhase.color}10`,
                      padding: '10px 20px',
                      borderRadius: '25px',
                      width: 'fit-content'
                    }}
                  >
                    <FaClock />
                    <span>{step.duration}</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Entregables */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 style={{
                fontSize: '1.6rem',
                fontWeight: 'bold',
                color: '#1e293b',
                marginBottom: '30px'
              }}>
                {language === 'es' ? 'Entregables de esta fase:' : 'Deliverables for this phase:'}
              </h3>
              <motion.div
                variants={containerVariants}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '20px'
                }}
              >
                {currentPhase.deliverables.map((deliverable, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{
                      background: `${currentPhase.color}10`,
                      color: currentPhase.color,
                      padding: '15px 25px',
                      borderRadius: '30px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${currentPhase.color}30`
                    }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <FaCheckCircle />
                    </motion.span>
                    <span>{deliverable}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Timeline Visual */}
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
          {/* Animated background elements */}
          <motion.div
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: '20%',
              left: '5%',
              width: '60px',
              height: '60px',
              background: 'radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%)',
              borderRadius: '50%'
            }}
          />
          
          <motion.div
            animate={{
              y: [0, 30, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            style={{
              position: 'absolute',
              bottom: '30%',
              right: '8%',
              width: '80px',
              height: '80px',
              background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
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
              {language === 'es' ? 'Flujo de Trabajo Completo' : 'Complete Workflow'}
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
                ? 'Desde la idea inicial hasta el lanzamiento y más allá, cada paso está cuidadosamente planificado'
                : 'From the initial idea to launch and beyond, every step is carefully planned'}
            </motion.p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
            position: 'relative',
            zIndex: 2
          }}>
            {/* Animated timeline line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 'calc(100% - 100px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                left: '55px',
                top: '50px',
                width: '4px',
                background: 'linear-gradient(180deg, #2563eb, #7c3aed, #059669, #ea580c)',
                borderRadius: '2px'
              }}
            />

            {Object.entries(phases).map(([key, phase], index) => (
              <motion.div
                key={key}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={timelineItemVariants}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '35px',
                  marginLeft: '90px'
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  style={{
                    width: '25px',
                    height: '25px',
                    background: phase.color,
                    borderRadius: '50%',
                    border: '5px solid #0f172a',
                    position: 'absolute',
                    left: '-60px',
                    zIndex: 3,
                    boxShadow: `0 0 20px ${phase.color}`
                  }}
                />
                
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    width: '80px',
                    height: '80px',
                    background: `${phase.color}20`,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.2rem',
                    flexShrink: 0,
                    color: phase.color,
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {phase.icon}
                </motion.div>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.6rem',
                    fontWeight: 'bold',
                    marginBottom: '15px'
                  }}>
                    {phase.title}
                  </h3>
                  <p style={{
                    color: '#cbd5e1',
                    lineHeight: '1.6'
                  }}>
                    {language === 'es' 
                      ? `${phase.steps.length} pasos estructurados que garantizan resultados óptimos`
                      : `${phase.steps.length} structured steps that ensure optimal results`}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'white',
            borderRadius: '28px',
            padding: '80px 60px',
            textAlign: 'center',
            boxShadow: '0 25px 80px rgba(0,0,0,0.12)',
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
              background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.02) 0%, rgba(124, 58, 237, 0.02) 50%, rgba(37, 99, 235, 0.02) 100%)',
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
                color: '#1e293b',
                marginBottom: '25px'
              }}
            >
              {language === 'es' 
                ? '¿Listo para comenzar tu proyecto?' 
                : 'Ready to start your project?'}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: '1.2rem',
                color: '#64748b',
                marginBottom: '50px',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
            >
              {language === 'es' 
                ? 'Nuestro proceso garantiza transparencia, comunicación constante y resultados de calidad en cada etapa.'
                : 'Our process ensures transparency, constant communication and quality results at every stage.'}
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
                    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '15px',
                    boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)'
                  }}
                >
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaRegPaperPlane />
                  </motion.span>
                  {language === 'es' ? 'Iniciar Proyecto' : 'Start Project'}
                </Link>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/servicios"
                  style={{
                    padding: '20px 50px',
                    background: 'white',
                    color: '#2563eb',
                    border: '2px solid #2563eb',
                    fontWeight: 'bold',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                  }}
                >
                  {language === 'es' ? 'Ver Servicios' : 'View Services'}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProcessPage;