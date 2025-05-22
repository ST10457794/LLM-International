/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#D4AF37',
          DEFAULT: '#C5A028',
          dark: '#AA8C2C',
        },
        charcoal: {
          light: '#4A4A4A',
          DEFAULT: '#333333',
          dark: '#222222',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};