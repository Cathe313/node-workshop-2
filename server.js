
var http = require('http');

function handleRequest(request, response){
    response.writeHead(200);
    response.end("Hello World");
}

var server = http.createServer(handleRequest);

server.listen(process.env.PORT, process.env.IP);
