const ProjectsShowcase = () => {
  const projects = [
    {
      title: 'E-commerce React',
      desc: 'Tienda online completa con carrito y checkout',
      tech: ['React', 'Node.js', 'MongoDB'],
      status: 'Completado'
    },
    {
      title: 'Dashboard Analytics',
      desc: 'Panel administrativo con gráficos en tiempo real',
      tech: ['Vue.js', 'Express', 'PostgreSQL'],
      status: 'En desarrollo'
    },
    {
      title: 'App de Gestión',
      desc: 'Aplicación móvil para gestión de proyectos',
      tech: ['React Native', 'Firebase'],
      status: 'Completado'
    }
  ];
  
  return (
    <section id="projects" style={{
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
          Proyectos Destacados
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
          Algunos de los trabajos recientes
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              background: '#f8fafc',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                height: '200px',
                background: index === 0 ? '#3b82f6' : 
                          index === 1 ? '#8b5cf6' : '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                {project.title.split(' ')[0]}
              </div>
              <div style={{ padding: '25px' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: '#64748b',
                  marginBottom: '20px',
                  lineHeight: '1.5'
                }}>
                  {project.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {project.tech.map((tech, i) => (
                    <span key={i} style={{
                      background: '#e0f2fe',
                      color: '#0369a1',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      fontSize: '0.9rem'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    background: project.status === 'Completado' ? '#dcfce7' : '#fef3c7',
                    color: project.status === 'Completado' ? '#166534' : '#92400e',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontSize: '0.9rem'
                  }}>
                    {project.status}
                  </span>
                  <button style={{
                    background: 'transparent',
                    border: '1px solid #3b82f6',
                    color: '#3b82f6',
                    padding: '8px 20px',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}>
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
