var express = require('express');
var router = express.Router();
var contextConfController = require('../controllers/contextConfiguration.js');
var userCtrl = require('../controllers/userController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("It works")
});

/* POST create model*/
router.post('/model',contextConfController.createModel);

/* POST get context models */
router.post('/models', contextConfController.getModels);

/* GET context model by model ID and clientId*/
router.post('/configuration', contextConfController.getModel);

/* POST  update context model by model ID */
router.post('/update-model', contextConfController.updateModel);

/* POST  delete context model by model ID */
router.post('/delete-model', contextConfController.deleteModel);



/* POST create user*/
router.post('/addUser',userCtrl.addUser);

/* POST get user*/
router.post('/getUser',userCtrl.getUser);







module.exports = router;
