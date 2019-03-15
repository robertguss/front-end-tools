module.exports = {
  linters: {
    '**/*.+(js|ts|vue)': [
      'eslint --fix',
      // 'jest --findRelatedTests',
      'git add',
    ],
    '**/*.+(md|yml|yaml|css|scss)': ['prettier --write', 'git add'],
  },
};
