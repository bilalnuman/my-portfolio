/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#0b1b3b',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgb(0 0 0 / .25)',
        glass: 'inset 0 1px 0 rgb(255 255 255 / .08), 0 8px 30px rgb(0 0 0 / .12)',
      },
    },
  },
  plugins: [],
}
