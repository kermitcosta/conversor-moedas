import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { GetSymbolsService } from '../../services/get-symbols.service';
import { SupportedSymbols } from 'src/app/models/supported-symbols';


@Component({
  selector: 'app-supported-symbols-list',
  templateUrl: './supported-symbols-list.component.html',
  styleUrls: ['./supported-symbols-list.component.css']
})
export class SupportedSymbolsListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  symbols: SupportedSymbols[] = []
  columnsToDisplay: string[] = ['code', 'description'];
  dataSource!: MatTableDataSource<SupportedSymbols>

  constructor(private service: GetSymbolsService) { }

  ngOnInit(): void {
    this.service.listSymbols().subscribe(dado => {
      this.symbols = Object.values(dado.symbols)
      this.dataSource = new MatTableDataSource(this.symbols)

      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

}
