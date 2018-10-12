import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../database.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deleteactor',
  templateUrl: './deleteactor.component.html',
  styleUrls: ['./deleteactor.component.scss']
})
export class DeleteactorComponent implements OnInit {
  public actorsDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.onGetActors();
  }

  onGetActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

  onDeleteActor(item) {
    this.dbService.deleteActor(item).subscribe(result => {
      this.onGetActors();
    });
  }
}
