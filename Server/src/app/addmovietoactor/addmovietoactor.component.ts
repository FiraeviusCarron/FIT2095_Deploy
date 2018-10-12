import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addmovietoactor',
  templateUrl: './addmovietoactor.component.html',
  styleUrls: ['./addmovietoactor.component.scss']
})
export class AddmovietoactorComponent implements OnInit {
  actorsDB: any[] = [];
  moviesDB: any[] = [];

  fullName = '';
  dob = 0;
  movieName = '';
  movieYear = 0;

  selectedActor = '';
  selectedMovie = '';

  actorId = '';
  movieId = '';

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.onGetAll();
  }

  onGetAll() {
    this.resetValues();
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  onSelectUpdate(item) {
    this.fullName = item.name;
    this.dob = item.dob;
    this.actorId = item._id;
  }

  onMovieSelectUpdate(item) {
    this.movieName = item.title;
    this.movieYear = item.year;
    this.movieId = item._id;
  }

  onMovieAddedToActor() {
    const obj = {id: this.actorId, movies: this.movieId};
    this.dbService.pushMovie(obj).subscribe( result => {
      this.onGetAll();
    } );
    const ob2 = { id: this.movieId, actors: this.actorId };
    this.dbService.pushActor(ob2).subscribe( result => {
      this.onGetAll();
    } );
  }

  resetValues() {
    this.fullName = '';
    this.dob = 0;
    this.actorId = '';
    this.movieId = '';
    this.movieYear = 0;
    this.movieName = '';
  }

}
