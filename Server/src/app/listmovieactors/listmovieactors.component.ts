import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";

@Component({
  selector: 'app-listmovieactors',
  templateUrl: './listmovieactors.component.html',
  styleUrls: ['./listmovieactors.component.scss']
})
export class ListmovieactorsComponent implements OnInit {
  moviesDB: any[] = [];
  selectedMovieActors: any[] = [];
  selectedMovie = '';

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.onGetMovies();
  }

  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  onMovieActorsFetched(item) {
    this.selectedMovieActors = item.actors;
    this.selectedMovie = item.title;
  }

}
