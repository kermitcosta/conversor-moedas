import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { SupportedSymbolsRoutes } from './supported-symbols.routing';
import { SupportedSymbolsListComponent } from './supported-symbols-list.component';

@NgModule({
  declarations: [
    SupportedSymbolsListComponent,
  ],
  imports: [
    CommonModule,
    SupportedSymbolsRoutes,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  exports: []
})
export class SupportedSymbolsModule { }
