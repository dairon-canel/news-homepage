/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  purge: ['./public/index.html'],
  theme: {
    extend: {
      screens: {
        lg: '1130px',
      },
      colors: {
        softOrange: 'hsl(35, 77%, 62%)',
        softRed: 'hsl(5, 85%, 63%)',
        offWhite: 'hsl(36, 100%, 99%)',
        grayishBlue: 'hsl(233, 8%, 79%)',
        darkGrayishBlue: 'hsl(236, 13%, 42%)',
        veryDarkBlue: 'hsl(240, 100%, 5%)',
        white: 'hsl(0, 100%, 100%)',
        noColor: 'hsla(0, 0%, 0%, 0)',
      },
      fontWeight: {
        400: '400',
        700: '700',
        800: '800',
      },
    },
  },
  plugins: [],
};
