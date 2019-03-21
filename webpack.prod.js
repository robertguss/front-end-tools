/* eslint-disable @typescript-eslint/no-var-requires */
const glob = require('glob');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const PurgecssPlugin = require('purgecss-webpack-plugin');
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'resolve-url-loader',
          'sass-loader',
          'import-glob-loader',
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // https://github.com/FullHuman/purgecss-webpack-plugin
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
  ],
});
