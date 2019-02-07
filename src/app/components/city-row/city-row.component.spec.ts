/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CityRowComponent } from './city-row.component';
import { WeatherIconComponent } from '../weather-icon/weather-icon.component';
import { HttpClientModule } from '@angular/common/http';
describe('CityRowComponent', () => {
    let component: CityRowComponent;
    let fixture: ComponentFixture<CityRowComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [CityRowComponent, WeatherIconComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CityRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
