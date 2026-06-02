/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { sans: ['Outfit', 'sans-serif'] },
      colors: {
        brand: { 400: '#38bdf8', 500: '#3b82f6', 600: '#2563eb' },
        dark:  { 900: '#0f172a', 800: '#1e293b', 700: '#334155' },
      },
    },
  },
  plugins: [],
};
