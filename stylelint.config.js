module.exports = {
  extends: [
    // Use the Standard config as the base
    // https://github.com/stylelint/stylelint-config-standard
    'stylelint-config-standard',
    // Override rules that would interfere with Prettier
    // https://github.com/shannonmoeller/stylelint-config-prettier
    'stylelint-config-prettier',
  ],
  plugins: [
    // https://www.npmjs.com/package/stylelint-order
    'stylelint-order',
  ],
  // Rule lists:
  // - https://stylelint.io/user-guide/rules/
  rules: {
    'order/properties-alphabetical-order': true,
  },
};
