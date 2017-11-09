var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var {Product} = require('../Model/products')

var product1 = new Product; 
product1.name = 'ODEUM Report';
product1.description = 'ODEUM Report is an App and Cloud platform to …';
product1.price = 20000;
product1.subscription = 'onetime';

var product2 = new Product; 
product2.name = 'ODEUM Report user';
product2.description = 'ODEUM Report user client license';
product2.price = 2100;
product2.subscription = 'yearly';

var product3 = new Product; 
product3.name = 'ODEUM Report design';
product3.description = 'ODEUM Report design template';
product3.price = 15000;
product3.subscription = 'onetime';

var product4 = new Product; 
product4.name = 'Hosting Mail';
product4.description = 'E-mail hosting monthly fee';
product4.price = 250;
product4.subscription = 'monthly';

var product5 = new Product; 
product5.name = 'Hosting Web Hotel';
product5.description = 'Web Hotel Hosting quarterly fee';
product5.price = 450;
product5.subscription = 'quarterly';

var product6 = new Product; 
product6.name = 'Development';
product6.description = 'Unspecified development hour';
product6.price = 880;
product6.subscription = 'hourly';

var product7 = new Product; 
product7.name = 'Design';
product7.description = 'Unspecified design hour';
product7.price = 880;
product7.subscription = 'hourly';

var product8 = new Product; 
product8.name = 'Backup';
product8.description = 'Backup service';
product8.price = 250;
product8.subscription = 'monthly';

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