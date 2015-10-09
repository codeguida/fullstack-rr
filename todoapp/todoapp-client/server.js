var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var HOST = 'localhost';
var PORT = 3000;

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/app/index.html'));
});

app.listen(PORT, HOST, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://' + HOST + ':' + PORT);
});
