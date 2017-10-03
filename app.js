var express = require('express');
var app = express();
var path = require("path");

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/style/style.css', function (req, res) {
  res.sendFile(path.join(__dirname+'/style/style.css'));
});

app.get('/scripts/index.js', function (req, res) {
  res.sendFile(path.join(__dirname+'/scripts/index.js'));
});

app.listen(3000, function () {
  console.log('Example app listening on http://localhost:3000/');
});
