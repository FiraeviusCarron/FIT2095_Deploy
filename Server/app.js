const express = require('express');
const app = express();

const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/lecture7';

const actors = require('./routers/actor');
const movies = require('./routers/movie');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
const morgan = require('morgan');
app.use(morgan('common'));

mongoose.connect(url,{useNewUrlParser:true}, err => {
    if(err) return console.log('Mongoose connection error -- ' + err);
    console.log('Connection to MongoDB successful');
});

app.use('/', express.static('./dist/Server'));

//Actor Endpoints
app.get('/actors', actors.getAll);
app.post('/actors', actors.createOne);
app.get('/actors/:id', actors.getOne);
app.put('/actors/:id', actors.updateOne);
app.delete('/actors/:id', actors.deleteOne);
app.delete('/actors/movie', actors.deleteMovie);
app.post('/actors/movie', actors.addMovie);
app.get('/actors/:year1/:year2', actors.getFilteredActors);

//Movie Endpoints
app.get('/movies', movies.getAll);
app.post('/movies', movies.createOne);
app.get('/movies/:id', movies.getOne);
app.put('/movies/:id', movies.updateOne);
app.delete('/movies/:id', movies.deleteOne);
app.delete('/movies/actor', movies.deleteActor);
app.post('/movies/actor', movies.addActor);
app.get('/movies/:year1/:year2', movies.getFilteredMovies);

//server listen
app.listen(80);
