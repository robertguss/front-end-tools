module.exports = {
  linters: {
    '**/*.+(js|ts|css|scss|vue)': [
      'eslint --fix',
      // 'jest --findRelatedTests',
      'git add',
    ],
  },
};
