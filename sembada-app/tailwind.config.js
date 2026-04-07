/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0B0C10',
          surface: '#111216',
          elevated: '#1A1B21',
        },
        gold: {
          DEFAULT: '#D4AF37',
          bright: '#FDE047',
          bronze: '#B8860B',
          light: '#BF953F',
          dark: '#AA771C',
        },
        text: {
          primary: '#E2E8F0',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
        'gold-sm': '0 0 4px rgba(212, 175, 55, 0.3)',
        'gold-md': '0 0 8px rgba(212, 175, 55, 0.5), 0 0 16px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 0 16px rgba(212, 175, 55, 0.6), 0 0 32px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [],
}
