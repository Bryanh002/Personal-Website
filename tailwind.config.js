/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path to match your folder structure
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },

      colors: {
        customBlue: {
          100: '#C0D7FB',  // Lightest
          200: '#3E5DD2',
          300: '#6555E7',
          400: '#647494',
          500: '#040404',  // Darkest
        },
      },

      transitionDelay: {
        400: '400ms',
        600: '600ms', // Custom delay value
        800: '800ms',
        900: '900ms',
        1000: '1000ms',
        1500: '1500ms',
      },

      transitionDuration: {
        1500: '1500ms',
        2000: '2000ms'

      }

    },
  },
  plugins: [],
}
