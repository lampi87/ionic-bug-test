import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TabsPageRoutingModule } from './maintabs.router.module';

import { IonicModule } from '@ionic/angular';

import { MaintabsPage } from './maintabs.page';
import { HomePageModule } from '../home/home.module';
import { CalendarPageModule } from '../calendar/calendar.module';
import { UserPageModule } from '../user/user.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    HomePageModule,
    CalendarPageModule,
    UserPageModule,
    TranslateModule.forChild()
  ],
  declarations: [MaintabsPage]
})
export class MaintabsPageModule {}
