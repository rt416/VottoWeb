const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

const config = {
  entry: `${SRC_DIR}/index.js`,

  devtool: 'source-map',

  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel',
      },
    ],
  },
};

module.exports = config;
