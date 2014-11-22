var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res) {
  res.render('users/list');
});
router.get('/add', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
