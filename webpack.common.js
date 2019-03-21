import CleanWebpackPlugin from "clean-webpack-plugin";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import path from "path";
import VueLoaderPlugin from "vue-loader/lib/plugin";
import WebpackNotifierPlugin from "webpack-notifier";

module.exports = {
  entry: {
    app: "./src/js/index.ts"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/"
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    // https://github.com/johnagan/clean-webpack-plugin
    new CleanWebpackPlugin(),
    // https://github.com/Realytics/fork-ts-checker-webpack-plugin
    new ForkTsCheckerWebpackPlugin(),
    // https://github.com/geowarin/friendly-errors-webpack-plugin
    new FriendlyErrorsWebpackPlugin(),
    // https://vue-loader.vuejs.org/guide/#manual-setup
    new VueLoaderPlugin(),
    // https://www.npmjs.com/package/webpack-notifier
    new WebpackNotifierPlugin()
  ],
  resolve: {
    extensions: [".ts", ".js", ".json"]
  }
};
