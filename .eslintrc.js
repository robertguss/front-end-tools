// http://eslint.org/docs/user-guide/configuring
// https://github.com/wesbos/eslint-config-wesbos
module.exports = {
  "extends": [
    "airbnb-base",
    "prettier",
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2019,
    "ecmaFeatures": {
      "impliedStrict": true    }
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 80,
      }
    ],
  },
  "plugins": [
    "html",
    "prettier",
  ]
}

