var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/login', function(req, res) {
  var session = req.session;
  session.UserName="zhixin"
  res.render('login');
});
module.exports = router;
