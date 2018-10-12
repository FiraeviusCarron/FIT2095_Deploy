const mongoose = require('mongoose');

const actor = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    dob: {
        validate: {
            validator: Number.isInteger,
            message: 'Year of birth should be an integer.'
        },
        type: Number,
        required: true
    },
    movies: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Movie'
    }]
},
    {
        versionKey: false
    });

module.exports = mongoose.model('Actor', actor);