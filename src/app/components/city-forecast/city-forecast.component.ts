import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { WeatherProviderService } from 'src/app/services/weather-provider.service';
import { roundToNearHalf, groupByDate, getKeys } from 'src/app/utils/utils';
import { CityForecastData } from 'src/app/statics/city-data-interface';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CityForecastComponent {
  @Output() closeDetails = new EventEmitter();
  @Input() icon = '';
  @Input() name;
  @Input() currentTemprature: number;
  @Input() source: { key: CityForecastData };

  @Input() showInside = false;
  get showInsideDetailsClass(): string {
    return this.showInside ? 'show-inside' : '';
  }

  @Input()
  set query(val: string) {
    this.weatherProvider.getCityForecast(val).subscribe(res => {
      this.source = groupByDate(res.list);
    });
  }

  constructor(private weatherProvider: WeatherProviderService) { }

  getTempratureRoundedValue(temp: number): number {
    return roundToNearHalf(temp);
  }

  getForecastDays(): any[] {
    return getKeys(this.source);
  }

  requestClose(): void {
    this.closeDetails.emit();
  }
}
