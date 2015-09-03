var express = require('express');
var router = express.Router();
var fs = require('fs');
var json = fs.readFileSync('./data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.write(json);
  res.end();
});




module.exports = router;
