var mongoose = require('mongoose');

var CustomerSchema = mongoose.Schema({
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
    address: [Address]
});

var Customer = mongoose.model('Customer', CustomerSchema, 'customers');
module.exports = {Customer};