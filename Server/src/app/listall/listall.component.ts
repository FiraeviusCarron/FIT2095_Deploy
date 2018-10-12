import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";

@Component({
  selector: 'app-listall',
  templateUrl: './listall.component.html',
  styleUrls: ['./listall.component.scss']
})
export class ListallComponent implements OnInit {
  actorsDB: any[] = [];
  moviesDB: any[] = [];
  selectedActor = '';
  selectedMovie = '';

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.onGetAll();
  }

  onGetAll() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  onDeleteActor(item) {
    this.dbService.deleteActor(item).subscribe(result => {
      this.onGetAll();
    });
  }

  onDeleteMovie(item) {
    this.dbService.deleteMovie(item).subscribe( result => {
      this.onGetAll();
    } );
  }

}
