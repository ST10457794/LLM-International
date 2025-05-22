/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDF8E7',
          100: '#FCF1CF',
          200: '#F9E39F',
          300: '#F6D46F',
          400: '#F3C63F',
          500: '#D4AF37', // Base gold
          600: '#B9922C',
          700: '#8C6E21',
          800: '#5F4A16',
          900: '#32270B',
        },
        charcoal: {
          50: '#F5F7F8',
          100: '#EBF0F2',
          200: '#D7DFE3',
          300: '#B7C4CB',
          400: '#93A5AF',
          500: '#36454F', // Base charcoal
          600: '#2D3A42',
          700: '#242E35',
          800: '#1B2328',
          900: '#12171B',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};