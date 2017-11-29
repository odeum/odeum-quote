var mongoose = require('mongoose'); 
var Product = mongoose.Schema({
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        trim: true
    },
    discount: {
        type: Number,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    }
});

module.exports = {Product};