// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const merge = require('webpack-merge');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    clientLogLevel: 'none',
    contentBase: path.join(__dirname, 'dist'),
    // hot: true,
    // https: true,
    inline: false,
    port: 9000,
    watchContentBase: true,
    watchOptions: {
      poll: true,
    },
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          { loader: 'import-glob-loader' },
        ],
      },
    ],
  },
  plugins: [
    // https://www.npmjs.com/package/webpack-notifier
    new WebpackNotifierPlugin(),
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
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
});
