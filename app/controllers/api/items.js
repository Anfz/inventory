var express = require('express')
  , router = express.Router()
  , Item   = require('./../../models/items'); // get our mongoose model

//Api Setup 
router.get('/setup', function(req, res) {

  // create a sample user
  var item = new Item({ 
    code: '123', 
    description: 'Numbers'
  });

  // save the sample item
  item.save(function(err) {
    if (err) throw err;

    console.log('Item saved successfully');
    res.json({ success: true });
  });
});


// route to return all users (GET http://localhost:8080/api/users)
router.get('/', function(req, res) {
  Item.find({}, function(err, items) {
    res.json(items);
  });
});   

module.exports = router