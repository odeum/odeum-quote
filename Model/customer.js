var mongoose = require('mongoose'); 

var {Company} = require('./company'); 

var Customer = mongoose.model('Customer', {
    Company,
    companyName: {
        type: String, 
        required: true, 
        trim: true,
        minlength: 1
    }
}); 