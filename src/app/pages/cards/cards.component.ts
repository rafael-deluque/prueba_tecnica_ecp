import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import { SharedService } from 'src/app/services/shared.service';

import { ModalController } from '@ionic/angular';
import { FiltersComponent } from './filters/filters.component';

import { data } from './data';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],

})
export class CardsComponent {

  equipments: Array<any> = [];
  locations: any[];
  filters: any;

  constructor(
    private _dataService: DataService,
    private _shareService: SharedService,
    private _modalController: ModalController,
    private _router: Router
  ) {
    this.filters = [];
  }

  ionViewWillEnter(): void {
    console.log('ionViewWillEnter');
    this.getAllEquipments();
  }

  getAllEquipments(): void {
    setTimeout(() => {
      this.equipments = data;
      this.locations = [];

      this.equipments.forEach((equipment) => {
        if (equipment.location !== null && !this.locations.some((loc) => loc === equipment.location)){
          this.locations.push(equipment.location);
        }
      });
    }, 1500);
  }

  goToEquipment(id: any): void {
    console.log('Go to equipment:', id);
    this._router.navigate(['equipment', id, 'details', 'general']);
  }

  async openFilters() {
    const modal = await this._modalController.create({
      component: FiltersComponent,
      componentProps: {
        'locations': this.locations
      },
      swipeToClose: true
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    this.setFilters(data.filters);
  }

  setFilters(filters) {
    this.filters = [];
    filters.forEach((fltr) => {
      if (fltr.value !== '' && fltr.value !== null){
        this.filters.push(fltr);
      }
    });
  }

  removeFilter(filter) {
    let newFilters = [];
    this.filters.forEach((fltr) => {
      if (fltr.key !== filter) {
        newFilters.push(fltr);
      }
    });
    this.filters = newFilters;
  }
}