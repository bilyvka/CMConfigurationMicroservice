/**
 * Created by asoadmin on 22/03/17.
 */
var RCMConfigDB = require('../models/RCMConfig.js');

module.exports.configuration = function(req,res,next){
    console.log("received context model configuration data");
    console.log(req.body);

    //check if the model is exists, if yes update it
    RCMConfigDB.find({modelId:req.body.modelId},function(err,models){
        if(err){
            console.log(err);

        }
        else {

            var model_dimensions = [];
            for(var i=0;i<req.body.elements.length;i++){
                model_dimensions.push(req.body.elements[i].name);
            }
            if(models.length>0){
                console.log("model is exist, update the model");
                //model is exist -> update the model
                var latestModel = models[models.length-1];
                latestModel.timestamp = req.body.timestamp;
                latestModel.model_dimensions = model_dimensions;
                latestModel.elements = req.body.elements;
                latestModel.save(function(err,result){
                    if(err){
                        console.log("ERROR updating existing context model");

                    }
                })
            }
            else {
                //save a new model
                var newModel = new RCMConfigDB({elements:req.body.elements,clientId:req.body.clientId, modelId:req.body.modelId,name:req.body.name,timestamp:req.body.timestamp,model_dimensions:model_dimensions});
                newModel.save(function(err,result){
                  if(err){
                      console.log("ERROR saving new context model");
                      console.log(err);
                  }
                })

            }

        }
    });

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.send("OK");
};

module.exports.models = function(req,res,next){
    console.log(req.params);
    RCMConfigDB.find({clientId:req.params.clientId},function(err,models) {
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
    console.log(req.params);
    RCMConfigDB.find({modelId:req.params.modelId},function(err,model) {
        if (err) {
            console.log(err)

        }
        else {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.send({model:model});
        }
    });
};