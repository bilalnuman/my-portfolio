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
        ink: {
          950: '#070B14',
          900: '#0B1220',
          800: '#111A2E',
          700: '#1B2740',
        },
        paper: {
          50: '#FBFAF7',
          100: '#F5F3EF',
          200: '#EBE8E1',
        },
        iris: {
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
        },
        aqua: {
          400: '#22D3EE',
          500: '#06B6D4',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgb(2 6 23 / .18)',
        lift: '0 24px 60px -20px rgb(79 70 229 / .35)',
        glass: 'inset 0 1px 0 rgb(255 255 255 / .08), 0 8px 30px rgb(0 0 0 / .12)',
      },
      backgroundImage: {
        'accent-grad': 'linear-gradient(120deg, #6366F1 0%, #22D3EE 100%)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-pan': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
