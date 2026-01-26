const Contact = () => {
  return (
    <section id="contact" style={{
      padding: '80px 20px',
      background: '#1e293b',
      color: 'white'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          ¿Listo para Empezar?
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#cbd5e1',
          fontSize: '1.1rem',
          marginBottom: '60px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Cuéntame sobre tu proyecto y te responderé en menos de 24 horas
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '50px',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Información de Contacto</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#3b82f6',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  ✉️
                </div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Email</div>
                  <div style={{ color: '#cbd5e1' }}>contacto@codebywill.com</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#8b5cf6',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  ⚡
                </div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Respuesta Rápida</div>
                  <div style={{ color: '#cbd5e1' }}>Generalmente en menos de 24 horas</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#10b981',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  🌐
                </div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Servicios</div>
                  <div style={{ color: '#cbd5e1' }}>Desarrollo • Soporte • Migración • Hosting</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px' }}>Nombre</label>
                <input 
                  type="text" 
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    background: '#334155',
                    border: '1px solid #475569',
                    color: 'white'
                  }}
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px' }}>Email</label>
                <input 
                  type="email" 
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    background: '#334155',
                    border: '1px solid #475569',
                    color: 'white'
                  }}
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px' }}>Servicio de Interés</label>
                <select style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  background: '#334155',
                  border: '1px solid #475569',
                  color: 'white'
                }}>
                  <option value="">Seleccionar servicio</option>
                  <option value="desarrollo">Desarrollo</option>
                  <option value="soporte">Soporte</option>
                  <option value="migracion">Migración</option>
                  <option value="hosting">Hosting</option>
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px' }}>Mensaje</label>
                <textarea 
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    background: '#334155',
                    border: '1px solid #475569',
                    color: 'white',
                    resize: 'vertical'
                  }}
                  placeholder="Describe tu proyecto o necesidades..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                style={{
                  background: '#3b82f6',
                  color: 'white',
                  padding: '15px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
              >
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
