var express = require("express");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();

var {Product} = require('../Model/product');

module.exports = router;

router.get('/products', (req, res) => {
    Product.find().then((product) => {
        
        res.send({product});
    }, (e) => {
        res.status(400).send(e);
    });
}); 

router.post('/post', (req, res) => {
    var product = new Product(req.body);
    product.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
  });

router.get('FindByName', (req, res) => {
    Product.findOne(req.body, function(err, obj) {console.log(obj);}).then((product)=>{
        res.send({product});
    }, (e) => {
        res.status(400).send(e);
    });
});

