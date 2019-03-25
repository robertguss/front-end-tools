# ITCSS

is a way of organizing our SCSS in a way that is maintainable, especially as our styles begin to grow. It is a methodology/philosophy of how to organize styles by order of specificity.

## How we use ITCSS at IMT

```scss
// Variables only (no actual CSS output)
@import 'variables/*.scss';

// Tools – Mixins and functions (no actual CSS output)
@import 'tools/*.scss';

// Components
// @import 'components/*.scss';
```

## Helpful Links

- [Intro to ITCSS for Web Developers](https://www.hongkiat.com/blog/inverted-triangle-css-web-development/)

- [ITCSS: SCALABLE AND MAINTAINABLE CSS ARCHITECTURE](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)

- [How to Organize your Styles with ITCSS](https://blog.codeminer42.com/how-to-organize-your-styles-with-itcss-3787cbc6dcbf)

- [Manage large CSS projects with ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528)
