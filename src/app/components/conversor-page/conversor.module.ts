import { FormatNumberPipe } from './../../pipes/format-number/format-number.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';


import { ButtonLargeModule } from './../button-large/button-large.module';
import { ConversorPageComponent } from './conversor-page.component';
import { ConversorRoutes } from './conversor.routing';
import { ConversorFormComponent } from './conversor-form/conversor-form.component';
import { ConversorHistoryComponent } from './conversor-history/conversor-history.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    ConversorPageComponent,
    ConversorFormComponent,
    ConversorHistoryComponent,
    ConfirmDialogComponent,
    FormatNumberPipe
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
    MatDialogModule,
    MatTooltipModule
  ]
})
export class ConversorModule { }
