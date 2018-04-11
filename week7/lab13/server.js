//Implementing the first server, but much shorter
var express = require('express');
var knockknock = require('knock-knock-jokes');
//Using the knock knock jokes module
var app = express();

//Route 1

app.get('/', function(req, res) {
  res.send("Hello world! - by express");
});

//Route 2

app.get('/test', function(req, res) {
  res.send("This is Route 2");
});

//Route 3

app.get('/joke', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var randomJoke = knockknock();
  res.end(randomJoke);
});

app.listen(8080);
//Listening on port 8080
