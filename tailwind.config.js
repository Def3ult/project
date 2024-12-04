/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          primary: '#00ff00',
          secondary: '#1a1a1a',
          accent: '#0f0',
          dark: '#000000',
          light: '#20c20e',
          surface: '#0a0a0a',
          muted: '#1c1c1c'
        }
      },
      boxShadow: {
        'cyber': '0 0 10px #00ff00',
        'cyber-lg': '0 0 20px #00ff00',
      },
      animation: {
        'pulse-green': 'pulse-green 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-green': {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: .5,
          },
        },
      },
    },
  },
  plugins: [],
};