const mongoose = require('mongoose');

const movie = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    year: {
        required: true,
        type: Number
    },
    actors: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Actor'
    }]
},{
    versionKey: false
});

module.exports = mongoose.model('Movie', movie);