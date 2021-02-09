import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from '../favorite/favorite.component';
import { MapComponent } from '../map/map.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'fav',
        component: FavoriteComponent
      },
      {
        path: '**',
        redirectTo: 'map',
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'tabs',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
