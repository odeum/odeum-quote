var express = require("express");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();

var {Product} = require('../Model/products')

module.exports = router;

router.get('/products', (req, res) => {
    Product.find().then((product) => {
        res.send({ product });
    }, (e) => {
        res.status(400).send(e);
    })
}); 

router.post('/post', (req, res) => {
    //console.log(req.body)
    var product = new Product(req.body);
    product.save().then((doc) => {
      res.send(doc)
    }, (e) => {
      res.status(400).send(e);
    });
  });
