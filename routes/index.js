var express = require('express');
var router = express.Router();
var contextConfController = require('../controllers/contextConfiguration.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("It works")
});

/* POST request of configuration data */
router.post('/configuration', contextConfController.configuration);

/* GET context models */
router.get('/models/:clientId', contextConfController.models);

/* GET context model by model ID */
router.get('/models/:modelId', contextConfController.getModel);

module.exports = router;
