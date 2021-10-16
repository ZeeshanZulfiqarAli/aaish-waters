const defaultTheme = require('tailwindcss/defaultTheme')

// tailwind.config.js
module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        'footer-gradient-shift': {
          '0%': { 'background-position':'0% 50%'},
          '50%': { 'background-position':'100% 50%'},
          '100%': { 'background-position':'0% 50%'},
        }
      },
      animation: {
        'footer-gradient-shift': 'footer-gradient-shift 30s ease infinite',
      }
    },
    // gradientColorStops: theme => ({
    //     ...theme('colors'),
    //     'p1': '#7bd7ec',
    //     'p2': '#31b8d7',
    //     'p3': '#a1eee4',
    //     'p4': '#a1d9ee',
    // })
  },
  variants: {},
  plugins: [],
}