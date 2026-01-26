// src/components/sections/ServicesOverview.jsx
import { services } from '../../data/services';

const ServicesOverview = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Servicios Especializados
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Soluciones completas para cada etapa de tu proyecto digital
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <a 
              key={service.id}
              href={`#service-${service.slug}`}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.technologies?.slice(0, 3).map(tech => (
                  <span key={tech} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/servicios" // Podrías crear página detallada de servicios
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
          >
            Ver todos los detalles de cada servicio
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};