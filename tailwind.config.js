// tailwind.config.js - VERSIÓN CORPORATIVA
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colores corporativos de CodeByWill
      colors: {
        // Colores primarios basados en el logo
        'code': '#2563eb',      // "Code" - Azul tecnología
        'by': '#1e293b',        // "By" - Gris profesional
        'will': '#7c3aed',      // "Will" - Púrpura innovación
        
        // Paleta extendida para gradientes
        'gradient-start': '#2563eb',
        'gradient-end': '#7c3aed',
        
        // Grises corporativos
        'gray': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        
        // Azules corporativos
        'blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb', // code
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        
        // Púrpuras corporativos
        'purple': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#7c3aed', // will
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        }
      },
      
      // Gradientes personalizados
      backgroundImage: {
        'gradient-code-will': 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
        'gradient-will-code': 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        'gradient-light': 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      },
      
      // Animaciones personalizadas
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.7s ease-out',
        'slide-in-right': 'slideInRight 0.7s ease-out',
        'bounce-smooth': 'bounceSmooth 2s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'typewriter': 'typewriter 2s steps(20) 1s 1 normal both',
      },
      
      // Keyframes para animaciones
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceSmooth: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      
      // Transiciones personalizadas
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'transform': 'transform',
        'all': 'all',
      },
      
      // Sombras corporativas
      boxShadow: {
        'corporate': '0 10px 40px rgba(37, 99, 235, 0.1)',
        'corporate-lg': '0 20px 60px rgba(37, 99, 235, 0.15)',
        'corporate-xl': '0 30px 80px rgba(37, 99, 235, 0.2)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(37, 99, 235, 0.1)',
        'glow': '0 0 20px rgba(37, 99, 235, 0.3)',
      },
      
      // Bordes redondeados corporativos
      borderRadius: {
        'corporate': '16px',
        'corporate-lg': '24px',
        'corporate-xl': '32px',
      },
      
      // Tipografía
      fontFamily: {
        'sans': ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        'mono': ['SF Mono', 'Roboto Mono', 'monospace'],
      },
      
      // Espaciados personalizados
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}