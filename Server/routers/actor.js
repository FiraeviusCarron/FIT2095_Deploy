const mongoose = require('mongoose');

const Actor = require('../models/actor');
const Movie = require('../models/movie');

module.exports = {
    getAll: (req, res) => {
        Actor.find({}).populate('movies').exec((err, actors)=>{
            if(err) res.status(400).json(err);
            if(!actors) res.status(404).json();
            res.json(actors);
        });
    },
    getOne: (req, res)=>{
        Actor.findOne({_id:req.params.id})
            .populate('movies')
            .exec((err, actor)=>{
                if(err) return res.json(err);
                if(!actor) return res.json();
                res.json(actor);
            });
    },
    createOne: (req, res) => {
        let actorDtl = req.body;
        actorDtl._id = new mongoose.Types.ObjectId();
        Actor.create(actorDtl, (err, actor)=>{
            if(err) return res.json(err);
            res.json(actor);
        });
    },
    updateOne: (req, res) => {
        Actor.findOneAndUpdate({_id: req.params.id}, req.body, (err, actor)=>{
            if(err) return res.status(400).json(err);
            if(!actor) return res.status(404).json();
            res.json(actor);
        });
    },
    deleteOne: (req, res)=>{
        Actor.findOneAndRemove({_id:req.params.id}, err=>{
            if(err) return res.status(400).json(err);
            res.json();
        });
    },
    addMovie: (req, res)=>{
        Actor.findOneAndUpdate({_id: req.body.id}, {$push: {movies: req.body.movies}}, (err, doc)=>{
            if(err) res.status(400).json(err);
            if(!doc) res.status(404).json();
            res.json(doc);
        });
    },
    deleteMovie: (req, res)=>{
        Actor.findOneAndUpdate({_id: req.body.id}, {$pull:{movies:req.body.movies}}, (err, actor)=>{
            if(err) res.status(400).json(err);
            //if(!actor) res.status(404).json();
            res.json(actor);
        });
    },
    getFilteredActors: (req, res)=>{
        Actor.find({}).where('dob').gte(req.params.year1).lte(req.params.year2).exec((err, actors)=>{
            if(err) res.status(400).json(err);
            if(!actors) {
                res.status(404).json();
                return;
            }
            res.json(actors);
        });
    }
};
