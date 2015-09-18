var http = require('http');
var request = require('request');
var bhtApiKey = require('./library/thesaurus');
var pretty = require('./library/pretty');

function requestListener (req, response) {

  //Getting the word from the user:
  if (req.url === 'favicon.io') {
    return;
  }
  var wordUrl = req.url.substring(1).toLowerCase();
  //testing:
  //console.log(wordUrl);
  
  //Getting the JSON data from the Big Huge Thesaurus, using api key:
  request('http://words.bighugelabs.com/api/2/' + bhtApiKey.apiKey + '/' + wordUrl + '/json', 
  function(err, res, body) {
    
    //Checking for errors:
      if (err) {
        response.writeHead(200);
        response.end('Sorry, try again! There was an error:' + err);
        return;
      }

      //Checking for errors in the JSON data specifically:
      try {
        var data = JSON.parse(body);
        //Testing:
        //console.log(data);
      }
      catch(anError) {
        response.writeHead(200);
        response.end('This word has no synonym.');
        return;
      }
      //Testing for syn property:
      if (data && data.noun && data.noun.syn) {
        var synNouns = pretty.prettyOutput(data.noun.syn);
      } else {
        synNouns = '';
      }
      
      if (data && data.verb && data.verb.syn) {
        var synVerbs = pretty.prettyOutput(data.verb.syn);
      } 
      else {
        synVerbs = '';
      }
      
      if (data && data.adjective && data.adjective.syn) {
        var synAdj = pretty.prettyOutput(data.adjective.syn);
      } 
      else {
        synAdj = '';
      }
      
      response.writeHead(200);
      response.end('These nouns are synonyms:\n ' + synNouns.valueOf() + '\n\nThese verbs are synonyms: \n' 
      + synVerbs.valueOf() + '\n\nOr was your word an adjective? These adjectives are synonyms: \n' 
      + synAdj.valueOf());
      
  });
}

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);
