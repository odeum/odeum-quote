var mongoose = require('mongoose'); 

var Company = { 
    name: {
        type: String, 
        required: true, 
        trim: true,
        minlength: 1
    }
}

module.exports = {Company}; 