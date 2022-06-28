import { ButtonLargeModule } from './../button-large/button-large.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { ConversorPageComponent } from './conversor-page.component';
import { ConversorRoutes } from './conversor.routing';
import { ConversorFormComponent } from './conversor-form/conversor-form.component';


@NgModule({
  declarations: [
    ConversorPageComponent,
    ConversorFormComponent
  ],
  imports: [
    CommonModule,
    ConversorRoutes,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    ButtonLargeModule
  ]
})
export class ConversorModule { }
