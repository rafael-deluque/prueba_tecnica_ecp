import { Component } from '@angular/core';

import { data } from './data';

@Component({
  selector: 'app-spareparts',
  templateUrl: './spareparts.component.html',
  styleUrls: ['./spareparts.component.scss'],
})
export class SparepartsComponent {

  spareparts: any[];

  constructor() {
    this.spareparts = data;
  }
}
