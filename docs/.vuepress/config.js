module.exports = {
  title: 'IMT Front-End Tools',
  themeConfig: {
    sidebar: [
      {
        title: 'Config',
        collapsable: true,
        children: ['/config/config.md', '/config/editor-setup.md'],
      },
      {
        title: 'Standards',
        collapsable: true,
        children: ['/standards/javascript.md', '/standards/scss.md'],
      },
      {
        title: 'Styles',
        collapsable: true,
        children: [
          'styles/BEM.md',
          'styles/itcss.md',
          'styles/postcss.md',
          'styles/sass.md',
        ],
      },
      {
        title: 'Testing',
        collapsable: true,
        children: ['/testing/unit.md', '/testing/e2e.md'],
      },
      {
        title: 'Typescript',
        collapsable: true,
        children: ['typescript/typescript.md'],
      },
      {
        title: 'Vue',
        collapsable: true,
        children: ['vue/vue.md'],
      },
    ],
  },
};
