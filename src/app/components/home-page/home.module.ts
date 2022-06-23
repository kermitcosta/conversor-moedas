import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonLargeModule } from './../button-large/button-large.module';
import { HomePageComponent } from './home-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonLargeModule
  ]
})
export class HomeModule { }
