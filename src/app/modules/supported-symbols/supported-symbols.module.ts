import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SupportedSymbolsListComponent } from './supported-symbols-list/supported-symbols-list.component';

@NgModule({
  declarations: [
    SupportedSymbolsListComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  exports: [
    SupportedSymbolsListComponent
  ]
})
export class SupportedSymbolsModule { }
