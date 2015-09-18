
var http = require('http');

function handleRequest(request, response){
//    setTimeout(function() {
  //      response.writeHead(200, {"Content-Type": "text/plain"});
//        response.end('Hello World');
  //  }, 10000)
    
    response.setTimeout(10000, function() {response.end('Hello World')});
};

var server = http.createServer(handleRequest);

server.listen(process.env.PORT, process.env.IP);
