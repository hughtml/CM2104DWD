//Implementing the first server, but much shorter
var express = require('express');
var knockknock = require('knock-knock-jokes');
//Using the knock knock jokes module
var app = express();

app.use(express.static('public'));
//Looking in the public folder

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

//Route 4

app.get('/add', function(req, res) {
  var x = parseInt(req.query.x);
  var y = parseInt(req.query.y);
  //Accessing the values of x and y sent by the client
  res.send("x + y = " + (x + y));
  //Displaying the sum of both
});

//Route 5

app.get('/calc', function(req, res) {
  var url = require('url');
  var url_parts = url.parse(req.url, true);
  //Storing the url and then parsing the result
  var query = url_parts.query;
  var x = parseInt(query.x);
  var y = parseInt(query.y);
  //Accessing the values of x and y sent by the client
  var operation = Object.getOwnPropertyNames(query)[2];
  console.log(operation);
  //Accessing the operation sent by the client
  if (operation === "add") {
    res.send("x + y = " + (x + y));
    //Displaying the sum of both
  } else if (operation === "sub") {
    res.send("x - y = " + (x - y));
    //Displaying the subtraction of both
  } else if (operation === "mul") {
    res.send("x * y = " + (x * y));
    //Displaying the multiplication of both
  } else if (operation === "div") {
    res.send("x / y = " + (x / y));
    //Displaying the division of both
  }
});

//Route 6

app.get('/getform', function(req, res) {
  var name = req.query.name;
  var quest = req.query.quest;
  //Accessing the values of name and quest sent by the client
  res.send("Hi " + name + ", I am sure you will " + quest);
  //Displaying the sum of both
});

app.listen(8080);
//Listening on port 8080
