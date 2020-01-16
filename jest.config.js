module.exports = {
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  moduleFileExtensions: ['js', 'json', 'ts'],
  roots: ['<rootDir>/src/', '<rootDir>/tests/'],
  testMatch: ['**/(*.)spec.ts'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  verbose: true,
};
