module.exports = {
  collectCoverageFrom: ['src/**/*.{js,vue}', '!**/node_modules/**'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  testMatch: ['**/(*.)spec.js'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },
  verbose: true,
};
