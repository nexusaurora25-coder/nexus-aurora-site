/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF5FE',
          100: '#DCEAFF',
          200: '#B9D6FF',
          300: '#8DBBFF',
          400: '#5C9BFA',
          500: '#3579EC',
          600: '#1E63E0',
          700: '#1750B8',
          800: '#0B2F73',
          900: '#0F1F3D',
        },
        accent: {
          DEFAULT: '#4FC3F7',
          soft: '#E7EFFA',
        },
        ink: '#0F1F3D',
        paper: '#F5F8FC',
        'paper-alt': '#E7EFFA',
        success: {
          DEFAULT: '#16A34A',
        },
        danger: {
          DEFAULT: '#C4432B',
          soft: '#FBEAE5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        brand: '0 20px 40px -22px rgba(30, 99, 224, 0.35)',
        'brand-lg': '0 30px 60px -20px rgba(11, 47, 115, 0.45)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse-slow': 'spin-reverse 6s linear infinite',
        'heartbeat': 'heartbeat 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'scan': 'scan 5s ease-in-out infinite',
        'msg-in': 'msg-in 350ms ease-out both',
        'tick-read': 'tick-read 1.6s ease-out forwards',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        'spin-reverse': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
        'heartbeat': {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.15)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.15)' },
          '56%': { transform: 'scale(1)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'msg-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'tick-read': {
          '0%, 60%': { color: 'rgb(255 255 255 / 0.6)' },
          '100%': { color: '#4FC3F7' },
        },
        'scan': {
          '0%': { top: '0%', opacity: '0' },
          '10%, 90%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
