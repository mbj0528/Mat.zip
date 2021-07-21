var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.query.lat)
  console.log(req.query.lon)
  res.render('map', { latitude: req.query.lat, longitude: req.query.lon });
  // get latitude, longitude from url query string
});

module.exports = router;
