import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {

  @Input() locations: any[];

  name: string;
  description: string;
  location: string;

  chosen: string;

  constructor(
    private _modalController: ModalController
  ) {
    this.name = '';
    this.description = '';
    this.location = '';

    this.chosen = '';
  }

  closeModal() {
    let val: string;
    switch (this.chosen) {
      case 'name':
        val = this.name;
        break;
      case 'description':
        val = this.description;
        break;
      case 'location':
        val = this.location;
        break;
      default:
        val = '';
        break;
    }
    
    this._modalController.dismiss({
      'filters': [
        {
          key: this.chosen,
          value: val,
        },
        // {
        //   key: 'name',
        //   value: this.name,
        // },
        // {
        //   key: 'description',
        //   value: this.description,
        // },
        // {
        //   key: 'location',
        //   value: this.location,
        // }
      ]
    });
  }
}
