var mongoose = require('mongoose'); 

var Quotation = mongoose.model('Quotation', {
    status: {
        type: String,
        required: true,
        trim: true,
        enum: ['Draft', 'Prospect', 'Lost', 'Won', 'Production', 'Delivered', 'Invoiced', 'Operation', 'Operation stopped',]
    },
    pdf: {
        path: String
    }
});

module.exports = {Quotation};