import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from 'webpack-configs/browser.development';

const options = {
  publicPath: '/assets/',
  hot: true,
  host: 'localhost',
  port: GLOBALS.DEV_SERVER_PORT,
  writeToDisk: true,
};

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = Webpack(config);
const server = new WebpackDevServer(compiler, options);

export default server;
