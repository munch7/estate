import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentalsComponent } from './rentals/rentals.component';
import { H1Component } from './rentals/h1/h1.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { V2Component } from './vehicles/v2/v2.component';
import { V3Component } from './vehicles/v3/v3.component';
import { V4Component } from './vehicles/v4/v4.component';
import { V5Component } from './vehicles/v5/v5.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RentalsComponent,
    H1Component,
    VehiclesComponent,
    V2Component,
    V3Component,
    V4Component,
    V5Component,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
