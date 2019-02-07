import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { SingleCityData } from 'src/app/statics/city-data-interface';
import { WeatherProviderService } from 'src/app/services/weather-provider.service';
import { roundToNearHalf, getWeatherIconEnum } from 'src/app/utils/utils';

@Component({
  selector: 'app-city-row',
  templateUrl: './city-row.component.html',
  styleUrls: ['./city-row.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CityRowComponent {
  hiddenStatus = false;
  cityQueryText;
  get isHidden(): string {
    return this.hiddenStatus ? 'hidden' : '';
  }
  @Output() cityClick = new EventEmitter();

  @Input() name;
  @Input() icon;
  @Input() color;

  @Input()
  set query(val: string) {
    this.cityQueryText = val;
    this.weatherProvider.getCityData(val).subscribe(res => {
      this.source = res as SingleCityData;
    });
  }
  get query(): string {
    return this.cityQueryText;
  }

  @Input() source: SingleCityData;
  constructor(private weatherProvider: WeatherProviderService) { }

  getTempratureRoundedValue(): number {
    return roundToNearHalf(this.source.main.temp);
  }

  getWeatherIconEnum(conditionIconCode: string): string {
    return getWeatherIconEnum(conditionIconCode);
  }

  cityClicked(): void {
    this.cityClick.emit(this);
  }
}
