var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  // res.sendFile('./public/random.html');
  res.sendFile("random.html", {root: "public" })
});

module.exports = router;
