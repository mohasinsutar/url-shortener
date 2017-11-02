var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  //It will serve the static file index.html from public folder
  console.log("Serving static file");
  res.sendFile('index.html');
  //res.render('index', { title: 'Express' });
});

module.exports = router;
