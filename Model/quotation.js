var mongoose = require('mongoose'); 

var QuotationSchema = mongoose.Schema({
    status: {
        type: String,
        required: true,
        trim: true,
        enum: ['Draft', 'Prospect', 'Lost', 'Won', 'Production', 'Delivered', 'Invoiced', 'Operation', 'Operation stopped',]
    },
    pdf: {
        path: String
    },
    totalPrice: {
        type: Number,
        required: true
    }
});

var Quotation = mongoose.model('Quotation', Quotation, 'Quotation'); 

module.exports = {Quotation};