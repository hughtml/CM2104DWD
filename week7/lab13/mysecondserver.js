var http = require('http');

http.createServer(function(req, res) {
//Creating a server
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
    //Responding with "Hello World"
}).listen(8080);
//Listening on port 8080
