/**
 * Created by asoadmin on 2018-05-15.
 */
var User = require('../models/User.js');
const uuidv4 = require('uuid/v4');

exports.addUser = function (req,res,next) {
  var newUser = new User({name:req.body.name,password:req.body.password,email:req.body.email,clientId:uuidv4()});
  //console.log(newUser);
  newUser.save(function (err,result) {
     res.send(result);
  });
};

exports.getUser = function (req,res,next) {
  console.log(req.body.email);
  User.findOne({email:req.body.email,password:req.body.password},function(err,user){
    res.send(user);
  })
};