import glob from "glob";
import merge from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import PurgecssPlugin from "purgecss-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import common from "./webpack.common";

const PATHS = {
  src: path.join(__dirname, "src")
};

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "resolve-url-loader",
          "sass-loader",
          "import-glob-loader"
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    // https://github.com/FullHuman/purgecss-webpack-plugin
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
    })
  ]
});
