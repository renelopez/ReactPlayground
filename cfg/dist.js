'use strict';

let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

let pkg=require('../package.json');

// Add needed plugins here
//let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: [path.join(__dirname, '../src/index'),
    'bootstrap-loader',
    './node_modules/bootstrap-material-design/dist/sassc/bootstrap-material-design.css',
    './node_modules/bootstrap-material-design/dist/sassc/ripples.css',
    './node_modules/bootstrap-material-design/dist/js/material.js',
    './node_modules/bootstrap-material-design/dist/js/ripples.js'],
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
   /* new BowerWebpackPlugin({
      searchResolveModulesDirectories: false,
      excludes: /.*\.less/
    }),*/
    new webpack.ProvidePlugin({
      $:      "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: defaultSettings.getDefaultModules(),
  sassResources: [ './src/styles/mixins.scss']
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
