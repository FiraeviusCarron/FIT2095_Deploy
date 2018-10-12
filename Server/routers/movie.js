const mongoose = require('mongoose');

const Actor = require('../models/actor');
const Movie = require('../models/movie');

module.exports = {
    getAll: (req, res) => {
        Movie.find({}).populate('actors').exec((err, movies)=>{
            if(err) res.status(400).json(err);
            if(!movies) res.status(404).json();
            res.json(movies);
        });
    },
    createOne: (req, res) => {
        let movieDetails = req.body;
        movieDetails._id = new mongoose.Types.ObjectId;
        Movie.create(movieDetails, (err, movie)=>{
            if(err) return res.status(400).json(err);
            res.json(movie);
        });
    },
    getOne: (req, res) => {
        Movie.findOne({_id: req.params.id}).populate('actors').exec((err, movie)=>{
            if(err) return res.status(400).json(err);
            //if(!movie) return res.status(404).json();
            res.json(movie);
        });
    },
    updateOne: (req, res) => {
        Movie.findOneAndUpdate({_id: req.params.id}, req.body, (err, movie)=>{
            if(err) return res.status(400).json(err);
            if(!movie) return res.status(404).json();
            res.json(movie);
        });
    },

    deleteOne: (req, res) => {
        Movie.findOneAndRemove({_id: req.params.id}, (err)=>{
          console.log(req.params.id);
            if(err) return res.status(400).json(err);
            res.json();
        });
    },

    deleteActor: (req, res) => {
        Movie.findOneAndUpdate({_id: req.body.id}, {$pull : {actors: req.body.actors}},(err, movie)=>{
            if(err) res.status(400).json(err);
            if(!movie) res.status(404).json();
            res.json(movie);
        });
    },
    addActor: (req, res)=>{
        Movie.findOneAndUpdate({_id: req.body.id}, {$push: {actors: req.body.actors}}, (err, movie)=>{
            if(err) res.status(400).json(err);
            if(!movie) res.status(404).json();
            res.json(movie);
        });
    },
    getFilteredMovies: (req, res) => {
        Movie.find({}).where('year').gte(req.params.year1).lte(req.params.year2).exec((err, movies)=>{
            if(err) res.status(400).json(err);
            if(!movies) res.status(404).json();
            res.json(movies);
        });
    }
};
