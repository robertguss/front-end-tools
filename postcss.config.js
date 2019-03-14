if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: {
      autoprefixer: {},
      'postcss-clean': {
        level: 2,
      },
      'rucksack-css': {},
    },
  };
} else {
  module.exports = {
    plugins: {
      autoprefixer: {},
      'rucksack-css': {},
    },
  };
}
