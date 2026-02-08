// src/pages/ContactPage.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaMapMarkerAlt, FaGithub, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa';

const ContactPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const contactInfo = {
    email: 'william.arcedev@gmail.com',
    phone: '+595982375298',
    whatsapp: '+595982375298',
    linkedin: 'https://www.linkedin.com/in/willarce/',
    github: 'https://github.com/warcedev',
    address: language === 'es' ? 'Luque, Paraguay' : 'Luque, Paraguay'
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handleCallClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`, '_blank');
  };

  const handleLinkedInClick = () => {
    window.open(contactInfo.linkedin, '_blank');
  };

  const handleGithubClick = () => {
    window.open(contactInfo.github, '_blank');
  };

  // Animaciones
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
    hidden: { y: 20, opacity: 0 },
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
    initial: { y: 0 },
    hover: { 
      y: -10,
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
      scale: 1.1,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonHoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const formInputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.1)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        paddingTop: '80px'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <motion.h1
            style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: '200% auto' }}
          >
            {t.contactame}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontSize: '1.25rem',
              color: '#64748b',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            {t.contactoDesc}
          </motion.p>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              height: '4px',
              background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
              margin: '30px auto',
              borderRadius: '2px'
            }}
          />
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            justifyContent: 'center'
          }}
        >
          {/* Contact Info Card */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            initial="initial"
            variants={cardHoverVariants}
            style={{
              background: 'white',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              width: '100%',
              maxWidth: '500px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background decoration */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'linear-gradient(45deg, transparent 30%, rgba(37, 99, 235, 0.05) 50%, transparent 70%)',
              }}
            />
            
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '40px',
              position: 'relative'
            }}>
              {t.informacionContacto}
            </h2>

            {/* Email */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '25px',
                padding: '20px',
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(37, 99, 235, 0.02) 100%)',
                borderRadius: '15px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onClick={handleEmailClick}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                variants={iconHoverVariants}
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}
              >
                <FaEnvelope />
              </motion.div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#475569', marginBottom: '5px', fontSize: '0.9rem', fontWeight: '600' }}>
                  {t.email}
                </h3>
                <p style={{ color: '#2563eb', fontWeight: '600', fontSize: '1.1rem' }}>
                  {contactInfo.email}
                </p>
              </div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                style={{
                  color: '#2563eb',
                  fontSize: '1.2rem'
                }}
              >
                →
              </motion.div>
            </motion.div>

            {/* Teléfono */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '25px',
                padding: '20px',
                background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.05) 0%, rgba(5, 150, 105, 0.02) 100%)',
                borderRadius: '15px',
                cursor: 'pointer',
                position: 'relative'
              }}
              onClick={handleCallClick}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                variants={iconHoverVariants}
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}
              >
                <FaPhone />
              </motion.div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#475569', marginBottom: '5px', fontSize: '0.9rem', fontWeight: '600' }}>
                  {t.telefono}
                </h3>
                <p style={{ color: '#059669', fontWeight: '600', fontSize: '1.1rem' }}>
                  {contactInfo.phone}
                </p>
              </div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                style={{
                  color: '#059669',
                  fontSize: '1.2rem'
                }}
              >
                →
              </motion.div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '25px',
                padding: '20px',
                background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.05) 0%, rgba(37, 211, 102, 0.02) 100%)',
                borderRadius: '15px',
                cursor: 'pointer',
                position: 'relative'
              }}
              onClick={handleWhatsAppClick}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                variants={iconHoverVariants}
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}
              >
                <FaWhatsapp />
              </motion.div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#475569', marginBottom: '5px', fontSize: '0.9rem', fontWeight: '600' }}>
                  {t.whatsapp}
                </h3>
                <p style={{ color: '#25D366', fontWeight: '600', fontSize: '1.1rem' }}>
                  {contactInfo.whatsapp}
                </p>
              </div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                style={{
                  color: '#25D366',
                  fontSize: '1.2rem'
                }}
              >
                →
              </motion.div>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '25px',
                padding: '20px',
                background: 'linear-gradient(135deg, rgba(0, 119, 181, 0.05) 0%, rgba(0, 119, 181, 0.02) 100%)',
                borderRadius: '15px',
                cursor: 'pointer',
                position: 'relative'
              }}
              onClick={handleLinkedInClick}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                variants={iconHoverVariants}
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #0077B5 0%, #0A66C2 100%)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}
              >
                <FaLinkedin />
              </motion.div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#475569', marginBottom: '5px', fontSize: '0.9rem', fontWeight: '600' }}>
                  {t.linkedin}
                </h3>
                <p style={{ color: '#0077B5', fontWeight: '600', fontSize: '1.1rem' }}>
                  {t.verPerfil}
                </p>
              </div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                style={{
                  color: '#0077B5',
                  fontSize: '1.2rem'
                }}
              >
                →
              </motion.div>
            </motion.div>

            {/* GitHub */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '25px',
                padding: '20px',
                background: 'linear-gradient(135deg, rgba(24, 24, 27, 0.05) 0%, rgba(24, 24, 27, 0.02) 100%)',
                borderRadius: '15px',
                cursor: 'pointer',
                position: 'relative'
              }}
              onClick={handleGithubClick}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                variants={iconHoverVariants}
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #18181b 0%, #3f3f46 100%)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}
              >
                <FaGithub />
              </motion.div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#475569', marginBottom: '5px', fontSize: '0.9rem', fontWeight: '600' }}>
                  GitHub
                </h3>
                <p style={{ color: '#18181b', fontWeight: '600', fontSize: '1.1rem' }}>
                  warcedev
                </p>
              </div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                style={{
                  color: '#18181b',
                  fontSize: '1.2rem'
                }}
              >
                →
              </motion.div>
            </motion.div>

            {/* Dirección */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '20px',
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0.02) 100%)',
                borderRadius: '15px'
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}
              >
                <FaMapMarkerAlt />
              </motion.div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#475569', marginBottom: '5px', fontSize: '0.9rem', fontWeight: '600' }}>
                  {t.ubicacion}
                </h3>
                <p style={{ color: '#7c3aed', fontWeight: '600', fontSize: '1.1rem' }}>
                  {contactInfo.address}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            initial="initial"
            variants={cardHoverVariants}
            style={{
              background: 'white',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              width: '100%',
              maxWidth: '500px',
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
                background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.02) 0%, rgba(124, 58, 237, 0.02) 50%, rgba(37, 99, 235, 0.02) 100%)',
                backgroundSize: '200% 200%',
                zIndex: 0
              }}
            />
            
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '40px',
              position: 'relative'
            }}>
              {t.enviarMensaje}
            </h2>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '25px', position: 'relative' }}>
              <motion.div whileFocus="focus" variants={formInputVariants}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#475569',
                  marginBottom: '8px',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}>
                  <FaUser style={{ color: '#2563eb' }} />
                  {t.nombre}
                </label>
                <motion.input
                  type="text"
                  whileFocus={{ 
                    borderColor: '#2563eb',
                    boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)'
                  }}
                  style={{
                    width: '100%',
                    padding: '15px 20px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    background: 'white'
                  }}
                  placeholder={t.tuNombre}
                />
              </motion.div>
              
              <motion.div whileFocus="focus" variants={formInputVariants}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#475569',
                  marginBottom: '8px',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}>
                  <FaEnvelope style={{ color: '#2563eb' }} />
                  {t.email}
                </label>
                <motion.input
                  type="email"
                  whileFocus={{ 
                    borderColor: '#2563eb',
                    boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)'
                  }}
                  style={{
                    width: '100%',
                    padding: '15px 20px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    background: 'white'
                  }}
                  placeholder={t.tuEmail}
                />
              </motion.div>
              
              <motion.div whileFocus="focus" variants={formInputVariants}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#475569',
                  marginBottom: '8px',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}>
                  <FaComment style={{ color: '#2563eb' }} />
                  {t.mensaje}
                </label>
                <motion.textarea
                  rows="5"
                  whileFocus={{ 
                    borderColor: '#2563eb',
                    boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)'
                  }}
                  style={{
                    width: '100%',
                    padding: '15px 20px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    resize: 'vertical',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    background: 'white',
                    minHeight: '150px'
                  }}
                  placeholder={t.mensajePlaceholder}
                />
              </motion.div>
              
              <motion.button
                type="button"
                onClick={handleEmailClick}
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '18px 30px',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <FaPaperPlane />
                </motion.span>
                {t.enviarMensajeBtn}
                <motion.div
                  initial={{ x: '-100%', y: '-100%' }}
                  whileHover={{ x: '100%', y: '100%' }}
                  transition={{ duration: 0.6 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
                  }}
                />
              </motion.button>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  color: '#64748b',
                  fontSize: '0.9rem',
                  textAlign: 'center',
                  marginTop: '10px',
                  position: 'relative'
                }}
              >
                {t.enviarDesc}
              </motion.p>
            </form>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
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
            top: '30%',
            left: '5%',
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #2563eb, rgba(37, 99, 235, 0.2))',
            borderRadius: '50%',
            opacity: 0.3
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
            top: '60%',
            right: '5%',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #7c3aed, rgba(124, 58, 237, 0.2))',
            borderRadius: '50%',
            opacity: 0.2
          }}
        />
      </div>
    </motion.div>
  );
};

export default ContactPage;