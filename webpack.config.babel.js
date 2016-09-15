import path from 'path';

import webpack from 'webpack';
import merge from 'webpack-merge';

import jsonLoader from './webpack/json-loader';
import cssLoader from './webpack/css-loader';
import sassLoader from './webpack/sass-loader';
import babelLoader from './webpack/babel-loader';
import fileLoader from './webpack/file-loader';
import pugLoader from './webpack/pug-loader';

import postcss from './webpack/postcss';

import plugins from './webpack/plugins';

import devServer from './webpack/dev-server';

import alias from './webpack/utils/alias';
import chunk from './webpack/utils/chunk';

import { ENV } from './webpack/env';

let config = {
  root: path.resolve(__dirname),
  entry: {
    client: [
      './src/app'
    ],
    vendor: [
      'angular',
      'angular-ui-router',
      'angular-animate',
      'angular-resource',
      'angular-sanitize',
      'angular-touch'
    ]
  },
  output: {
    path: './build',
    publicPath: '/',
    filename: '[name].bundle.[hash].js',
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: [
      'node_modules'
    ]
  },
  devtool: ENV === 'production' ? '#source-map' : '#inline-source-map',
};

config = merge(config, devServer);

config = merge(config, jsonLoader);
config = merge(config, cssLoader);
config = merge(config, sassLoader);
config = merge(config, babelLoader);
config = merge(config, fileLoader);
config = merge(config, pugLoader);

config = merge(config, postcss);

config = merge(config, plugins);

console.log(config);

export default config;
