import path from 'path';

const loaders = {
  module: {
    loaders: [{
      test: /\.(jpe?g|gif|png|svg|ttf|eot|woff2?)(\?(.*))?$/,
      loader: 'file',
      query: {
        name: '[path][name].[ext]',
        context: 'static'
      }
    }]
  }
};

export default loaders;
