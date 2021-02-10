import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { CityinfoComponent } from '../map/cityinfo/cityinfo.component';
import { WeatherinfoComponent } from '../map/weatherinfo/weatherinfo.component';
import { PolluantinfoComponent } from '../map/polluantinfo/polluantinfo.component';
import { MapComponent } from '../map/map.component';
import { FavoriteComponent } from '../favorite/favorite.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
    MapComponent,
    FavoriteComponent,
    CityinfoComponent, 
    WeatherinfoComponent, 
    PolluantinfoComponent
  ]
})
export class TabsPageModule {}
