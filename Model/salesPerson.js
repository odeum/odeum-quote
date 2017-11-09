var mongoose = require('mongoose'); 

var SalesPerson = mongoose.model('SalesPerson', {
    companyName: {
        type: String, 
        required: true, 
        trim: true,
        minlength: 1
    },
    contactPerson: {
        type: String, 
        required: true, 
        trim: true,
        minlength: 1
    },
    email: {
        type: String, 
        required: true, 
        trim: true,
        minlength: 1
    },
    phone: {
        type: String, 
        required: true, 
        trim: true,
        minlength: 1
    },
    address: {
        type: String, 
        required: true, 
        trim: true,
        minlength: 1
    }
});

module.exports = {SalesPerson};