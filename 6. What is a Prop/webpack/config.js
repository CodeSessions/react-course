const path = require('path');

const ROOT_PATH = path.join(__dirname, '../');

module.exports = {
  paths: {
    root: ROOT_PATH,
    dist: path.join(ROOT_PATH, 'dist'),
    src: path.join(ROOT_PATH, 'src'),
  },
  filename: '[name]-[hash]',
  chunkFilename: '[name]-[chunkhash]'
}
