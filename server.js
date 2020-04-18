// JUST A HEADS UP:
// This file does nothing because i dont have nodejs installed :(
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('*', function(req, res){
  res.sendFile(__dirname + '/views/404.html');
});

app.use(function(error, req, res, next) {
  res.sendFile(__dirname + '/views/500.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
