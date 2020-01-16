/* eslint-disable @typescript-eslint/no-var-requires */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: {
    app: './src/js/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    // https://github.com/johnagan/clean-webpack-plugin
    new CleanWebpackPlugin(),
    // https://github.com/Realytics/fork-ts-checker-webpack-plugin
    new ForkTsCheckerWebpackPlugin(),
    // https://github.com/geowarin/friendly-errors-webpack-plugin
    new FriendlyErrorsWebpackPlugin(),
    // https://www.npmjs.com/package/webpack-notifier
    new WebpackNotifierPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
};
