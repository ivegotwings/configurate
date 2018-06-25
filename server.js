/* eslint no-console:0 */
require('babel-register');

const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compression = require('compression');
const webpack = require('webpack');
const config = require('./webpack.config');

const port = 8080;
const server = express();
server.use(compression());
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  server.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath
    })
  );
  server.use(webpackHotMiddleware(compiler));
}
server.use('/', express.static('./public'));

console.log(`listening on ${port}`);
server.listen(port);
