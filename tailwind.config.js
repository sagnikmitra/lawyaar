/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef3ff',
          100: '#dbe5ff',
          200: '#bfd0ff',
          300: '#94b0fe',
          400: '#6485fb',
          500: '#4261f6',
          600: '#2c41eb', // Primary blue
          700: '#2434cd',
          800: '#222ea6',
          900: '#232d83',
          950: '#171b4b',
        },
        secondary: {
          50: '#fff8eb',
          100: '#ffecc6',
          200: '#ffd685',
          300: '#ffbc45',
          400: '#ffa01c',
          500: '#ff8800', // Saffron orange
          600: '#e06000',
          700: '#bc4100',
          800: '#983300',
          900: '#7c2d00',
          950: '#481500',
        },
        neutral: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
          950: '#0b0c0e',
        },
        success: {
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'hindi': ['Noto Sans Devanagari', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};