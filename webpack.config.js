let path = require('path');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const ESLintPlugin = require('eslint-webpack-plugin');

let configuration = {
  plugins: [new MiniCssExtractPlugin({filename: "style.css"})],

  watch: true,
  entry: './src/index.js',

  module: {
    rules: [
    // SCSS
    {
      test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    },
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  },

  devtool: 'source-map',
  //plugins: [new ESLintPlugin()],
};

module.exports = (env, options) => {
  const production = options.mode === 'production';

  configuration.watch = !production;

  return configuration;
};
