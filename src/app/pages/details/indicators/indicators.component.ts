import { Component } from '@angular/core';

import { data } from './data';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss'],
})
export class IndicatorsComponent {

  indicators: any[];

  constructor() {
    this.indicators = data;
  }

}
