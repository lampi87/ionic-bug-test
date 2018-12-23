import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaintabsPage } from './maintabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MaintabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'calendar',
        children: [
          {
            path: '',
            loadChildren: '../calendar/calendar.module#CalendarPageModule'
          }
        ]
      },
      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: '../user/user.module#UserPageModule'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
