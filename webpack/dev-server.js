import { PORT } from './env';

const devServer = {
  devServer: {
    port: PORT,
    host: '0.0.0.0',
    colors: true,
    publicPath: '/',
    contentBase: './src',
    historyApiFallback: {
      rewrites: [
        {
          from: /^\/auth\/reset_password\/(.*)/,
          to: '/'
        }
      ],
    },
    proxy: {}
  }
};

export default devServer;
