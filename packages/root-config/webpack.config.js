const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env = {}) => ({
  entry: path.resolve(__dirname, "src/index.js"),
  mode: 'development',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "sourcemap",
  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
    ],
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    disableHostCheck: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      templateParameters: {
        isLocal: env && env.isLocal === "true",
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/js/config.js"),
          to:'js'
        },
      ],
    }),
  ]
});
