// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './pages/ContactPage';
import TechnologiesPage from './pages/TechnologiesPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import Header from './components/layout/Header';
import React from 'react';

// Mueve WhatsAppButton aquí y elimínalo del final
const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(`https://api.whatsapp.com/send/?phone=595982375298&text&type=phone_number&app_absent=0`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        background: '#25D366',
        color: 'white',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        border: 'none',
        fontSize: '30px',
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.5)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.boxShadow = '0 6px 25px rgba(37, 211, 102, 0.7)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.5)';
      }}
    >
      💬
    </button>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div style={{ minHeight: '100vh' }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/tecnologias" element={<TechnologiesPage />} />
            <Route path="/proceso" element={<ProcessPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
          </Routes>
          <WhatsAppButton />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;