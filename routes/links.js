// links.js


var links = require('../controllers/links.js'); //linking the controller links file
var express = require('express'); // including theexpress file in this file
var router = express.Router(); //simplifying the router



//routes

router.route('/')
  .get(links.index)
  .post(links.create);



module.exports = router;
