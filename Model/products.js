
var mongoose = require('mongoose'); 

var Products = mongoose.model('Products', {
    name: {
        type: String, 
        required: true, 
        trim: true,
        minlength: 1
    }
}); 
module.exports = {Products};