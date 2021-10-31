const defaultTheme = require('tailwindcss/defaultTheme')

// tailwind.config.js
module.exports = {
  future: {},
  purge: {
    enabled: true,
    content: ['./src/**/*.js', './src/components/layout.css'],
    options: {
      safelist: ['opened', 'mobile-menu-background', 'gradient-animation', 'circle', 'mobile-grad', 'mid-grad', '___gatsby', 'overflow-hidden', 'mt-8'],
    }
  },
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
        },
      },
      animation: {
        'footer-gradient-shift': 'footer-gradient-shift 30s ease infinite',
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      fontWeight: ['active'],
      borderOpacity: ['active'],
    }
  },
  plugins: [],
}