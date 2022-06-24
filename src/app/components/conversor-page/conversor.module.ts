import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { ConversorPageComponent } from './conversor-page.component';
import { ConversorRoutes } from './conversor.routing';


@NgModule({
  declarations: [
    ConversorPageComponent
  ],
  imports: [
    CommonModule,
    ConversorRoutes,
    MatTabsModule
  ]
})
export class ConversorModule { }
