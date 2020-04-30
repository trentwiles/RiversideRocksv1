var express = require("express");
var app = express();
const targetBaseUrl = "/error/404";
const ipfilter = require('express-ipfilter').IpFilter

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

function handleRedirect(req, res) {
  const targetUrl = targetBaseUrl + req.originalUrl;
  res.redirect(targetUrl);
}

const ips = ['73.238.171.94'];


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.get("/blog", function(request, response) {
  response.sendFile(__dirname + "/blog/index.html");
});

app.get("/blog/a-trip-around-the-internet", function(request, response) {
  response.sendFile(__dirname + "/blog/a-trip-around-the-internet/index.html");
});

app.get("/blog/behind-the-mask", function(request, response) {
  response.sendFile(__dirname + "/blog/behind-the-mask/index.html");
});

app.get("/blog/glitch-troubleshooting", function(request, response) {
  response.sendFile(__dirname + "/blog/glitch-troubleshooting/index.html");
});

app.get("/blog/recent-update", function(request, response) {
  response.sendFile(__dirname + "/blog/recent-update/index.html");
});

app.get("/blog/recent-update", function(request, response) {
  response.sendFile(__dirname + "/blog/recent-update/index.html");
});

app.get("/blog/recent-update", function(request, response) {
  response.sendFile(__dirname + "/blog/social-distancing/index.html");
});

app.get("/blog/recent-update", function(request, response) {
  response.sendFile(__dirname + "/blog/trick-friends/index.html");
});

app.get("/connect", function(request, response) {
  response.sendFile(__dirname + "/connect/index.html");
});

app.get("/custom-post", function(request, response) {
  response.sendFile(__dirname + "/custom-post/index.html");
});

app.get("/license", function(request, response) {
  response.sendFile(__dirname + "/license/index.html");
});

app.get("/views", function(request, response) {
  response.sendFile(__dirname + "/views/404.html");
});

app.get("/request-error", function(request, response) {
  response.sendFile(__dirname + "/views/404.html");
});

app.get("/error/500", function(request, response) {
  response.sendFile(__dirname + "/views/500.html");
});

app.get("/chat", function(request, response) {
  response.sendFile(__dirname + "/chat.html");
});

app.get("/tucker", function(request, response) {
  response.sendFile(__dirname + "/tucker.html");
});

app.get("/note-35", function(request, response) {
  response.redirect("https://leancoding.co/2LOYBS");
});

app.get("*", function(req, res) {
  res.redirect("/request-error?code=404");
});

app.use(function(error, req, res, next) {
  res.redirect("/error/500");
});

app.use(ipfilter(ips));

if (app.get('env') === 'development') {
  app.use((err, req, res, _next) => {
    console.log('Error handler', err)
    if (err instanceof IpDeniedError) {
      res.status(401)
    } else {
      res.status(err.status || 500)
    }
 
    res.render('error', {
      message: 'You shall not pass',
      error: err
    })
  })
}

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});