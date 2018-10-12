import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.scss']
})
export class AddmovieComponent implements OnInit {
  movieName = '';
  movieYear = 0;

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit() {
  }

  onSaveMovie() {
    const obj = {title: this.movieName, year: this.movieYear};
    this.dbService.createMovie(obj).subscribe(result => {
      this.router.navigate(['/']);
    });
  }

}
