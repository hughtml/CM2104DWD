const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/star_wars_quotes";
const express = require('express');
const app = express();
//Creating and setting up variables prior to database connection

app.use(express.static('public'));
//Telling the server to view what's in the public folder

var db;
//Creating a variable to store the database

MongoClient.connect(url, function(error, database) {
  if (error) {
    throw error;
    //If there's an error, throw it
  }

  db = database;
  //Storing the database in the variable
  app.listen(8080);
  //Telling the app to listen to a specific port
});

app.get('/all', function(req, res) {
//Creating a route to display all the quotes in the database
  db.collection('quotes').find().toArray(function(error, result) {
  //Finding the quotes collection in the database
  //Finding all the entries and converting them to an array
    if (error) {
      throw error;
      //If there's an error, throw it
    }

    var output = "<h1>All the Quotes</h1>";
    //Setting up an output variable
    for (var i = 0; i < result.length; i++) {
      output += "<div>";
      output += "<h3>" + result[i].name + "</h3>";
      output += "<p>" + result[i].quote + "</p>";
      output += "</div>";
      //Formatting the output String
      //Each quote gets a div, the name of the person who said it in h3 tags and the quote itself in p tags
    }
    res.send(output);
    //Sending the output to be displayed
  });
});
