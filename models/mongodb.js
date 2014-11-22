/**
 * Created by zhixin on 14/11/22.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/data');
exports.mongoose = mongoose;