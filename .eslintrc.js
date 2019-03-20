// http://eslint.org/docs/user-guide/configuring
// https://github.com/wesbos/eslint-config-wesbos
// https://vuejs.github.io/eslint-plugin-vue/user-guide/#faq
module.exports = {
  'extends': [
    'airbnb-base',
    // https://github.com/vuejs/eslint-plugin-vue#bulb-rules
    'plugin:vue/recommended',
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    'prettier/standard',
    'prettier/vue',
  ],
  'parserOptions': {
    'ecmaVersion': 2019,
    'ecmaFeatures': {
      'impliedStrict': true
    },
    'parser': 'babel-eslint',
  },
  'env': {
    'browser': true,
    'node': true,
    'jest': true
  },
  'rules': {
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: [
          'component',
          'template',
          'transition',
          'transition-group',
          'keep-alive',
          'slot',
        ],
      },
    ],
  },
  'plugins': [
    'prettier',
    'vue'
  ]
}

