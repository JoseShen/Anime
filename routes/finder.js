var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  // res.sendFile('./public/random.html');
  res.sendFile("animeFinder.html", {root: "public" })
});

module.exports = router;
