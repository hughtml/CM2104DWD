var express = require('express');
var app = express();
//Loading the things we need

app.set('view engine', 'ejs');
//Setting the view engine to ejs

//Using res.render to load up an ejs view file:

//app.get('/', function(req, res) {
  //res.render('pages/index');
  //Index page
//});

app.get('/', function(req, res) {
  var drinks = [
    {name: 'Bloody Mary', drunkness: 3},
    {name: 'Martini', drunkness: 5},
    {name: 'Scotch', drunkness: 10}
  ];
  var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";
  res.render('pages/index', {
    drinks: drinks,
    tagline: tagline
    //Passing the values into the template.
  });
  //Index page
});

app.get('/about', function(req, res) {
  res.render('pages/about');
  //About page
});

app.listen(8080);
//Telling the app to listen on port 8080
console.log('8080 is the magic port.');
//Displaying a message in the console
