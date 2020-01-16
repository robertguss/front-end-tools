// http://eslint.org/docs/user-guide/configuring
// https://github.com/wesbos/eslint-config-wesbos
module.exports = {
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {},
  plugins: ['jest', 'prettier'],
};
