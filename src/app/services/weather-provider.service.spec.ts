/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { WeatherProviderService } from './weather-provider.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: WeatherProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherProviderService],
      imports: [HttpClientModule]
    });
  });

  it('should ...', inject([WeatherProviderService], (service: WeatherProviderService) => {
    expect(service).toBeTruthy();
  }));
});
