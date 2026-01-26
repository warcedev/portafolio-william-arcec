// src/components/sections/Hero.jsx
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-blue-600">Code</span>
          <span className="text-gray-800">By</span>
          <span className="text-purple-600">Will</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Soluciones técnicas para hacer crecer tu negocio digital
        </p>
        
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Desarrollo, soporte, migración y hosting de aplicaciones web.
          Convierto tus ideas en realidades digitales robustas y escalables.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#services" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Ver Servicios
          </a>
          <a 
            href="#contact" 
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition"
          >
            Consultar Proyecto
          </a>
          <a 
            href="/cv/CV_William_Arce.pdf"
            download
            className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition"
          >
            Descargar CV
          </a>
        </div>
        
        {/* Stats rápidos */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="text-gray-600">Proyectos Completados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">100%</div>
            <div className="text-gray-600">Clientes Satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">24/7</div>
            <div className="text-gray-600">Soporte Disponible</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">5+</div>
            <div className="text-gray-600">Años de Experiencia</div>
          </div>
        </div>
      </div>
    </section>
  );
};