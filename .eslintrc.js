// http://eslint.org/docs/user-guide/configuring
// https://github.com/wesbos/eslint-config-wesbos
// https://vuejs.github.io/eslint-plugin-vue/user-guide/#faq
module.exports = {
  'extends': [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser:  '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2019,
    'ecmaFeatures': {
      'impliedStrict': true
    },
    sourceType:  'module',
  },
  'env': {
    'browser': true,
    'node': true,
    'jest': true
  },
  'rules': {

  },
  'plugins': [
    'jest',
    'prettier',
    '@typescript-eslint',
  ]
}
