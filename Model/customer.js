var mongoose = require('mongoose'); 

var {Company} = require('./company'); 

var Customer = mongoose.model('Customer', {
    Company
}); 