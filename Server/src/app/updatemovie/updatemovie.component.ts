import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";

@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.scss']
})
export class UpdatemovieComponent implements OnInit {
  moviesDB: any[] = [];
  movieName = '';
  movieYear = '';
  movieId = '';

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.onGetMovies()
  }

  onGetMovies() {
    this.resetValues();
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  resetValues() {
    this.movieName = '';
    this.movieYear = '';
    this.movieId = '';
  }

  onMovieSelectUpdate(item) {
    this.movieName = item.title;
    this.movieYear = item.year;
    this.movieId = item._id;
  }

  onUpdateMovie() {
    const obj = {title: this.movieName, year: this.movieYear};
    this.dbService.updateMovie(this.movieId, obj). subscribe( result => {
      this.onGetMovies();
    } );
  }

}
