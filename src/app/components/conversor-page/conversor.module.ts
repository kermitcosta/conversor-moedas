import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { ConversorPageComponent } from './conversor-page.component';


@NgModule({
  declarations: [
    ConversorPageComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class ConversorModule { }
