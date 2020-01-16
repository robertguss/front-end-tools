if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: {
      'postcss-import': {},
      'postcss-preset-env': {},
      'rucksack-css': {},
      'postcss-clean': {
        level: 2,
      },
    },
  };
} else {
  module.exports = {
    plugins: {
      'postcss-import': {},
      'postcss-preset-env': {},
      'rucksack-css': {},
    },
  };
}
