var http = require('http');
var currentDate = require(mymodule);
//Telling node to use the new module

http.createServer(function(req, res) {
//Creating a server
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + currentDate.myDateTime());
    //Telling node to use the myDateTime function
    res.end('Hello World!');
    //Responding with "Hello World"
}).listen(8080);
//Listening on port 8080
