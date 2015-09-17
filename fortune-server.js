
var http = require('http');
var fortune = require('./library/fortune');

const PORT=8080;

function handleRequest(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(fortune.getFortune());
};

var server = http.createServer(handleRequest);

server.listen(process.env.PORT, process.env.IP);
