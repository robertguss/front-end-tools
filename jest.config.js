module.exports = {
  collectCoverageFrom: ['src/**/*.{js,vue}', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
  roots: ['<rootDir>/src/', '<rootDir>/tests/'],
  testMatch: ['**/(*.)spec.ts'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  verbose: true,
};
