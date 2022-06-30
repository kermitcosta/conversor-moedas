import { ButtonLargeModule } from './../button-large/button-large.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';


import { ConversorPageComponent } from './conversor-page.component';
import { ConversorRoutes } from './conversor.routing';
import { ConversorFormComponent } from './conversor-form/conversor-form.component';
import { ConversorHistoryComponent } from './conversor-history/conversor-history.component';


@NgModule({
  declarations: [
    ConversorPageComponent,
    ConversorFormComponent,
    ConversorHistoryComponent
  ],
  imports: [
    CommonModule,
    ConversorRoutes,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    ButtonLargeModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatIconModule,
  ]
})
export class ConversorModule { }
