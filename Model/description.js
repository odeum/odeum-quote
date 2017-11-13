var mongoose = require('mongoose');

var Description = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
});

//var Description = mongoose.model('description', DescriptionSchema, 'description');

module.exports = {Description};