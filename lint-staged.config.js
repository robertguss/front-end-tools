module.exports = {
  linters: {
    '**/*.+(js|ts|css|scss|vue)': [
      'eslint --fix',
      // 'jest --findRelatedTests',
      'git add',
    ],
    '**/*.+(md|yml|yaml)': ['prettier --write', 'git add'],
  },
};
