//Implementing the first server, but much shorter
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("Hello world! - by express");
});

app.listen(8080);
//Listening on port 8080
