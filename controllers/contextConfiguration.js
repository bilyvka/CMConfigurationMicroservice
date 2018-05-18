/**
 * Created by asoadmin on 22/03/17.
 */
var ContextModel = require('../models/contextModel.js');
var ObjectId = require('mongoose').Types.ObjectId;
var request = require('request');

module.exports.models = function(req,res,next){
    console.log(req.params);
    ContextModel.find({clientId:req.params.clientId},function(err,models) {
        if (err) {
            console.log(err)

        }
        else {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.send({models:models})
        }
    });
};

module.exports.getModel = function(req,res,next){

    var clientId = req.body.data.clientId;
    var modelId = req.body.data.modelId;
    ContextModel.findOne({_id:modelId,clientId:clientId},function(err,model) {
        if (err) {
            console.log(err);
            res.send({configuration:[],error:err});
        }
        else {

            res.send({configuration:model});
        }
    });
};

module.exports.getModels = function (req,res,next) {

    ContextModel.find({clientId:req.body.clientId},function(err,models){
        res.send(models);
    })
};


module.exports.createModel = function (req,res,next) {
    var newModel = new ContextModel({clientId:req.body.clientId,name:req.body.name,data_description:[],db_name:req.body.db_name,db_user:req.body.db_user,db_password:req.body.db_password});
    newModel.save(function (err,result) {
        res.send(result);
    })
};

module.exports.updateModel = function (req,res,next) {

    ContextModel.findOne({_id:new ObjectId(req.body._id.toString())},function(err,model){
        model.data_description = req.body.data_description;
        console.log(model);
        model.save(function(err,result){
            res.send(result);
        });
    })
};

module.exports.deleteModel = function (req,res,next) {
    ContextModel.findOne({_id:new ObjectId(req.body.modelId.toString())},function(err,model){
        model.remove(function (err,result) {
            res.send({result:"OK"});
        });
    });
};