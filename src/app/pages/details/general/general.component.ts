import { Component } from '@angular/core';

import { data } from './data';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent {

  activeTab: string;
  general: any;
  workorders: any;

  constructor() {
    this.general = data.general;
    this.workorders = data.workorders;
    console.log(this.workorders);
    this.activeTab = 'general';
  }

  changeCustomTab(newTab) {
    this.activeTab = newTab;
  }
}
