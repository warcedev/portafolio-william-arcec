import ParticlesBackground from "./components/ParticlesBackground";
import { Linkedin, Mail, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="app-container">
      <ParticlesBackground />

      <main className="main-content">
        {/* ===== HERO ===== */}
        <section className="hero-section">
          <h1 className="hero-title">William Arce</h1>
          <h2 className="hero-subtitle">
            Desarrollador Full Stack · DevOps
          </h2>

          <p className="hero-description">
            Apasionado por la <strong>tecnología</strong>, la <strong>automatización</strong> y la creación de 
            soluciones escalables. Experiencia sólida en <strong>Laravel, React, Next.js, Docker</strong> y 
            administración de <strong>servidores Linux</strong>.  
            Especialista en <strong>procesos automatizados (Crons)</strong>, <strong>DevOps</strong> y 
            <strong> gestión de proyectos</strong> con <strong>Jira, Redmine y Scriptcase</strong>.
          </p>

          <div className="button-group">
            <a
              href="https://github.com/warcedev"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Ver proyectos
            </a>

            <a
              href="/CV_William_Arce.pdf"
              target="_blank"
              className="button button-secondary"
            >
              Descargar CV
            </a>
          </div>
        </section>

        {/* ===== TECNOLOGÍAS ===== */}
        <section className="tech-section">
          <h3 className="section-title">
            Tecnologías y Herramientas
          </h3>

          <div className="tech-grid">
            {/* Lenguajes */}
            <div className="tech-category">
              <h4>Lenguajes</h4>
              <div className="tech-tags">
                {["PHP", "JavaScript", "TypeScript", "Java", "C++"].map((tech) => (
                  <span key={tech} className="skill-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="tech-category">
              <h4>Frameworks</h4>
              <div className="tech-tags">
                {["Laravel", "React", "Next.js", "Ionic", "Slim Framework"].map((tech) => (
                  <span key={tech} className="skill-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="tech-category">
              <h4>DevOps / Infraestructura</h4>
              <div className="tech-tags">
                {["Docker", "Linux", "Ubuntu", "Fedora", "Crons"].map((tech) => (
                  <span key={tech} className="skill-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Bases de datos */}
            <div className="tech-category">
              <h4>Bases de Datos</h4>
              <div className="tech-tags">
                {["IBM DB2", "Oracle", "MySQL", "SQLite"].map((tech) => (
                  <span key={tech} className="skill-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== CURSOS REALIZADOS ===== */}
        <section className="courses-section">
          <h3 className="section-title">
            Cursos Realizados
          </h3>

          <div className="courses-grid">
            {[
              "Basic Git and Github - Essentials",
              "Command Line Essentials: Git Bash for Windows",
              "Consulting Approach to Problem Solving",
              "DB2 For Beginners",
              "Introduction to Git for GitLab projects",
              "Microsoft 365 Fundamentals | Microsoft 365 Essentials",
              "Microsoft Copilot",
              "OWASP API Security TOP 10: A comprehensive guide",
              "PHP Microframeworks with Slim",
              "Practical Linux Command Line 2.0",
              "Security Awareness Training 2025 CyberSecurity Best Practice",
              "Six Sigma: Certified Lean Six Sigma White Belt (Accredited)",
            ].map((curso) => (
              <div key={curso} className="course-card">
                <h4>{curso}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CONTACTO ===== */}
        <section className="contact-section">
          <h3 className="section-title">Conectemos</h3>
          <p className="contact-text">¿Tienes un proyecto en mente o una propuesta profesional? Estoy disponible para colaborar.</p>

          <div className="contact-icons">
            <a
              href="https://www.linkedin.com/in/willarce/"
              target="_blank"
              className="icon-link"
            >
              <Linkedin size={36} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:william.arcedev@gmail.com"
              className="icon-link"
            >
              <Mail size={36} />
              <span>Correo</span>
            </a>
            <a
              href="/CV_William_Arce.pdf"
              target="_blank"
              className="icon-link"
            >
              <FileText size={36} />
              <span>CV</span>
            </a>
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} William Arce — Desarrollador Full Stack | DevOps
        </footer>
      </main>
    </div>
  );
}