const Testimonials = () => {
  const testimonials = [
    {
      name: "Cliente Satisfecho",
      role: "CEO de Startup Tech",
      text: "William transformó nuestra idea en una aplicación funcional en tiempo récord. Profesionalismo y calidad excepcionales.",
      rating: 5
    },
    {
      name: "Empresa XYZ",
      role: "Director de Tecnología",
      text: "El soporte post-lanzamiento ha sido invaluable. Resolución rápida de problemas y mejoras continuas.",
      rating: 5
    },
    {
      name: "Freelancer Colaborador",
      role: "Diseñador UX/UI",
      text: "Trabajar con William es sencillo. Comunica claramente, cumple plazos y entrega código de alta calidad.",
      rating: 5
    }
  ];
  
  return (
    <section style={{
      padding: '80px 20px',
      background: 'white'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          Lo Que Dicen Mis Clientes
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#64748b',
          fontSize: '1.1rem',
          marginBottom: '60px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Feedback de colaboraciones exitosas
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{
              background: '#f8fafc',
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                {'★'.repeat(testimonial.rating)}
              </div>
              <p style={{
                fontStyle: 'italic',
                color: '#475569',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                "{testimonial.text}"
              </p>
              <div>
                <div style={{
                  fontWeight: 'bold',
                  color: '#1e293b'
                }}>
                  {testimonial.name}
                </div>
                <div style={{
                  color: '#64748b',
                  fontSize: '0.9rem'
                }}>
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
