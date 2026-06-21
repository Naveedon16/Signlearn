/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3AED',
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        background: '#0F172A',
        foreground: '#FFFFFF',
        accent: '#7C3AED',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)',
        'gradient-alt': 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)',
      },
      backdropFilter: {
        'glass': 'backdrop-filter: blur(10px)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.8' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(function ({ addUtilities }) {
      addUtilities({
        '.glass': {
          'background': 'rgba(15, 23, 42, 0.5)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(124, 58, 237, 0.2)',
        },
        '.glass-lg': {
          'background': 'rgba(15, 23, 42, 0.7)',
          'backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(124, 58, 237, 0.3)',
        },
      })
    }),
  ],
}
