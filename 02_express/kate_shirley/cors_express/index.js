var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//enable CORS
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//post request
app.post('/submit', function(req, res) {

  //hey bodyParser
  console.log('req.body');
  console.log(req.body);

  console.log('req-params');
  console.log(req.params);

  console.log('req.query');
  console.log(req.query);

  res.send(req.body);
});

app.post('/kate', function(req, res){
  res.send(req.body.name + ' is a cool person');
});

app.listen(5000);
console.log("Express is ready yo")
