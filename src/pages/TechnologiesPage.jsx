// src/pages/TechnologiesPage.jsx - PÁGINA COMPLETA DE TECNOLOGÍAS CON ANIMACIONES
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { 
  FaPaintBrush, 
  FaCogs, 
  FaDatabase, 
  FaCloud, 
  FaTools,
  FaMobileAlt,
  FaSearch,
  FaCode,
  FaStar,
  FaRocket,
  FaLightbulb,
  FaChartLine,
  FaBookOpen,
  FaChevronRight,
  FaHome,
  FaGraduationCap,
  FaBriefcase,
  FaCheckCircle
} from 'react-icons/fa';

const TechnologiesPage = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredTech, setHoveredTech] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
    controls.start('visible');
  }, [controls]);

  const categories = [
    {
      id: 'frontend',
      label: language === 'es' ? 'Frontend' : 'Frontend',
      icon: <FaPaintBrush />,
      color: '#2563eb',
      description: language === 'es' 
        ? 'Tecnologías para la interfaz de usuario y experiencia del cliente'
        : 'Technologies for user interface and customer experience'
    },
    {
      id: 'backend',
      label: language === 'es' ? 'Backend' : 'Backend',
      icon: <FaCogs />,
      color: '#7c3aed',
      description: language === 'es' 
        ? 'Sistemas de servidor, APIs y lógica de negocio'
        : 'Server systems, APIs and business logic'
    },
    {
      id: 'databases',
      label: language === 'es' ? 'Bases de Datos' : 'Databases',
      icon: <FaDatabase />,
      color: '#059669',
      description: language === 'es' 
        ? 'Almacenamiento, gestión y consulta de datos'
        : 'Data storage, management and querying'
    },
    {
      id: 'devops',
      label: language === 'es' ? 'DevOps & Cloud' : 'DevOps & Cloud',
      icon: <FaCloud />,
      color: '#ea580c',
      description: language === 'es' 
        ? 'Infraestructura, despliegue y operaciones en la nube'
        : 'Infrastructure, deployment and cloud operations'
    },
    {
      id: 'tools',
      label: language === 'es' ? 'Herramientas' : 'Tools',
      icon: <FaTools />,
      color: '#dc2626',
      description: language === 'es' 
        ? 'Software de desarrollo, colaboración y productividad'
        : 'Development, collaboration and productivity software'
    },
    {
      id: 'mobile',
      label: language === 'es' ? 'Mobile' : 'Mobile',
      icon: <FaMobileAlt />,
      color: '#8b5cf6',
      description: language === 'es' 
        ? 'Desarrollo de aplicaciones móviles'
        : 'Mobile application development'
    }
  ];

  const technologies = {
    frontend: [
      { 
        name: 'React', 
        icon: '⚛️', 
        level: 96, 
        color: '#61DAFB',
        description: language === 'es' 
          ? 'Biblioteca JavaScript para construir interfaces de usuario interactivas y reutilizables'
          : 'JavaScript library for building interactive and reusable user interfaces',
        experience: language === 'es' ? '3+ años' : '3+ years',
        projects: language === 'es' ? '15+ proyectos' : '15+ projects',
        tags: ['SPA', 'Components', 'Hooks']
      },
      { 
        name: 'Vue.js', 
        icon: '🟢', 
        level: 88, 
        color: '#42B883',
        description: language === 'es' 
          ? 'Framework progresivo para construir interfaces de usuario modernas'
          : 'Progressive framework for building modern user interfaces',
        experience: language === 'es' ? '2+ años' : '2+ years',
        projects: language === 'es' ? '8+ proyectos' : '8+ projects',
        tags: ['Progressive', 'Reactive', 'Component-Based']
      },
      { 
        name: 'Next.js', 
        icon: '▲', 
        level: 92, 
        color: '#000000',
        description: language === 'es' 
          ? 'Framework de React con renderizado híbrido para aplicaciones de alto rendimiento'
          : 'React framework with hybrid rendering for high-performance applications',
        experience: language === 'es' ? '2+ años' : '2+ years',
        projects: language === 'es' ? '10+ proyectos' : '10+ projects',
        tags: ['SSR', 'SSG', 'Performance']
      },
      { 
        name: 'TypeScript', 
        icon: '📘', 
        level: 90, 
        color: '#3178C6',
        description: language === 'es' 
          ? 'Superset de JavaScript con tipado estático para desarrollo más seguro'
          : 'JavaScript superset with static typing for safer development',
        experience: language === 'es' ? '3+ años' : '3+ years',
        projects: language === 'es' ? '20+ proyectos' : '20+ projects',
        tags: ['Typed', 'Scalable', 'Enterprise']
      },
      { 
        name: 'Tailwind CSS', 
        icon: '🎨', 
        level: 94, 
        color: '#06B6D4',
        description: language === 'es' 
          ? 'Framework CSS utility-first para diseñar interfaces rápidamente'
          : 'Utility-first CSS framework for rapid interface design',
        experience: language === 'es' ? '3+ años' : '3+ years',
        projects: language === 'es' ? '25+ proyectos' : '25+ projects',
        tags: ['Utility-First', 'Responsive', 'Customizable']
      },
      { 
        name: 'Vite', 
        icon: '⚡', 
        level: 95, 
        color: '#646CFF',
        description: language === 'es' 
          ? 'Build tool moderna que ofrece tiempos de desarrollo extremadamente rápidos'
          : 'Modern build tool offering extremely fast development times',
        experience: language === 'es' ? '2+ años' : '2+ years',
        projects: language === 'es' ? '18+ proyectos' : '18+ projects',
        tags: ['Fast', 'Modern', 'ES Modules']
      },
    ],
    backend: [
      { 
        name: 'Node.js', 
        icon: '🟢', 
        level: 94, 
        color: '#339933',
        description: language === 'es' 
          ? 'Runtime JavaScript para construir aplicaciones backend escalables'
          : 'JavaScript runtime for building scalable backend applications',
        experience: language === 'es' ? '4+ años' : '4+ years',
        projects: language === 'es' ? '20+ APIs' : '20+ APIs',
        tags: ['JavaScript', 'Scalable', 'Event-Driven']
      },
      { 
        name: 'Express', 
        icon: '🚂', 
        level: 92, 
        color: '#000000',
        description: language === 'es' 
          ? 'Framework web minimalista y flexible para Node.js'
          : 'Minimalist and flexible web framework for Node.js',
        experience: language === 'es' ? '4+ años' : '4+ years',
        projects: language === 'es' ? '15+ servidores' : '15+ servers',
        tags: ['Minimalist', 'Flexible', 'Middleware']
      },
      { 
        name: 'Python', 
        icon: '🐍', 
        level: 87, 
        color: '#3776AB',
        description: language === 'es' 
          ? 'Lenguaje versátil para backend, data science y automatización'
          : 'Versatile language for backend, data science and automation',
        experience: language === 'es' ? '3+ años' : '3+ years',
        projects: language === 'es' ? '12+ scripts/APIs' : '12+ scripts/APIs',
        tags: ['Versatile', 'Data Science', 'Automation']
      },
      { 
        name: 'Django', 
        icon: '🎸', 
        level: 82, 
        color: '#092E20',
        description: language === 'es' 
          ? 'Framework Python de alto nivel para desarrollo web rápido y limpio'
          : 'High-level Python framework for rapid and clean web development',
        experience: language === 'es' ? '2+ años' : '2+ years',
        projects: language === 'es' ? '6+ aplicaciones' : '6+ applications',
        tags: ['Batteries-Included', 'Secure', 'Scalable']
      },
      { 
        name: 'PHP', 
        icon: '🐘', 
        level: 80, 
        color: '#777BB4',
        description: language === 'es' 
          ? 'Lenguaje de scripting del lado del servidor para desarrollo web'
          : 'Server-side scripting language for web development',
        experience: language === 'es' ? '3+ años' : '3+ years',
        projects: language === 'es' ? '8+ sistemas' : '8+ systems',
        tags: ['Server-Side', 'Web', 'Mature']
      },
      { 
        name: 'Laravel', 
        icon: '✨', 
        level: 84, 
        color: '#FF2D20',
        description: language === 'es' 
          ? 'Framework PHP con sintaxis elegante y herramientas potentes'
          : 'PHP framework with elegant syntax and powerful tools',
        experience: language === 'es' ? '2+ años' : '2+ years',
        projects: language === 'es' ? '5+ aplicaciones' : '5+ applications',
        tags: ['Elegant', 'Modern', 'Full-Stack']
      },
    ],
    databases: [
      { 
        name: 'MongoDB', 
        icon: '🍃', 
        level: 90, 
        color: '#47A248',
        description: language === 'es' 
          ? 'Base de datos NoSQL documental para aplicaciones modernas'
          : 'Document-based NoSQL database for modern applications',
        experience: language === 'es' ? '3+ años' : '3+ years',
        projects: language === 'es' ? '12+ implementaciones' : '12+ implementations',
        tags: ['NoSQL', 'Document', 'Scalable']
      },
      { 
        name: 'PostgreSQL', 
        icon: '🐘', 
        level: 87, 
        color: '#336791',
        description: language === 'es' 
          ? 'Sistema de base de datos relacional avanzado y open source'
          : 'Advanced open source relational database system',
        experience: language === 'es' ? '3+ años' : '3+ years',
        projects: language === 'es' ? '10+ sistemas' : '10+ systems',
        tags: ['Relational', 'Advanced', 'Open Source']
      },
      { 
        name: 'MySQL', 
        icon: '🐬', 
        level: 85, 
        color: '#4479A1',
        description: language === 'es' 
          ? 'Sistema de gestión de bases de datos relacional popular y confiable'
          : 'Popular and reliable relational database management system',
        experience: language === 'es' ? '4+ años' : '4+ years',
        projects: language === 'es' ? '15+ proyectos' : '15+ projects',
        tags: ['Relational', 'Popular', 'Reliable']
      },
      { 
        name: 'Redis', 
        icon: '🔴', 
        level: 82, 
        color: '#DC382D',
        description: language === 'es' 
          ? 'Almacén de estructura de datos en memoria para caché y sesiones'
          : 'In-memory data structure store for caching and sessions',
        experience: language === 'es' ? '2+ años' : '2+ years',
        projects: language === 'es' ? '8+ sistemas' : '8+ systems',
        tags: ['In-Memory', 'Cache', 'Fast']
      },
      { 
        name: 'Firebase', 
        icon: '🔥', 
        level: 78, 
        color: '#FFCA28',
        description: language === 'es' 
          ? 'Plataforma de desarrollo de aplicaciones con backend como servicio'
          : 'Application development platform with backend as a service',
        experience: language === 'es' ? '2+ años' : '2+ years',
        projects: language === 'es' ? '6+ apps' : '6+ apps',
        tags: ['BaaS', 'Real-time', 'Serverless']
      },
      { 
        name: 'Supabase', 
        icon: '🟢', 
        level: 75, 
        color: '#3ECF8E',
        description: language === 'es' 
          ? 'Alternativa open source a Firebase con PostgreSQL'
          : 'Open source Firebase alternative with PostgreSQL',
        experience: language === 'es' ? '1+ año' : '1+ year',
        projects: language === 'es' ? '4+ proyectos' : '4+ projects',
        tags: ['Open Source', 'PostgreSQL', 'Modern']
      },
    ],
    devops: [
      { 
        name: 'Docker', 
        icon: '🐳', 
        level: 87, 
        color: '#2496ED',
        description: language === 'es' 
          ? 'Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores'
          : 'Platform to develop, ship and run applications in containers',
        experience: language === 'es' ? '3+ años' : '3+ years',
        projects: language === 'es' ? '18+ containerizadas' : '18+ containerized',
        tags: ['Containers', 'Portable', 'Isolated']
      },
      { 
        name: 'AWS', 
        icon: '☁️', 
        level: 80, 
        color: '#FF9900',
        description: language === 'es' 
          ? 'Plataforma de computación en la nube con servicios integrales'
          : 'Cloud computing platform with comprehensive services',
        experience: language === 'es' ? '2+ años' : '2+ years',
        projects: language === 'es' ? '10+ despliegues' : '10+ deployments',
        tags: ['Cloud', 'Comprehensive', 'Scalable']
      },
      { 
        name: 'Git', 
        icon: '📚', 
        level: 96, 
        color: '#F05032',
        description: language === 'es' 
          ? 'Sistema de control de versiones distribuido para colaboración'
          : 'Distributed version control system for collaboration',
        experience: language === 'es' ? '5+ años' : '5+ years',
        projects: language === 'es' ? '50+ repositorios' : '50+ repositories',
        tags: ['Version Control', 'Collaboration', 'Distributed']
      },
      { 
        name: 'Linux', 
        icon: '🐧', 
        level: 85, 
        color: '#FCC624',
        description: language === 'es' 
          ? 'Sistema operativo open source para servidores y desarrollo'
          : 'Open source operating system for servers and development',
        experience: language === 'es' ? '4+ años' : '4+ years',
        projects: language === 'es' ? '25+ servidores' : '25+ servers',
        tags: ['Open Source', 'Servers', 'Development']
      },
      { 
        name: 'Nginx', 
        icon: '🟢', 
        level: 78, 
        color: '#009639',
        description: language === 'es' 
          ? 'Servidor web y proxy inverso de alto rendimiento'
          : 'High performance web server and reverse proxy',
        experience: language === 'es' ? '2+ años' : '2+ years',
        projects: language === 'es' ? '12+ configuraciones' : '12+ configurations',
        tags: ['Web Server', 'Reverse Proxy', 'High Performance']
      },
      { 
        name: 'CI/CD', 
        icon: '🔄', 
        level: 82, 
        color: '#2563eb',
        description: language === 'es' 
          ? 'Prácticas de integración y despliegue continuos para DevOps'
          : 'Continuous integration and deployment practices for DevOps',
        experience: language === 'es' ? '3+ años' : '3+ years',
        projects: language === 'es' ? '15+ pipelines' : '15+ pipelines',
        tags: ['Automation', 'Continuous', 'DevOps']
      },
    ],
    tools: [
      { 
        name: 'GitHub', 
        icon: '🐙', 
        level: 97, 
        color: '#181717',
        description: language === 'es' 
          ? 'Plataforma de desarrollo colaborativo basada en Git'
          : 'Git-based collaborative development platform',
        experience: language === 'es' ? '5+ años' : '5+ years',
        projects: language === 'es' ? '45+ repositorios' : '45+ repositories',
        tags: ['Collaboration', 'Git', 'Development']
      },
      { 
        name: 'VS Code', 
        icon: '💻', 
        level: 98, 
        color: '#007ACC',
        description: language === 'es' 
          ? 'Editor de código fuente ligero pero potente'
          : 'Lightweight but powerful source code editor',
        experience: language === 'es' ? '5+ años' : '5+ years',
        projects: language === 'es' ? '60+ proyectos' : '60+ projects',
        tags: ['Editor', 'Extensions', 'Productive']
      },
      { 
        name: 'Figma', 
        icon: '🎨', 
        level: 86, 
        color: '#F24E1E',
        description: language === 'es' 
          ? 'Herramienta de diseño de interfaces colaborativa en la nube'
          : 'Collaborative cloud-based interface design tool',
        experience: language === 'es' ? '2+ años' : '2+ years',
        projects: language === 'es' ? '18+ diseños' : '18+ designs',
        tags: ['Design', 'Collaborative', 'Cloud']
      },
      { 
        name: 'Postman', 
        icon: '📬', 
        level: 92, 
        color: '#FF6C37',
        description: language === 'es' 
          ? 'Plataforma para desarrollo, testing y documentación de APIs'
          : 'Platform for API development, testing and documentation',
        experience: language === 'es' ? '3+ años' : '3+ years',
        projects: language === 'es' ? '25+ APIs' : '25+ APIs',
        tags: ['API', 'Testing', 'Documentation']
      },
      { 
        name: 'Jira', 
        icon: '🎫', 
        level: 77, 
        color: '#0052CC',
        description: language === 'es' 
          ? 'Software de gestión de proyectos y seguimiento de issues'
          : 'Project management and issue tracking software',
        experience: language === 'es' ? '2+ años' : '2+ years',
        projects: language === 'es' ? '10+ proyectos' : '10+ projects',
        tags: ['Project Management', 'Agile', 'Tracking']
      },
      { 
        name: 'Slack', 
        icon: '💬', 
        level: 90, 
        color: '#4A154B',
        description: language === 'es' 
          ? 'Plataforma de colaboración en equipo con integraciones'
          : 'Team collaboration platform with integrations',
        experience: language === 'es' ? '4+ años' : '4+ years',
        projects: language === 'es' ? '20+ equipos' : '20+ teams',
        tags: ['Collaboration', 'Communication', 'Integrations']
      },
    ],
    mobile: [
      { 
        name: 'React Native', 
        icon: '📱', 
        level: 85, 
        color: '#61DAFB',
        description: language === 'es' 
          ? 'Framework para construir aplicaciones móviles nativas con React'
          : 'Framework for building native mobile apps using React',
        experience: language === 'es' ? '2+ años' : '2+ years',
        projects: language === 'es' ? '6+ apps' : '6+ apps',
        tags: ['Cross-Platform', 'React', 'Native']
      },
      { 
        name: 'Flutter', 
        icon: '🦋', 
        level: 75, 
        color: '#02569B',
        description: language === 'es' 
          ? 'SDK de Google para aplicaciones nativas compiladas desde un solo código'
          : 'Google SDK for natively compiled applications from a single codebase',
        experience: language === 'es' ? '1+ año' : '1+ year',
        projects: language === 'es' ? '3+ apps' : '3+ apps',
        tags: ['Cross-Platform', 'Dart', 'Google']
      },
      { 
        name: 'Ionic', 
        icon: '⚡', 
        level: 70, 
        color: '#3880FF',
        description: language === 'es' 
          ? 'Framework para aplicaciones móviles híbridas con tecnologías web'
          : 'Framework for hybrid mobile apps using web technologies',
        experience: language === 'es' ? '1+ año' : '1+ year',
        projects: language === 'es' ? '2+ apps' : '2+ apps',
        tags: ['Hybrid', 'Web Tech', 'Cross-Platform']
      },
    ]
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
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    })
  };

  const statsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  // Filtrar tecnologías según búsqueda
  const filteredTechnologies = searchTerm 
    ? Object.values(technologies).flat().filter(tech => 
        tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tech.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : technologies[activeCategory];

  const currentCategory = categories.find(c => c.id === activeCategory);

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
        padding: '40px 20px',
        position: 'relative'
      }}>
        
        {/* Header de la página */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
            borderRadius: '24px',
            padding: '80px 40px',
            color: 'white',
            textAlign: 'center',
            marginBottom: '60px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Elementos decorativos animados */}
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
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%'
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <motion.div 
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '25px' }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                backdropFilter: 'blur(10px)'
              }}>
                <FaCode />
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                  fontSize: '3.8rem',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}
              >
                {language === 'es' ? 'Stack Tecnológico' : 'Technology Stack'}
              </motion.h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                fontSize: '1.3rem',
                maxWidth: '800px',
                margin: '0 auto 40px',
                opacity: '0.9',
                lineHeight: '1.6'
              }}
            >
              {language === 'es' 
                ? 'Explora las tecnologías de vanguardia que dominamos para crear soluciones innovadoras y de alto rendimiento'
                : 'Explore the cutting-edge technologies we master to create innovative and high-performance solutions'}
            </motion.p>
            
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px',
                fontSize: '0.95rem',
                opacity: '0.8'
              }}
            >
              <Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <FaHome /> {language === 'es' ? 'Inicio' : 'Home'}
              </Link>
              <motion.div
                animate={{ rotate: 90 }}
                style={{ fontSize: '0.8rem' }}
              >
                <FaChevronRight />
              </motion.div>
              <span style={{ fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <FaBookOpen /> {language === 'es' ? 'Tecnologías' : 'Technologies'}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Barra de búsqueda y filtros */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            background: 'white',
            borderRadius: '20px',
            padding: '40px',
            marginBottom: '50px',
            boxShadow: '0 15px 50px rgba(0,0,0,0.08)'
          }}
        >
          <div>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <FaSearch /> {language === 'es' ? 'Buscar Tecnología' : 'Search Technology'}
            </h2>
            
            <motion.div
              whileFocus={{ scale: 1.02 }}
              style={{ position: 'relative', marginBottom: '40px' }}
            >
              <input
                type="text"
                placeholder={language === 'es' ? 'Buscar por nombre o tecnología...' : 'Search by name or technology...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '20px 20px 20px 60px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '16px',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
              />
              <div style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '1.3rem',
                color: '#64748b'
              }}>
                <FaSearch />
              </div>
            </motion.div>

            {/* Categorías */}
            <div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#475569',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <FaCogs /> {language === 'es' ? 'Filtrar por categoría:' : 'Filter by category:'}
              </h3>
              
              <motion.div
                variants={containerVariants}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '15px'
                }}
              >
                {categories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    variants={itemVariants}
                    whileHover="hover"
                    variants={tabHoverVariants}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setSearchTerm('');
                    }}
                    style={{
                      padding: '16px 28px',
                      background: activeCategory === category.id 
                        ? `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)`
                        : '#f8fafc',
                      color: activeCategory === category.id ? 'white' : '#475569',
                      border: `2px solid ${activeCategory === category.id ? 'transparent' : '#e2e8f0'}`,
                      borderRadius: '16px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {activeCategory === category.id && (
                      <motion.div
                        layoutId="activeCategoryTab"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)`,
                          zIndex: 1
                        }}
                      />
                    )}
                    
                    <motion.div
                      style={{ 
                        fontSize: '1.3rem',
                        zIndex: 2,
                        color: activeCategory === category.id ? 'white' : category.color
                      }}
                      animate={activeCategory === category.id ? {
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      } : {}}
                      transition={activeCategory === category.id ? {
                        rotate: { duration: 0.6 },
                        scale: { duration: 0.3 }
                      } : {}}
                    >
                      {category.icon}
                    </motion.div>
                    
                    <motion.span 
                      style={{ zIndex: 2 }}
                      animate={activeCategory === category.id ? {
                        scale: [1, 1.1, 1]
                      } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {category.label}
                    </motion.span>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Información de la categoría activa */}
        {!searchTerm && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                marginBottom: '50px',
                boxShadow: '0 15px 50px rgba(0,0,0,0.08)',
                borderLeft: `8px solid ${currentCategory?.color}`
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginBottom: '20px' }}>
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  style={{
                    width: '70px',
                    height: '70px',
                    background: `${currentCategory?.color}15`,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: currentCategory?.color
                  }}
                >
                  {currentCategory?.icon}
                </motion.div>
                
                <div>
                  <h2 style={{
                    fontSize: '2.2rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '10px'
                  }}>
                    {currentCategory?.label}
                  </h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{
                      color: '#64748b',
                      fontSize: '1.1rem',
                      maxWidth: '800px'
                    }}
                  >
                    {currentCategory?.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Grid de tecnologías */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
            gap: '35px',
            marginBottom: '80px'
          }}
        >
          <AnimatePresence mode="wait">
            {filteredTechnologies.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                custom={index}
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
                variants={cardHoverVariants}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                style={{
                  background: 'white',
                  borderRadius: '24px',
                  padding: '35px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                  border: `2px solid ${hoveredTech === tech.name ? tech.color : '#f1f5f9'}`,
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                {/* Efecto de fondo al hover */}
                {hoveredTech === tech.name && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      height: '5px',
                      background: `linear-gradient(90deg, ${tech.color}, ${tech.color}dd)`
                    }}
                  />
                )}
                
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        width: '80px',
                        height: '80px',
                        background: `${tech.color}15`,
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.8rem',
                        border: `3px solid ${tech.color}30`
                      }}
                    >
                      {tech.icon}
                    </motion.div>
                    
                    <div>
                      <h3 style={{
                        fontSize: '1.7rem',
                        fontWeight: 'bold',
                        color: '#1e293b',
                        marginBottom: '8px'
                      }}>
                        {tech.name}
                      </h3>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        fontSize: '0.95rem',
                        color: '#64748b'
                      }}>
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                          <FaGraduationCap /> {tech.experience}
                        </motion.span>
                        
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                          <FaBriefcase /> {tech.projects}
                        </motion.span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ textAlign: 'right' }}>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: index * 0.1 }}
                      style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: tech.color,
                        marginBottom: '8px'
                      }}
                    >
                      {tech.level}%
                    </motion.div>
                    
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#64748b',
                      fontWeight: '600',
                      background: '#f8fafc',
                      padding: '6px 14px',
                      borderRadius: '20px'
                    }}>
                      {language === 'es' ? 'Dominio' : 'Mastery'}
                    </div>
                  </div>
                </div>
                
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
                    minHeight: '85px'
                  }}
                >
                  {tech.description}
                </motion.p>
                
                {/* Barra de progreso */}
                <div style={{ marginBottom: '30px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.95rem',
                    color: '#64748b',
                    marginBottom: '15px'
                  }}>
                    <span>{language === 'es' ? 'Nivel de experiencia' : 'Experience level'}</span>
                    <span style={{ fontWeight: '600' }}>{tech.level}%</span>
                  </div>
                  
                  <div style={{
                    height: '10px',
                    background: '#e2e8f0',
                    borderRadius: '5px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <motion.div
                      custom={tech.level}
                      variants={progressBarVariants}
                      initial="hidden"
                      animate="visible"
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${tech.color}, ${tech.color}dd)`,
                        borderRadius: '5px',
                        position: 'relative',
                        boxShadow: `0 0 20px ${tech.color}40`
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                        style={{
                          position: 'absolute',
                          right: '0',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '20px',
                          height: '20px',
                          background: 'white',
                          borderRadius: '50%',
                          border: `2px solid ${tech.color}`,
                          boxShadow: `0 0 15px ${tech.color}`
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.85rem',
                    color: '#94a3b8',
                    marginTop: '12px'
                  }}>
                    <span>{language === 'es' ? 'Básico' : 'Basic'}</span>
                    <span>{language === 'es' ? 'Intermedio' : 'Intermediate'}</span>
                    <span>{language === 'es' ? 'Avanzado' : 'Advanced'}</span>
                    <span>{language === 'es' ? 'Experto' : 'Expert'}</span>
                  </div>
                </div>
                
                {/* Tags */}
                <motion.div
                  variants={containerVariants}
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginTop: '25px',
                    paddingTop: '25px',
                    borderTop: '1px solid #f1f5f9'
                  }}
                >
                  {tech.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      custom={tagIndex}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      style={{
                        background: `${tech.color}15`,
                        color: tech.color,
                        padding: '8px 18px',
                        borderRadius: '25px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        border: `1px solid ${tech.color}30`
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats finales */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderRadius: '28px',
            padding: '80px 40px',
            color: 'white',
            textAlign: 'center',
            marginBottom: '80px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Elementos decorativos */}
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
              left: '10%',
              width: '60px',
              height: '60px',
              background: 'radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, transparent 70%)',
              borderRadius: '50%'
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
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px'
              }}
            >
              <FaChartLine /> {language === 'es' ? 'Nuestras Capacidades' : 'Our Capabilities'}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: '1.2rem',
                color: '#cbd5e1',
                marginBottom: '60px',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
            >
              {language === 'es' 
                ? 'Más que tecnologías individuales, ofrecemos soluciones integradas que combinan múltiples herramientas para resultados óptimos'
                : 'More than individual technologies, we offer integrated solutions that combine multiple tools for optimal results'}
            </motion.p>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '50px',
                marginTop: '40px'
              }}
            >
              {[
                {
                  value: '50+',
                  label: language === 'es' ? 'Tecnologías' : 'Technologies',
                  description: language === 'es' ? 'En nuestro stack activo' : 'In our active stack',
                  color: '#60a5fa',
                  icon: <FaCode />
                },
                {
                  value: '1000+',
                  label: language === 'es' ? 'Horas de Experiencia' : 'Hours of Experience',
                  description: language === 'es' ? 'En desarrollo y arquitectura' : 'In development and architecture',
                  color: '#a78bfa',
                  icon: <FaStar />
                },
                {
                  value: '100%',
                  label: language === 'es' ? 'Actualización Continua' : 'Continuous Updating',
                  description: language === 'es' ? 'Stack siempre actualizado' : 'Stack always updated',
                  color: '#34d399',
                  icon: <FaLightbulb />
                },
                {
                  value: '∞',
                  label: language === 'es' ? 'Capacidad de Aprendizaje' : 'Learning Capacity',
                  description: language === 'es' ? 'Adaptación constante' : 'Constant adaptation',
                  color: '#fbbf24',
                  icon: <FaRocket />
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={statsVariants}
                  whileHover={{ scale: 1.1, y: -10 }}
                  style={{
                    textAlign: 'center'
                  }}
                >
                  <motion.div
                    style={{
                      fontSize: '4.5rem',
                      fontWeight: 'bold',
                      color: stat.color,
                      marginBottom: '20px',
                      textShadow: `0 0 30px ${stat.color}40`,
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
                      repeatDelay: 1
                    }}
                  >
                    {stat.icon} {stat.value}
                  </motion.div>
                  
                  <div style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '10px' }}>
                    {stat.label}
                  </div>
                  
                  <div style={{ fontSize: '1rem', color: '#94a3b8' }}>
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'white',
            borderRadius: '24px',
            padding: '80px 60px',
            textAlign: 'center',
            boxShadow: '0 25px 80px rgba(0,0,0,0.12)',
            border: '1px solid #f1f5f9',
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
              top: '-100px',
              right: '-100px',
              width: '200px',
              height: '200px',
              background: 'linear-gradient(135deg, #2563eb10, #7c3aed10)',
              borderRadius: '50%'
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                width: '90px',
                height: '90px',
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.8rem',
                margin: '0 auto 40px',
                boxShadow: '0 15px 40px rgba(37, 99, 235, 0.3)',
                color: 'white'
              }}
            >
              <FaCheckCircle />
            </motion.div>
            
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
                ? '¿Necesitas una tecnología específica?' 
                : 'Need a specific technology?'}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                color: '#64748b',
                fontSize: '1.2rem',
                marginBottom: '50px',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.7'
              }}
            >
              {language === 'es' 
                ? 'Contamos con experiencia en múltiples tecnologías y podemos aprender nuevas rápidamente según las necesidades de tu proyecto. ¿No encuentras lo que buscas?'
                : 'We have experience in multiple technologies and can learn new ones quickly according to your project needs. Can\'t find what you\'re looking for?'}
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
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)'
                  }}
                >
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaCheckCircle />
                  </motion.span>
                  {language === 'es' ? 'Consultar Tecnología' : 'Consult Technology'}
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
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                  }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <FaRocket />
                  </motion.span>
                  {language === 'es' ? 'Ver Nuestros Servicios' : 'View Our Services'}
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              style={{
                color: '#94a3b8',
                fontSize: '0.95rem',
                marginTop: '40px',
                fontStyle: 'italic'
              }}
            >
              {language === 'es' 
                ? '* También podemos evaluar y aprender nuevas tecnologías según los requisitos específicos de tu proyecto'
                : '* We can also evaluate and learn new technologies based on your project\'s specific requirements'}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TechnologiesPage;