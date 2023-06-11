const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: "/node-modules"
      },
    ],
  },
  resolve: {
    extensions: [".css", ".js"]
  },
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "ISACalculator Demo",
      template: path.resolve(__dirname, './src/tpl/demo.html'),
      filename: "index.html"
    }),
    new CleanWebpackPlugin(),
  ]
}