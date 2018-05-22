'use strict';

const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const config = {
  devtool: 'source-map',
  entry: {
    index: './src/index.tsx'
  },
  externals: [],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          configFile: './tslint.json',
          emitErrors: true,
          typeCheck: true
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          logInfoToStdOut: true,
          configFile: 'tsconfig.json',
          onlyCompileBundledFiles: true
        },
        exclude: /node_modules/
      }
    ]
  },
  output: {
    library: 'sample',
    libraryTarget: 'umd',
    filename: 'dist/distribution/javascripts/[name].bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'public/',
        to: 'dist/distribution/'
      }
    ]),
    new Visualizer({
      filename: 'dist/reports/statistics/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};

module.exports = config;
