module.exports = {
  '**/*.{js,ts}': ['npm run lint:eslint', 'npm run lint:prettier', 'git add'],
  '**/*.{pcss,css}': [
    'npm run lint:stylelint',
    'npm run lint:prettier',
    'git add',
  ],
};
