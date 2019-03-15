module.exports = {
  linters: {
    '**/*.+(js|md|ts|css|sass|less|graphql|yml|yaml|scss|vue)': [
      'eslint --fix',
      // 'jest --findRelatedTests',
      'git add',
    ],
  },
};
