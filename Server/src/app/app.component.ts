import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hollywood Warehouse';
  section = 1;

  changeSection(sec) {
    this.section = sec;
    console.log(this.section);
  }
}
