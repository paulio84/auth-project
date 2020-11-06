module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: ['src/**/*.{js,ts,jsx,tsx}', 'public/**/*.html'],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
};
