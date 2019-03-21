module.exports = {
  linters: {
    'src/js/**/*.{js,ts}': ['npm run lint:eslint', 'npm run lint:prettier', 'git add'],
    'package.json': ['npm run lint:prettier', 'git add'],
    'src/js/**/*.vue': [
      'npm run lint:eslint',
      'npm run lint:stylelint',
      'npm run lint:prettier',
      'git add',
    ],
    '*.scss': ['npm run lint:stylelint', 'npm run lint:prettier', 'git add'],
    '*.md': ['npm run lint:markdownlint', 'npm run lint:prettier', 'git add'],
  },
};
