// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import React from 'react';

const WhatsAppButton = () => {
    const handleClick = () => {
        window.open(`https://api.whatsapp.com/send/?phone=595982375298&text&type=phone_number&app_absent=0`, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="whatsapp-button"
            aria-label="Contactar por WhatsApp"
        >
            💬
        </button>
    );
};

function App() {
    return (
        <LanguageProvider>
            <Router>
                <div className="app-container">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/nosotros" element={<AboutPage />} />
                            <Route path="/proceso" element={<ProcessPage />} />
                            <Route path="/contacto" element={<ContactPage />} />
                            {/* Redirección para rutas antiguas */}
                            <Route path="/servicios" element={<Home />} />
                            <Route path="/tecnologias" element={<ProcessPage />} />
                        </Routes>
                    </main>
                    <Footer />
                    <WhatsAppButton />
                </div>
            </Router>
        </LanguageProvider>
    );
}

export default App;