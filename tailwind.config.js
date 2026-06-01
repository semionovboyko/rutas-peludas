/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0f5f3',
          100: '#d9ebe5',
          200: '#b3d6cb',
          300: '#84baa9',
          400: '#5a9b87',
          500: '#3e7f6c',
          600: '#2f6557',
          700: '#275246',
          800: '#214238',
          900: '#1c362e',
          950: '#0e1f1b',
        },
        cream: {
          50:  '#fdfcf9',
          100: '#f9f5ee',
          200: '#f2e9d8',
          300: '#e8d5b7',
          400: '#dabe8f',
          500: '#cca56b',
        },
        dark: '#1c2b25',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
