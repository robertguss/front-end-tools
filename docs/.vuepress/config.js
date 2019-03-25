module.exports = {
  title: 'IMT Front-End Tools',
  themeConfig: {
    sidebar: [
      {
        title: 'Standards',
        collapsable: true,
        children: [
          '/standards/airbnb.md',
          '/standards/eslint.md',
          '/standards/prettier.md'
        ]
      },
      {
        title: 'Styles',
        collapsable: true,
        children: [
          'styles/BEM.md',
          'styles/itcss.md',
          'styles/postcss.md',
          'styles/sass.md'
        ]
      },
      {
        title: 'Testing',
        collapsable: true,
        children: [
          '/testing/unit.md',
          '/testing/e2e.md',
          '/testing/vue-components.md'
        ]
      },
      {
        title: 'Typescript',
        collapsable: true,
        children: [
          'typescript/typescript.md'
        ]
      },
      {
        title: 'Vue',
        collapsable: true,
        children: [
          'vue/vue.md'
        ]
      }
    ]
  }
}
