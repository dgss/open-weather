import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component'
import { CityRowComponent } from './components/city-row/city-row.component'
import { CityForecastComponent } from './components/city-forecast/city-forecast.component'
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WeatherComponent,
        CityRowComponent,
        CityForecastComponent,
        WeatherIconComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have cities', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.cities).toBeTruthy();
  });
});
