import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SingleCityData, CityForecastData } from '../statics/city-data-interface';

export const WeatherDataProviderUrl =
  'https://api.openweathermap.org/data/2.5/';

export const APIKey =
  'f9a9b7c1823133fcc0a2ad416c94b6d4';

@Injectable({
  providedIn: 'root'
})
export class WeatherProviderService {
  constructor(private http: HttpClient) { }
  getCityData(q: string): Observable<SingleCityData> {
    return this.http.get(`${WeatherDataProviderUrl}/weather?q=${q}&units=metric&appid=${APIKey}`) as Observable<SingleCityData>;
  }

  getCityForecast(q: string): Observable<{ list: CityForecastData[] }> {
    return this.http.get(`${WeatherDataProviderUrl}/forecast?q=${q}&units=metric&appid=${APIKey}`) as Observable<{ list: CityForecastData[] }>;
  }
}
