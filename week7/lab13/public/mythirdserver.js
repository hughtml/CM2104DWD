var http = require('http');
var knockknock = require('knock-knock-jokes');
//Telling node to use the new module

http.createServer(function(req, res) {
//Creating a server
    res.writeHead(200, {'Content-Type': 'text/html'});
    var randomJoke = knockknock();
    res.end(randomJoke);
}).listen(8080);
//Listening on port 8080
