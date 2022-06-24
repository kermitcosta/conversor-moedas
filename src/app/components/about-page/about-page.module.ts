import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageComponent } from './about-page.component';
import { AboutPageRoutes } from './about-page.routing';


@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    CommonModule,
    AboutPageRoutes
  ]
})
export class AboutPageModule { }
