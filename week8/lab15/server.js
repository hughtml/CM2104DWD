const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/star_wars_quotes";
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//Creating and setting up variables prior to database connection

app.use(express.static('public'));
//Telling the server to view what's in the public folder
app.use(bodyParser.urlencoded({extended: true}));
//Telling the server to use the body parser

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

app.post('/quotes', function(req, res) {
//Creating a route to post the data to the database
  db.collection('quotes').save(req.body, function(error, result) {
  //Saving the new data to the database
    if (error) {
      throw error;
      //If there's an error, throw it
    }
    console.log('Saved to database');
    //If it works, giving a response in the console
    res.redirect('/');
    //Redirecting the user
  })
})

app.post('/search', function(req, res) {
//Creating a route to search through the database
  db.collection('quotes').find(req.body).toArray(function(error, result) {
  //Finding the quotes collection and converting all entires to an array
  //Using the find() function to use the request's body
    if (error) {
      throw error;
      //If there's an arror, throw it
    }

    var output = "<h1>All the quotes</h1>";
    for (var i = 0; i < result.length; i++) {
        output += "<div>";
        output += "<h3>" + result[i].name + "</h3>";
        output += "<p>" + result[i].quote + "</p>";
        output += "</div>";
        //Formatting the output String
    }
    res.send(output);
    //Displaying the output String
  });
});

app.post('/delete', function(req, res) {
//Creating a route to delete from the database
  db.collection('quotes').deleteOne(req.body, function(error, result) {
  //Deleting the quote in  the request body from the database
    if (error) {
      throw error;
      //If there's an error, throw it
    }
    res.redirect('/');
    //Redirecting the user
  });
});

app.post('/update', function(req, res) {
  var query = {quote: req.body.quote};
  //Storing the existing quote to look or
  var newvalues = {$set: {name: req.body.newname. quote: req.body.newquote}};
  //Storing the new values to update it with

  db.collection('quotes').updateOne(query, newvalues, function(error, result) {
  //Updating the existing quote in the database
    if (error) {
      throw error;
      //If there's an error, throw it
    }
    res.redirect('/');
    //Redirecting the user
  });
});
