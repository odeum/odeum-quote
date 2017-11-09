var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var {Product} = require('../Model/products')

var product1 = new Product; 
product1.name = ''

var insert = (res) => {
    var product = new Product;
    product.name = 'Odeum'; 
    product.price = 454; 
    product.description = 'dsds'; 
    product.subscription = 'hourly'; 
    product.amount = 2; 
    product.save().then((doc) => {
        console.log(doc)
      res.send(doc)
    }, (e) => {
      res.status(400).send(e);
    });
  }