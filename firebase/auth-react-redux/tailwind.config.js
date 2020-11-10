const defaultTheme = require('tailwindcss/defaultTheme');

const colorTheme = {
  react: { blue: '#00DBFC' },
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
    colors: colorTheme,
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        asap: ['Asap', 'sans-serif']
      }
    }
  },
  variants: {},
  plugins: []
};
