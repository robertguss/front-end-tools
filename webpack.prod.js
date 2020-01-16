/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
// const PurgecssPlugin = require('purgecss-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common');

const PATHS = {
  src: path.join(__dirname, 'src'),
};

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(pc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'resolve-url-loader',
          'import-glob-loader',
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  output: {
    filename: 'bundle.js',
    chunkFilename: 'vendor.bundle.js',
    path: path.resolve(__dirname, '../www/js/dist'),
  },
  plugins: [
    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin({
      filename: '../../css/dist/bundle.css',
      chunkFilename: 'bundle.css',
    }),
    // https://github.com/FullHuman/purgecss-webpack-plugin
    // new PurgecssPlugin({
    //   paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    // }),
  ],
});
