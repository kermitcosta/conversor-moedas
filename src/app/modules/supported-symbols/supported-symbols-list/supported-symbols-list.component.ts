import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SupportedSymbols } from 'src/app/models/supported-symbols';
import { GetSymbolsService } from './../../../services/get-symbols.service';


@Component({
  selector: 'app-supported-symbols-list',
  templateUrl: './supported-symbols-list.component.html',
  styleUrls: ['./supported-symbols-list.component.css']
})
export class SupportedSymbolsListComponent implements OnInit {

  symbols: SupportedSymbols[] = []
  columnsToDisplay: string[] = ['Código', 'Descrição'];

  constructor(private service: GetSymbolsService) { }

  ngOnInit(): void {
    this.service.listSymbols().subscribe(dado => {
      this.symbols = Object.values(dado.symbols)
    })
  }

}
