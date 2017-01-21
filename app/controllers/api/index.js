var express = require('express')
  , router = express.Router()
  , jwt    = require('jsonwebtoken') // used to create, sign, and verify tokens  
  , config = require('./../../../config')
  , Item   = require('./../../models/items'
  , AuthMid = require('./../../middleware/auth'));

// non authenticated routes
router.get('/', function(req, res) {
  res.json({ message: 'Welcome to the coolest api on earth!' });
});

// end non authenticated routes 
// authenticate middleware  
router.use(AuthMid);  
// end authenticate middleware 

// authenticated routes
router.use('/items', require('./items'))
// end authenticated routes 
module.exports = router