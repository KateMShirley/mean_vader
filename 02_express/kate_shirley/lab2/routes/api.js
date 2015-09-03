var express = require('express');
var router = express.Router();

var test = "<h1>API TEST</h1>"

router.get('/', function(req, res, next) {
  res.send(test);
});

router.post('/sumbit', function(req, res) {
//not yet implemented
});

router.put('/api', function (req, res) {
  //not yet implement
});



module.exports = router;
