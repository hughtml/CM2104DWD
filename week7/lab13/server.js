//Implementing the first server, but much shorter
var express = require('express');
var app = express();

//Route 1

app.get('/', function(req, res) {
  res.send("Hello world! - by express");
});

//Route 2

app.get('/test', function(req, res) {
  res.send("This is Route 2");
});

app.listen(8080);
//Listening on port 8080
