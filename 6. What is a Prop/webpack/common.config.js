const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');

module.exports = {
  entry: `${config.paths.src}/index.jsx`,
  output: {
    path: `${config.paths.dist}`,
    filename: `${config.filename}.js`,
    chunkFilename: `${config.chunkFilename}.js`
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${config.paths.src}/index.html`,
      inject: 'body'
    })
  ],
  module: {
    rules: [
      // JSX? - Files - BABEL
      {
        test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader',
        options: {
          presets: ['@babel/react']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(sa|sc)ss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
    ],
  }
};
