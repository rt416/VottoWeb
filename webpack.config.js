const path = require('path');
const getStyleLoaders = require('./styleloaders.config.js');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

const config = {
  entry: `${SRC_DIR}/index.jsx`,
  devtool: 'source-map',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

config.module.loaders.push(getStyleLoaders('dev'));
module.exports = config;
