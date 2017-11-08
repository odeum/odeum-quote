var mongoose = require('mongoose'); 

var {Company} = require('./company'); 

var SalesPerson = mongoose.model('SalesPerson', {
    Company
}); 