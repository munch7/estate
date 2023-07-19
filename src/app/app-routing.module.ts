import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RentalsComponent } from './rentals/rentals.component';
import { H1Component } from './rentals/h1/h1.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { V2Component } from './vehicles/v2/v2.component';
import { V3Component } from './vehicles/v3/v3.component';
import { V4Component } from './vehicles/v4/v4.component';
import { V5Component } from './vehicles/v5/v5.component';

const routes: Routes = [
  { path: '', redirectTo: '/rentals', pathMatch: 'full' },
  { path: 'rentals', component: RentalsComponent,
    children: [
      { path: 'h1', component: H1Component}
    ]
  },
  { path: 'vehicle', component: VehiclesComponent,
    children: [
      { path: 'v2', component: V2Component },
      { path: 'v3', component: V3Component },
      { path: 'v4', component: V4Component },
      { path: 'v5', component: V5Component }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
