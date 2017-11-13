var {Product} = require('../Model/products');
var {SalesPerson} = require('../Model/salesPerson');
var { mongoose } = require('./MongoDb/connection');

Product.remove({}, (err) => { 
    console.log('Product removed') 
    if(err){
      console.log(`Error with product ${err}`);
    }
 });


 SalesPerson.remove({}, (err) => { 
  console.log('SalesPerson removed');
  if(err){
    console.log(`Error with product ${err}`);
  }
});
