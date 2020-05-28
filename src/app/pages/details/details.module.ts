import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { GeneralComponent } from './general/general.component';
import { SparepartsComponent } from './spareparts/spareparts.component';
import { IndicatorsComponent } from './indicators/indicators.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule
  ],
  declarations: [
    DetailsPage,
    GeneralComponent,
    SparepartsComponent,
    IndicatorsComponent
  ]
})
export class DetailsPageModule {}
