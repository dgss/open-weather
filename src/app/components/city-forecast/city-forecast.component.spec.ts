// /* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CityForecastComponent } from './city-forecast.component';
import { HttpClientModule } from '@angular/common/http';
describe('CityForecastComponent', () => {
    let component: CityForecastComponent;
    let fixture: ComponentFixture<CityForecastComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [CityForecastComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CityForecastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
