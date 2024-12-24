/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path to match your folder structure
    './public/index.html',
  ],
  theme: {
    extend: {

      boxShadow: {
        'light': '0px 6px 8px rgba(20, 7, 128, 0.2)',
        'colored': '0px 4px 6px rgba(0, 0, 0, 0.5), 0px 6px 20px rgba(0, 0, 128, 0.3)',
        'slight': '0px 6px 12px rgba(2, 7, 93, 0.2), 0px 4px 8px rgba(10, 7, 75, 0.5)', // Medium shadow
        'great': '0px 10px 20px rgba(0, 0, 128, 0.3), 0px 8px 16px rgba(0, 0, 128, 0.5)', // Large shadow
      },
      backgroundImage: {
        'button-gradient': 'radial-gradient(circle, rgba(210,0,0,1) 70%, rgba(195,0,0,1) 100%)',
        'border-gradient': 'radial-gradient(circle, rgba(54,54,54,1) 50%, rgba(30,30,30,1) 100%);',
        'banner': 'linear-gradient(135deg, #002B5C 0%, #001F3F 100%);',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },

      colors: {
        customBlue: {
          100: '#C0D7FB',  // Lightest
          200: '#3E5DD2',
          300: '#6555E7',
          400: '#647494',
          500: '#040404',  // Darkest
        },
        maroon: {
          DEFAULT: '#800000', // Base maroon
          light: '#A52A2A',   // Slightly lighter maroon
          dark: '#660000',    // Darker maroon
          brick: '#b22222',
        },
        gray2: {
          100: '#7a7a7a',
          200: '#5a5a5a',
        },
        navy: {
          DEFAULT: '#002B5C',
          dark: '#001F3F',
          deep: '#1c3b58',
        },
        gold: {
          DEFAULT: '#b08d57',
        }
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
