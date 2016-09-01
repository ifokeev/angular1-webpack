import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractComponentsCSS = new ExtractTextPlugin('components.[contenthash].css');

const loaders = {
  resolve: {
    extensions: ['.css'],
  },
  module: {
    loaders: [{
      test: /\.css$/,
      exclude: /node_modules/,
      loader: extractComponentsCSS.extract('postcss!css')
    }]
  }
};

export {
  extractComponentsCSS
};
export default loaders;
