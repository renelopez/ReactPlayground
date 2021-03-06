'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
//let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    './src/index',
    'bootstrap-loader',
    './node_modules/bootstrap-material-design/dist/sassc/bootstrap-material-design.css',
    './node_modules/bootstrap-material-design/dist/sassc/ripples.css',
    './node_modules/bootstrap-material-design/dist/js/material.js',
    './node_modules/bootstrap-material-design/dist/js/ripples.js'

  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
   /* new BowerWebpackPlugin({
      modulesDirectories: ['bower_components'],
      manifestFiles:      'bower.json',
      includes:           /.*!/,
      excludes: /.*\.less/,
      searchResolveModulesDirectories: false
    }),*/
    new webpack.ProvidePlugin({
      $:      "jquery",
      jQuery: "jquery"
    })
  ],
  module: defaultSettings.getDefaultModules(),

  // Or array of paths
  sassResources: [ './src/styles/mixins.scss']
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot!babel-loader',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
