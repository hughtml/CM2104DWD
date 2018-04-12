var express = require('express');
//Setting up express
var app = express();
//And setting up the app
var Twitter = require('twitter');
//Importing the Twitter module

var client = new Twitter({
  consumer_key: zRXeWUS9KpYktPvSAipW1jLbb,
  consumer_secret: Tn7sakGVCtfSDtodmYH7QrIuuES74O8og35rxdaERvpha0817T,
  access_token_key: 354524237-NUrzzHnyadmAC70KM8HnXUOXxowAd54JUHT5cNnS,
  access_token_secret: lgx0mNh4uICekIN9egMqNHgbeWGR1hyJ3GK8JK0QoDJWR
});
//Filling in details for the client object so Twitter will work

app.use(express.static('public'));
//Telling express to look in the public folder

//Default route

app.get('/', function(req, res) {
  res.send("Hello world! by express");
  //Displaying a message
});

app.listen(8080);
//Telling the app to listen on port 8080
