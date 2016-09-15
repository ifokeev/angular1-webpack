const loaders = {
  resolve: {
    extensions: ['.jade', '.pug'],
  },
  module: {
    loaders: [{
      test: /\.(jade|pug)$/,
      exclude: /node_modules/,
      loader: 'pug-html'
    }]
  }
};

export default loaders;
