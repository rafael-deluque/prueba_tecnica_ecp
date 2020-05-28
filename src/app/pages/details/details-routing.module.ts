import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPage } from './details.page';

import { GeneralComponent } from './general/general.component';
import { SparepartsComponent } from './spareparts/spareparts.component';
import { IndicatorsComponent } from './indicators/indicators.component';

const routes: Routes = [
  {
    path: 'details',
    component: DetailsPage,
    children: [
      {
        path: 'general',
        component: GeneralComponent,
      },
      {
        path: 'spareparts',
        component: SparepartsComponent,
      },
      {
        path: 'indicators',
        component: IndicatorsComponent,
      },
      {
        path: '',
        redirectTo: '/equipment',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/equipment',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPageRoutingModule {}
