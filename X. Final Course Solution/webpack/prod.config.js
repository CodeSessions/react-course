const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const common = require('./common.config');
const config = require('./config');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(common.output.path, {
      root: config.paths.root,
    }),
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify('production') },
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
});
