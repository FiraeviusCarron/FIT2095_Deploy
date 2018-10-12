import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../database.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-updateactor',
  templateUrl: './updateactor.component.html',
  styleUrls: ['./updateactor.component.scss']
})
export class UpdateactorComponent implements OnInit {

  fullName = '';
  dob = 0;
  actorId = '';
  public actorsDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.onGetActors();
  }

  onGetActors() {
    this.resetValues();
    return this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

  resetValues() {
    this.fullName = '';
    this.dob = 0;
    this.actorId = '';
  }

  onSelectUpdate(item) {
    this.fullName = item.name;
    this.dob = item.dob;
    this.actorId = item._id;
  }

  onUpdateActor() {
    const obj = { name: this.fullName, dob: this.dob };
    this.dbService.updateActor(this.actorId, obj).subscribe(result => {
      this.onGetActors();
    });
  }
}
