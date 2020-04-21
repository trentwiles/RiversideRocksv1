// JUST A HEADS UP:
// This file does nothing because i dont have nodejs installed :(
// It gives some weird errors so it wont be happening for now.





var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.get('/blog', function(request, response) {
  response.sendFile(__dirname + '/blog/index.html');
});

app.get('/blog/a-trip-around-the-internet', function(request, response) {
  response.sendFile(__dirname + '/blog/a-trip-around-the-internet/index.html');
});

app.get('/blog/behind-the-mask', function(request, response) {
  response.sendFile(__dirname + '/blog/behind-the-mask/index.html');
});

app.get('/blog/glitch-troubleshooting', function(request, response) {
  response.sendFile(__dirname + '/blog/glitch-troubleshooting/index.html');
});

app.get('/blog/recent-update', function(request, response) {
  response.sendFile(__dirname + '/blog/recent-update/index.html');
});

app.get('/blog/recent-update', function(request, response) {
  response.sendFile(__dirname + '/blog/recent-update/index.html');
});

app.get('/blog/recent-update', function(request, response) {
  response.sendFile(__dirname + '/blog/social-distancing/index.html');
});

app.get('/blog/recent-update', function(request, response) {
  response.sendFile(__dirname + '/blog/trick-friends/index.html');
});

app.get('/connect', function(request, response) {
  response.sendFile(__dirname + '/connect/index.html');
});

app.get('/custom-post', function(request, response) {
  response.sendFile(__dirname + '/custom-post/index.html');
});

app.get('/license', function(request, response) {
  response.sendFile(__dirname + '/license/index.html');
});

app.get('/views', function(request, response) {
  response.sendFile(__dirname + '/views/404.html');
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
