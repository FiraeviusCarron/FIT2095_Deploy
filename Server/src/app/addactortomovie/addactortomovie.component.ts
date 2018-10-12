import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";

@Component({
  selector: 'app-addactortomovie',
  templateUrl: './addactortomovie.component.html',
  styleUrls: ['./addactortomovie.component.scss']
})
export class AddactortomovieComponent implements OnInit {
  actorsDB: any[] = [];
  moviesDB: any[] = [];
  fullName = '';
  dob = 0;
  actorId = '';
  movieName = '';
  movieYear = 0;
  movieId = '';

  constructor(private dbService: DatabaseService) { }

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

  onMovieSelectUpdate(item) {
    this.movieName = item.title;
    this.movieYear = item.year;
    this.movieId = item._id;
  }

  onSelectUpdate(item) {
    this.fullName = item.name;
    this.dob = item.dob;
    this.actorId = item._id;
  }

  onActorAddedToMovie() {
    const obj = { id: this.movieId, actors: this.actorId };
    this.dbService.pushActor(obj).subscribe( result => {
      this.onGetAll();
    } );
    const obj2 = {id: this.actorId, movies: this.movieId};
    this.dbService.pushMovie(obj2).subscribe( result => {
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
