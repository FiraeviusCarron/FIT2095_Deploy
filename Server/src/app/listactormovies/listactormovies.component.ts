import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";

@Component({
  selector: 'app-listactormovies',
  templateUrl: './listactormovies.component.html',
  styleUrls: ['./listactormovies.component.scss']
})
export class ListactormoviesComponent implements OnInit {
  actorsDB: any[] = [];
  selectedActorMovies: any[] = [];
  selectedActor = '';

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.onGetActors()
  }

  onGetActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

  onActorMoviesFetched(item) {
    this.selectedActorMovies = item.movies;
    this.selectedActor = item.name
  }

}
