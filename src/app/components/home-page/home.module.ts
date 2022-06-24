import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonLargeModule } from './../button-large/button-large.module';
import { HomePageComponent } from './home-page.component';
import { HomeRoutingRoutes } from './home-routing.routing';



@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingRoutes,
    ButtonLargeModule
  ]
})
export class HomeModule { }
