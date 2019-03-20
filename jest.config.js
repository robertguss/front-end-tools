module.exports = {
  collectCoverageFrom: ['src/**/*.{js,vue}', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  moduleFileExtensions: ['js', 'json', 'vue'],
  roots: ['<rootDir>/src/', '<rootDir>/tests/'],
  testMatch: ['**/(*.)spec.js'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },
  verbose: true,
};
