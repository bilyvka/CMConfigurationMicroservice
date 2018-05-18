/**
 * Created by asoadmin on 11/02/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContextModelSchema = new Schema({
    clientId:String,
    timestamp:{ type : Date, default: Date.now },
    data_description:[],
    name:String,
    db_name:String,
    db_user:String,
    db_password:String

});

module.exports = mongoose.model('ContextModel', ContextModelSchema);