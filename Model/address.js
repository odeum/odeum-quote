var mongoose = require('mongoose'); 
var Address = mongoose.Schema({
    address: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    zipcode:{
        type: String,
        required: true,
        trim: true
    }
});

module.exports = {Description};