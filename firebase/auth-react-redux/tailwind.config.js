const defaultTheme = require('tailwindcss/defaultTheme');

const colorTheme = {
  react: { blue: '#61dafb' },
  redux: { purple: '#764abc' },
  dark: '#292929',
  pale: '#e7efff'
};

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: ['src/**/*.{js,ts,jsx,tsx}', 'public/**/*.html'],
  theme: {
    boxShadow: {
      default: '0 0 8px rgba(41, 41, 41, 0.3);'
    },
    extend: {
      borderRadius: {
        sm: '0.1875rem'
      },
      colors: colorTheme,
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        asap: ['Asap', 'sans-serif']
      },
      spacing: {
        72: '18rem',
        80: '20rem'
      }
    }
  },
  variants: {},
  plugins: []
};
