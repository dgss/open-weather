import { Component, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { CityRowComponent } from '../city-row/city-row.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent {
  private animationCatchDuration = 150;
  private detailBackgroundDom: HTMLElement;
  @ViewChild('detailBackground') detailBackground: ElementRef;
  @Input() cities;
  selectedColor = 'gray';
  selectedCityIndex = 0;
  selectedCityItem: CityRowComponent;

  showInside = false;
  showDetails = false;
  get showDetailsClass(): string {
    return this.showDetails ? 'show' : '';
  }

  constructor() {
  }

  citySelected(cityComponent: CityRowComponent, index: number): void {
    this.selectedCityIndex = index;
    this.selectedCityItem = cityComponent;
    this.selectedCityItem.hiddenStatus = true;
    this.moveBackgroundToPos(cityComponent.color, index);
  }

  closeDetails(): void {
    this.showInside = false;
    setTimeout(() => {
      this.clearBackgroundPos();
      setTimeout(() => {
        this.selectedCityItem.hiddenStatus = false;
        this.showDetails = false;
      }, this.animationCatchDuration + 50);
    }, this.animationCatchDuration + 50);
  }

  moveBackgroundToPos(color: string, index: number): void {
    if (!this.detailBackgroundDom) {
      this.detailBackgroundDom = this.detailBackground.nativeElement as HTMLElement;
    }
    this.detailBackgroundDom.style.transform =
      'translate3d(0, ' + (window.innerHeight / 5 * this.selectedCityIndex) + 'px, 0) scale(1, 0.2)';
    this.selectedColor = color;
    setTimeout(() => {
      this.showDetails = true;
      this.detailBackgroundDom.style.transform =
        'translate3d(0, 0, 0) scale(1, 1)';
      this.showInside = true;
    }, this.animationCatchDuration);
  }

  clearBackgroundPos(): void {
    this.detailBackgroundDom.style.transform =
      'translate3d(0, ' + (window.innerHeight / 5 * this.selectedCityIndex) + 'px, 0) scale(1, 0.2)';
  }
}
