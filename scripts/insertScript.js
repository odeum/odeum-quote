var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var {Product} = require('../Model/product')
var { mongoose } = require('../MongoDb/connection');



var insert = (res) => {
    var product = new Product;
    product.name = 'Odeum'; 
    product.price = 454; 
    product.description = 'dsds'; 
    product.subscription = 'hourly'; 
    product.amount = 2; 
    product.save().then((doc) => {
      console.log('succes');
      res.send(doc);
    }, (e) => {
      console.log('fail');
      res.status(400).send(e);
    });
  };

insert();