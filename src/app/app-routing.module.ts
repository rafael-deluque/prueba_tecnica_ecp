import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CanActivateViaAuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'equipment',
    component: CardsComponent,
    // canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'equipment/:id',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule),
    // canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
