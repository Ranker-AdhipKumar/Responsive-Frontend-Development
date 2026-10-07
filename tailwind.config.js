/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#121212',
          black: '#0D0D0D',
          surface: '#1A1A1A',
          lime: '#D2F800',
          limeHover: '#BCE200',
          coral: '#FF4A22',
          sand: '#F7F5EE',
          sandLight: '#FCFBF8',
          sandDark: '#EFECE2',
          border: '#E2DDCF',
          muted: '#707070',
          darkMuted: '#9E9E9E',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
      }
    },
  },
  plugins: [],
}
