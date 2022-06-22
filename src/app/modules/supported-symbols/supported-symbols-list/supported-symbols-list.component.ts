import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GetSymbolsService } from './../../../services/get-symbols.service';
import { SupportedSymbols } from 'src/app/models/supported-symbols';


@Component({
  selector: 'app-supported-symbols-list',
  templateUrl: './supported-symbols-list.component.html',
  styleUrls: ['./supported-symbols-list.component.css']
})
export class SupportedSymbolsListComponent implements OnInit {

  symbols: any
  columnsToDisplay: string[] = ['Código', 'Descrição'];
  dataSource!: MatTableDataSource<SupportedSymbols>
  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private service: GetSymbolsService) {

    this.service.listSymbols().subscribe(dado => {

      this.symbols = Object.values(dado.symbols)
      this.dataSource = new MatTableDataSource(this.symbols)

      this.dataSource.paginator = this.paginator
    })
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

}
