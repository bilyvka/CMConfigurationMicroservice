/**
 * Created by asoadmin on 11/02/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rcmConfigSchema = new Schema({
    clientId:String,
    modelId:String,
    timestamp:{ type : Date, default: Date.now },
    model_dimensions:[],
    name:String,
    elements:[]

});

module.exports = mongoose.model('RCMConfig', rcmConfigSchema);