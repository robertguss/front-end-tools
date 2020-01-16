// const BrowserSyncPlugin from 'browser-sync-webpack-plugin';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.(pc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
          'resolve-url-loader',
          { loader: 'import-glob-loader' },
        ],
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  output: {
    filename: 'bundle.js',
    chunkFilename: 'vendor.bundle.js',
    path: path.resolve(__dirname, '../www/js/dist'),
  },
  plugins: [
    // https://www.npmjs.com/package/webpack-notifier
    new WebpackNotifierPlugin(),
    // https://webpack.js.org/plugins/html-webpack-plugin/
    new HtmlWebpackPlugin(),
    // https://github.com/Va1/browser-sync-webpack-plugin
    // new BrowserSyncPlugin(
    //   // BrowserSync options
    //   {
    //     host: 'localhost',
    //     open: false,
    //     port: 3000,
    //     proxy: 'https://vm6.insuremytrip.com/',
    //   },
    //   // plugin options
    //   {
    //     // prevent BrowserSync from reloading the page
    //     // and let Webpack Dev Server take care of this
    //     // reload: true,
    //   }
    // ),
  ],
});
