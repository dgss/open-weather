import { Component } from '@angular/core';
import { Cities } from './city-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cities;
  constructor() {
    this.cities = Cities;
  }
}
