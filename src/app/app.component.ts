import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectedIds = [];
  public data = [
    {
      id: 1,
      name: 'Alex',
    },
    {
      id: 2,
      name: 'Andrew',
    },
    {
      id: 3,
      name: 'Jason',
    },
    {
      id: 4,
      name: 'John',
    },
  ];
}
