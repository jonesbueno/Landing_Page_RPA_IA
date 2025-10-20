/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5a44e9',
        accent: '#2a8dff',
      },
      boxShadow: {
        card: '0 10px 30px rgba(17, 24, 39, 0.12)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #5a44e9 0%, #2a8dff 100%)',
        'section-gradient': 'linear-gradient(180deg, rgba(122,111,255,0.06) 0%, rgba(42,141,255,0.06) 100%)',
      },
    },
  },
  plugins: [],
}
