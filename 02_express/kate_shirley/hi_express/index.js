//intro to express!
//require express library
var express = require('express');
//name space a new instance of the express framwork to "app"
var app = express();

//some data to send....
var data = {
  "dinosaurs": "are lonely",
  "why": "all their friends are dead :("
};

var html = "<h1> YAS QUEEN </h1>"

app.get('/', function (req, res){
  res.send(html);
});
//call app.get (or app.post), req = request from user
//res = response to send
app.get('/api', function(req, res){
  res.send(data);
});

app.listen(5000);
  console.log("express is up and running")
