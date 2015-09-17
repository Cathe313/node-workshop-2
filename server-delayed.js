
var http = require('http');

const PORT=8080;

function handleRequest(request, response){
    response.setTimeout(10000, function() {response.end('Hello World')});
};

var server = http.createServer(handleRequest);

server.listen(process.env.PORT, process.env.IP);
