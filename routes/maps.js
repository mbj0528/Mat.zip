var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('naverjade', { title: 'Map', name: 'Yonggon' });
});

module.exports = router;
