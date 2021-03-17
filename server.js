/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.config.js');
const dataArray = require('./data.json');

const compiler = webpack(webpackConfig);
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
  const { slide, theme = 'dark' } = req.query;
  const { alias, data } = dataArray[Number(slide) - 1] ?? dataArray[0];
  res.render('index', { title: data.title, theme, alias, data: JSON.stringify(data) });
});

app.listen(8080, () => {
  console.log('Example app listening on port 8080!\n');
});
