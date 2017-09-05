const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const isDev = process.env.NODE_ENV !== 'production';

console.log(isDev);

module.exports = {
  entry: {
    app: './src/app.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './index.html'
    }),
    new ExtractTextPlugin({
      filename: 'styles/[name].css',
      allChunks: true,
      disable: isDev
    }),
    new CleanWebpackPlugin(['dist']),
    new FriendlyErrorsWebpackPlugin()
  ],
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
