var mongoose = require('mongoose'); 

var Person = { 
    name: {
        type: String, 
        required: true, 
        trim: true,
        minlength: 1
    }
}

module.exports = {Person}; 