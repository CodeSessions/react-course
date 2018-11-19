const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');

module.exports = {
  entry: `${config.paths.src}/index.js`,
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
  ]
};
