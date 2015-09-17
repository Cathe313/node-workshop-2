var http = require('http');
var request = require('request');
var apiKey = require('./library/apikey');
var cachedCities = [];

function requestListener (req, response) {
  
  var userCity = req.url.substring(1);
  
  request('https://maps.googleapis.com/maps/api/geocode/json?address=' + userCity + "CA+&key=" + apiKey.googleApiKey, function(err, res, body) {
      console.log(err, res, body);
      if (err) {
        response.writeHead(200);
        response.end('Sorry, try again! There was an error: ' + err);
      }
      else {
          var data = JSON.parse(body);
          var firstResult = data.results[0];
          var location = data.results[0].geometry.location;
          
          if (cachedCities.indexOf(userCity) === -1) {
            response.writeHead(200);
            cachedCities.push(userCity);
            response.end('Hello, you are located at latitude ' + location.lat + ' and longitude ' + location.lng + '. You are the first to visit us from this city.');
          } 
          if (cachedCities.indexOf(userCity) >= 0) {
            response.writeHead(200);
            response.end('Hello, you are located at latitude ' + location.lat + ' and longitude ' + location.lng + '. This city has been logged before.');
          }
          else {
            response.writeHead(200);
            response.end('Sorry, there was a problem.');                         
          }
      }
  });
}

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);