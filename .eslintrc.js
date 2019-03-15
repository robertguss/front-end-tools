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
        "bracketSpacing": true,
        "printWidth": 80,
        "proseWrap": "always",
        "singleQuote": true,
        "trailingComma": "es5",        
      }
    ],
  },
  "plugins": [
    "html",
    "prettier",
  ]
}

