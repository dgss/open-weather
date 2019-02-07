import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './waether-icon.component.html',
  styleUrls: ['./weather-icon.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherIconComponent {
  @Input() weatherCondition = '';
  constructor() { }
}
