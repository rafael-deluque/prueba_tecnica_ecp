import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { SharedService } from './services/shared.service';
import { DataService } from './services/data.service';

import { LoginComponent } from './pages/login/login.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CanActivateViaAuthGuard } from './guards/auth.guard';
import { FiltersComponent } from './pages/cards/filters/filters.component';

// the second parameter 'fr-FR' is optional
registerLocaleData(localeEs, 'es-ES');


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardsComponent,
    FiltersComponent
  ],
  entryComponents: [
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SharedService,
    DataService,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    CanActivateViaAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
