// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'gold-dark': '#b9922c',
        charcoal: '#36454F',
        'charcoal-light': '#556570',
      },
      backgroundImage: {
        'mining-texture': "url('/path-to-your-texture.jpg')", // ✅ Replace with actual path or use inline SVG
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
