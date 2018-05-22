'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const open = require('open');
const WriteFilePlugin = require('write-file-webpack-plugin');

const config = merge(baseConfig, {
  devServer: {
    after: app => {
      open('http://localhost:8080/');
    },
    port: 8080,
    inline: true,
    disableHostCheck: true,
    clientLogLevel: 'info',
    contentBase: 'dist/distribution',
    hot: false,
    hotOnly: false,
    progress: true,
    watchOptions: {
      poll: true
    },
    watchContentBase: true,
    historyApiFallback: true
  },
  plugins: [new WriteFilePlugin()]
});

module.exports = config;
