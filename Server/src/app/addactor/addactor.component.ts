import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../database.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addactor',
  templateUrl: './addactor.component.html',
  styleUrls: ['./addactor.component.scss']
})
export class AddactorComponent implements OnInit {
  fullName = '';
  dob = 0;
  actorID = '';

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit() {
  }

  onSaveActor() {
    const obj = { name: this.fullName, dob: this.dob };
    this.dbService.createActor(obj).subscribe(result => {
      this.router.navigate(['/']);
    });
  }

}
