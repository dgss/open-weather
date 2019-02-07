/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { CityRowComponent } from '../city-row/city-row.component'
import { CityForecastComponent } from '../city-forecast/city-forecast.component'
import { WeatherIconComponent } from '../weather-icon/weather-icon.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeatherComponent,
        CityRowComponent,
        CityForecastComponent,
        WeatherIconComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide details view', () => {
    component.closeDetails();
    expect(component.showInside).toBe(false);
  });
});
