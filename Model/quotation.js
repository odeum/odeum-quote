var mongoose = require('mongoose'); 

var DescriptionSchema = require('./description');

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
    },
    description: {
        DescriptionSchema
    }
});

var Quotation = mongoose.model('Quotation', QuotationSchema, 'Quotation'); 

module.exports = {Quotation};