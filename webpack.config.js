const path = require('path');
const getStyleLoaders = require('./styleloaders.config.js');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

const config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    `${SRC_DIR}/index.jsx`,
  ],
  devtool: 'source-map',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/', // TODO: Remove this when properly configuring paths
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

config.module.loaders.push(getStyleLoaders('dev'));
module.exports = config;
