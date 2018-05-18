/**
 * Created by asoadmin on 2018-05-15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:String,
    password:String,
    clientId:String,
    email:String
});

module.exports = mongoose.model('User', userSchema);