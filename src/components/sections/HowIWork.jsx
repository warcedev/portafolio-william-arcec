const HowIWork = () => {
  const steps = [
    { number: '01', title: 'Consulta', desc: 'Analizamos necesidades y objetivos' },
    { number: '02', title: 'Propuesta', desc: 'Plan, timeline y presupuesto detallado' },
    { number: '03', title: 'Desarrollo', desc: 'Sprints con entregables regulares' },
    { number: '04', title: 'Entrega', desc: 'Testing, deployment y documentación' },
    { number: '05', title: 'Soporte', desc: 'Mantenimiento y mejoras continuas' }
  ];
  
  return (
    <section id="process" style={{
      padding: '80px 20px',
      background: '#f8fafc'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          Mi Proceso de Trabajo
        </h2>
        
        <div style={{ position: 'relative' }}>
          <div style={{
            display: 'none',
            position: 'absolute',
            left: '50px',
            right: '50px',
            top: '50%',
            height: '2px',
            background: '#e2e8f0',
            transform: 'translateY(-50%)'
          }}></div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px'
          }}>
            {steps.map((step) => (
              <div key={step.number} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#2563eb',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  margin: '0 auto 20px'
                }}>
                  {step.number}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}>
                  {step.title}
                </h3>
                <p style={{ color: '#64748b' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
