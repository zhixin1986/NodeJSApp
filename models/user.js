/**
 * Created by zhixin on 14/11/22.
 */
var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var MovieSchema = new Schema({
    name : String,
    loginName:String,
    password:String
});
var user = mongodb.mongoose.model("user", MovieSchema);
var UserDAO = function(){};
module.exports = new UserDAO();