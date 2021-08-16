import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/auth/home/home.component';
import { HelpComponent } from './components/auth/help/help.component';


@NgModule({
  declarations: [
    HomeComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
