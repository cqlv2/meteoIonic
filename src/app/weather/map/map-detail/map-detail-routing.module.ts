import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityDetailComponent } from '../mapDetail/city-detail/city-detail.component';

import { MapDetailPage } from './map-detail.page';

const routes: Routes = [
  {
    path: 'cityInfo',
    component : CityDetailComponent
  },
  {
    path: '**',
    redirectTo: 'cytyInfo'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapDetailPageRoutingModule {}
