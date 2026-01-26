const Footer = () => {
  return (
    <footer style={{
      background: '#1e293b',
      color: 'white',
      padding: '40px 20px',
      textAlign: 'center',
      marginTop: '50px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
          <span style={{ color: '#60a5fa' }}>Code</span>
          <span style={{ color: '#cbd5e1' }}>By</span>
          <span style={{ color: '#a78bfa' }}>Will</span>
        </div>
        <p>Desarrollo, soporte, migración y hosting de aplicaciones web</p>
        <p style={{ marginTop: '20px', color: '#cbd5e1' }}>
          © {new Date().getFullYear()} William Arce. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
