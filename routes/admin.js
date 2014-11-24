/**
 * Created by zhixin on 14/11/22.
 */
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res) {
    //得到Session对象
    var session = req.session;
    session.count = session.count || 0;
    var n = session.count++;
    if(session.UserName){
        res.render('index');
    }
    else {
        res.redirect("/login");

    }
});
module.exports = router;