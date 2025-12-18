/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22d3ee',
        'primary-dark': '#0ea5e9',
        accent: '#7c3aed',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0, 0, 0, 0.25)',
        glow: '0 0 30px rgba(34, 211, 238, 0.25)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #22d3ee 0%, #7c3aed 100%)',
      },
    },
  },
  plugins: [],
}
