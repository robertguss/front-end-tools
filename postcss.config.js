if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      'postcss-preset-env': {},
      'rucksack-css': {},
      '@fullhuman/postcss-purgecss': {
        content: ['./**/*.html'],
      },
      'postcss-clean': {
        level: 2,
      },
    },
  };
} else {
  module.exports = {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      'postcss-preset-env': {},
      'rucksack-css': {},
    },
  };
}
