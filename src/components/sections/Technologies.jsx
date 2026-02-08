// src/components/sections/Technologies.jsx - VERSIÓN CORPORATIVA PREMIUM
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Technologies = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = {
    frontend: { 
      label: language === 'es' ? 'Frontend' : 'Frontend',
      icon: '🎨',
      color: '#2563eb'
    },
    backend: { 
      label: language === 'es' ? 'Backend' : 'Backend', 
      icon: '⚙️',
      color: '#7c3aed'
    },
    databases: { 
      label: language === 'es' ? 'Bases de Datos' : 'Databases',
      icon: '🗄️',
      color: '#059669'
    },
    devops: { 
      label: language === 'es' ? 'DevOps & Cloud' : 'DevOps & Cloud',
      icon: '☁️',
      color: '#ea580c'
    },
    tools: { 
      label: language === 'es' ? 'Herramientas' : 'Tools',
      icon: '🛠️',
      color: '#dc2626'
    }
  };

  const technologies = {
    frontend: [
      { 
        name: 'React', 
        icon: '⚛️', 
        level: 96, 
        color: '#61DAFB',
        description: language === 'es' 
          ? 'Biblioteca JavaScript para interfaces de usuario'
          : 'JavaScript library for user interfaces'
      },
      { 
        name: 'Vue.js', 
        icon: '🟢', 
        level: 88, 
        color: '#42B883',
        description: language === 'es' 
          ? 'Framework progresivo para construir UIs'
          : 'Progressive framework for building UIs'
      },
      { 
        name: 'Next.js', 
        icon: '▲', 
        level: 92, 
        color: '#000000',
        description: language === 'es' 
          ? 'Framework de React con renderizado híbrido'
          : 'React framework with hybrid rendering'
      },
      { 
        name: 'TypeScript', 
        icon: '📘', 
        level: 90, 
        color: '#3178C6',
        description: language === 'es' 
          ? 'JavaScript tipado para aplicaciones escalables'
          : 'Typed JavaScript for scalable applications'
      },
      { 
        name: 'Tailwind CSS', 
        icon: '🎨', 
        level: 94, 
        color: '#06B6D4',
        description: language === 'es' 
          ? 'Framework CSS utility-first'
          : 'Utility-first CSS framework'
      },
      { 
        name: 'Vite', 
        icon: '⚡', 
        level: 95, 
        color: '#646CFF',
        description: language === 'es' 
          ? 'Build tool moderna y rápida'
          : 'Modern and fast build tool'
      },
    ],
    backend: [
      { 
        name: 'Node.js', 
        icon: '🟢', 
        level: 94, 
        color: '#339933',
        description: language === 'es' 
          ? 'Runtime JavaScript para el backend'
          : 'JavaScript runtime for backend'
      },
      { 
        name: 'Express', 
        icon: '🚂', 
        level: 92, 
        color: '#000000',
        description: language === 'es' 
          ? 'Framework web minimalista para Node.js'
          : 'Minimalist web framework for Node.js'
      },
      { 
        name: 'Python', 
        icon: '🐍', 
        level: 87, 
        color: '#3776AB',
        description: language === 'es' 
          ? 'Lenguaje versátil para backend y data science'
          : 'Versatile language for backend and data science'
      },
      { 
        name: 'Django', 
        icon: '🎸', 
        level: 82, 
        color: '#092E20',
        description: language === 'es' 
          ? 'Framework Python para desarrollo web rápido'
          : 'Python framework for rapid web development'
      },
      { 
        name: 'PHP', 
        icon: '🐘', 
        level: 80, 
        color: '#777BB4',
        description: language === 'es' 
          ? 'Lenguaje para desarrollo web del lado del servidor'
          : 'Server-side web development language'
      },
      { 
        name: 'Laravel', 
        icon: '✨', 
        level: 84, 
        color: '#FF2D20',
        description: language === 'es' 
          ? 'Framework PHP elegante y expresivo'
          : 'Elegant and expressive PHP framework'
      },
    ],
    databases: [
      { 
        name: 'MongoDB', 
        icon: '🍃', 
        level: 90, 
        color: '#47A248',
        description: language === 'es' 
          ? 'Base de datos NoSQL documental'
          : 'Document-based NoSQL database'
      },
      { 
        name: 'PostgreSQL', 
        icon: '🐘', 
        level: 87, 
        color: '#336791',
        description: language === 'es' 
          ? 'Base de datos relacional avanzada'
          : 'Advanced relational database'
      },
      { 
        name: 'MySQL', 
        icon: '🐬', 
        level: 85, 
        color: '#4479A1',
        description: language === 'es' 
          ? 'Sistema de gestión de bases de datos relacional'
          : 'Relational database management system'
      },
      { 
        name: 'Redis', 
        icon: '🔴', 
        level: 82, 
        color: '#DC382D',
        description: language === 'es' 
          ? 'Almacén de estructura de datos en memoria'
          : 'In-memory data structure store'
      },
      { 
        name: 'Firebase', 
        icon: '🔥', 
        level: 78, 
        color: '#FFCA28',
        description: language === 'es' 
          ? 'Plataforma de desarrollo de aplicaciones'
          : 'Application development platform'
      },
      { 
        name: 'Supabase', 
        icon: '🟢', 
        level: 75, 
        color: '#3ECF8E',
        description: language === 'es' 
          ? 'Backend open source alternativo a Firebase'
          : 'Open source Firebase alternative'
      },
    ],
    devops: [
      { 
        name: 'Docker', 
        icon: '🐳', 
        level: 87, 
        color: '#2496ED',
        description: language === 'es' 
          ? 'Plataforma de contenedores'
          : 'Container platform'
      },
      { 
        name: 'AWS', 
        icon: '☁️', 
        level: 80, 
        color: '#FF9900',
        description: language === 'es' 
          ? 'Servicios de computación en la nube'
          : 'Cloud computing services'
      },
      { 
        name: 'Git', 
        icon: '📚', 
        level: 96, 
        color: '#F05032',
        description: language === 'es' 
          ? 'Sistema de control de versiones'
          : 'Version control system'
      },
      { 
        name: 'Linux', 
        icon: '🐧', 
        level: 85, 
        color: '#FCC624',
        description: language === 'es' 
          ? 'Sistema operativo open source'
          : 'Open source operating system'
      },
      { 
        name: 'Nginx', 
        icon: '🟢', 
        level: 78, 
        color: '#009639',
        description: language === 'es' 
          ? 'Servidor web y proxy inverso'
          : 'Web server and reverse proxy'
      },
      { 
        name: 'CI/CD', 
        icon: '🔄', 
        level: 82, 
        color: '#2563eb',
        description: language === 'es' 
          ? 'Integración y despliegue continuos'
          : 'Continuous integration and deployment'
      },
    ],
    tools: [
      { 
        name: 'GitHub', 
        icon: '🐙', 
        level: 97, 
        color: '#181717',
        description: language === 'es' 
          ? 'Plataforma de desarrollo colaborativo'
          : 'Collaborative development platform'
      },
      { 
        name: 'VS Code', 
        icon: '💻', 
        level: 98, 
        color: '#007ACC',
        description: language === 'es' 
          ? 'Editor de código fuente'
          : 'Source code editor'
      },
      { 
        name: 'Figma', 
        icon: '🎨', 
        level: 86, 
        color: '#F24E1E',
        description: language === 'es' 
          ? 'Herramienta de diseño colaborativo'
          : 'Collaborative design tool'
      },
      { 
        name: 'Postman', 
        icon: '📬', 
        level: 92, 
        color: '#FF6C37',
        description: language === 'es' 
          ? 'Plataforma para desarrollo de APIs'
          : 'API development platform'
      },
      { 
        name: 'Jira', 
        icon: '🎫', 
        level: 77, 
        color: '#0052CC',
        description: language === 'es' 
          ? 'Gestión de proyectos y seguimiento de issues'
          : 'Project management and issue tracking'
      },
      { 
        name: 'Slack', 
        icon: '💬', 
        level: 90, 
        color: '#4A154B',
        description: language === 'es' 
          ? 'Plataforma de colaboración en equipo'
          : 'Team collaboration platform'
      },
    ]
  };

  return (
    <section 
      id="technologies" 
      className={`py-24 bg-gradient-to-b from-white to-gray-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Encabezado con efecto */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-code to-will rounded-xl flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-code to-will bg-clip-text text-transparent">
                {language === 'es' ? 'Nuestro Stack' : 'Our Stack'}
              </span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'es' 
              ? 'Tecnologías de vanguardia que dominamos para ofrecer soluciones innovadoras y de alto rendimiento'
              : 'Cutting-edge technologies we master to deliver innovative and high-performance solutions'}
          </p>
        </div>

        {/* Selector de categorías - Estilizado */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              onMouseEnter={() => setHoveredTech(null)}
              className={`group px-6 py-3 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === key
                  ? 'text-white shadow-xl transform scale-105'
                  : 'text-gray-700 hover:text-white hover:scale-105'
              }`}
              style={{
                background: activeCategory === key 
                  ? `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)`
                  : '#f8fafc',
                boxShadow: activeCategory === key 
                  ? `0 10px 30px ${category.color}40`
                  : '0 4px 20px rgba(0,0,0,0.05)'
              }}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.label}</span>
              {activeCategory === key && (
                <span className="ml-2 animate-pulse">•</span>
              )}
            </button>
          ))}
        </div>

        {/* Grid de Tecnologías - Diseño premium */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologies[activeCategory].map((tech, index) => (
            <div
              key={tech.name}
              className={`group relative bg-white rounded-2xl p-6 border-2 transition-all duration-500 hover:scale-[1.02] ${
                hoveredTech === tech.name 
                  ? 'border-code shadow-2xl' 
                  : 'border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Efecto de fondo al hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ background: tech.color }}
              />
              
              <div className="relative z-10">
                {/* Encabezado de la tecnología */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-md"
                      style={{ 
                        background: `${tech.color}15`,
                        border: `2px solid ${tech.color}30`
                      }}
                    >
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{tech.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: tech.color }}>
                      {tech.level}%
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      {language === 'es' ? 'Dominio' : 'Mastery'}
                    </div>
                  </div>
                </div>
                
                {/* Barra de progreso animada */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>{language === 'es' ? 'Nivel de experiencia' : 'Experience level'}</span>
                    <span className="font-semibold">{tech.level}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${tech.level}%`,
                        background: `linear-gradient(90deg, ${tech.color}, ${tech.color}dd)`,
                        boxShadow: `0 0 10px ${tech.color}40`
                      }}
                    />
                  </div>
                </div>

                {/* Nivel de experiencia con indicadores */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <span>{language === 'es' ? 'Básico' : 'Basic'}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <span>{language === 'es' ? 'Intermedio' : 'Intermediate'}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full" style={{ background: tech.color }}></div>
                    <span className="font-semibold" style={{ color: tech.color }}>
                      {language === 'es' ? 'Avanzado' : 'Advanced'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Indicador de hover */}
              {hoveredTech === tech.name && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-code rounded-full animate-ping"></div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Corporativas */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-code/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-will/20 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {language === 'es' ? 'Nuestras Capacidades' : 'Our Capabilities'}
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                {language === 'es' 
                  ? 'Más que tecnologías individuales, integramos soluciones completas'
                  : 'More than individual technologies, we integrate complete solutions'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2 animate-pulse">50+</div>
                <div className="text-lg font-semibold text-code">
                  {language === 'es' ? 'Tecnologías Dominadas' : 'Technologies Mastered'}
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  {language === 'es' 
                    ? 'Stack tecnológico actualizado constantemente'
                    : 'Technological stack constantly updated'}
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2 animate-pulse" style={{ animationDelay: '0.2s' }}>1000+</div>
                <div className="text-lg font-semibold text-will">
                  {language === 'es' ? 'Horas de Experiencia' : 'Hours of Experience'}
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  {language === 'es' 
                    ? 'En desarrollo y arquitectura de software'
                    : 'In software development and architecture'}
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2 animate-pulse" style={{ animationDelay: '0.4s' }}>∞</div>
                <div className="text-lg font-semibold text-green-400">
                  {language === 'es' ? 'Capacidad de Aprendizaje' : 'Learning Capacity'}
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  {language === 'es' 
                    ? 'Adaptándonos a nuevas tecnologías constantemente'
                    : 'Constantly adapting to new technologies'}
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Seleccionamos cada tecnología basándonos en su rendimiento, comunidad activa, escalabilidad y mantenibilidad a largo plazo para garantizar que tu proyecto utilice las herramientas más eficientes del mercado.'
                  : 'We select each technology based on its performance, active community, scalability and long-term maintainability to ensure your project uses the most efficient tools in the market.'}
              </p>
              
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-code/20 text-code rounded-full text-sm font-medium">
                  {language === 'es' ? 'Rendimiento óptimo' : 'Optimal performance'}
                </span>
                <span className="px-4 py-2 bg-will/20 text-will rounded-full text-sm font-medium">
                  {language === 'es' ? 'Escalabilidad' : 'Scalability'}
                </span>
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  {language === 'es' ? 'Seguridad' : 'Security'}
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                  {language === 'es' ? 'Comunidad activa' : 'Active community'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;