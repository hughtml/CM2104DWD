var express = require('express');
//Setting up express
var app = express();
//And setting up the app
var Twitter = require('twitter');
//Importing the Twitter module

var client = new Twitter({
  consumer_key: 'zRXeWUS9KpYktPvSAipW1jLbb',
  consumer_secret: 'Tn7sakGVCtfSDtodmYH7QrIuuES74O8og35rxdaERvpha0817T',
  access_token_key: '354524237-NUrzzHnyadmAC70KM8HnXUOXxowAd54JUHT5cNnS',
  access_token_secret: 'lgx0mNh4uICekIN9egMqNHgbeWGR1hyJ3GK8JK0QoDJWR'
});
//Filling in details for the client object so Twitter will work

app.use(express.static('public'));
//Telling express to look in the public folder

//Default route

app.get('/', function(req, res) {
  var params = {screen_name: 'nodejs'};
  //Setting the parameters i.e. the screen name to search for
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
  //Telling the module what part of Twitter we want to search i.e. timeline
    if (!error) {
    //The process can result in an error so checking if one occurs
      var output = "";
      //Creating an output String
      for (var i = 0; i < tweets.length; i++) {
        output += "<div>";
        //For each tweet a div is created
        output += "<h2>" + tweets[i].user.screen_name + "</h2>";
        //For each tweet, the user's screen name is put in a h2 tag
        output += "<p>" + tweets[i].text + "</p>";
        //Putting the text of each tweet into a paragraph
        output += "</div>";
        //Closing the div of each tweet
      }
      res.send(output);
      //If no error then sending the formatted output String
    }
  })

  //res.send("Hello world! by express");
  //Displaying a message
});

//Searching by username

app.get('/searchname', function(req, res) {
  var params = {screen_name: req.query.screenname};
  //Accessing the values for screen name sent by the client
  //Storing it as params for the search
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
  //Telling the module what part of Twitter we want to search i.e. timeline
    if (!error) {
    //The process can result in an error so checking if one occurs
      var output = "";
      //Creating an output String
      for (var i = 0; i < tweets.length; i++) {
        output += "<div>";
        //For each tweet a div is created
        output += "<h2>" + tweets[i].user.screen_name + "</h2>";
        //For each tweet, the user's screen name is put in a h2 tag
        output += "<p>" + tweets[i].text + "</p>";
        //Putting the text of each tweet into a paragraph
        output += "</div>";
        //Closing the div of each tweet
      }
      res.send(output);
      //If no error then sending the formatted output String
    }
  })
});

//Searching by tern

app.get('/searchterm', function(req, res) {
  var params = {q: req.query.searchterm, count: 100};
  //Accessing the values for search term sent by the client
  //Storing it as params for the search
  client.get('search/tweets', params, function(error, tweets, response) {
  //Telling the module what part of Twitter we want to search i.e. filter
    if (!error) {
    //The process can result in an error so checking if one occurs
      var tweettext = tweets.statuses;
      //Storing the text of each tweet
      var output = "";
      //Creating an output String
      for (var i = 0; i < tweettext.length; i++) {
        output += "<div>";
        //For each tweet a div is created
        output += "<h2>" + tweettext[i].user.screen_name + "</h2>";
        //For each tweet, the user's screen name is put in a h2 tag
        output += "<p>" + tweettext[i].text + "</p>";
        //Putting the text of each tweet into a paragraph
        output += "</div>";
        //Closing the div of each tweet
      }
      res.send(output);
      //If no error then sending the formatted output String
    }
  })
});

app.listen(8080);
//Telling the app to listen on port 8080
