import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractComponentsCSS = new ExtractTextPlugin('components.[contenthash].css');

const loaders = {
  resolve: {
    extensions: ['.css'],
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: extractComponentsCSS.extract('postcss!css?sourceMap')
    }]
  }
};

export {
  extractComponentsCSS
};

export default loaders;
