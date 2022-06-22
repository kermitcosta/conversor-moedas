import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
