var express = require('express');
//Setting up express
var app = express();
//And setting up the app
app.use(express.static('public'));
//Telling express to look in the public folder

//Default route

app.get('/', function(req, res) {
  res.send("Hello world! by express");
  //Displaying a message
});

app.listen(8080);
//Telling the app to listen on port 8080
