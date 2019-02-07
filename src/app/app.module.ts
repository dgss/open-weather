import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CityRowComponent } from './components/city-row/city-row.component';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { CityForecastComponent } from './components/city-forecast/city-forecast.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CityRowComponent,
    CityForecastComponent,
    WeatherIconComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
