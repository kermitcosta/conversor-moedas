import { Component, OnInit } from '@angular/core';
import { SupportedSymbols } from 'src/app/models/supported-symbols';
import { ExchangeService } from 'src/app/services/exchange.service';


@Component({
  selector: 'app-conversor-form',
  templateUrl: './conversor-form.component.html',
  styleUrls: ['./conversor-form.component.css']
})
export class ConversorFormComponent implements OnInit {

  symbols: SupportedSymbols[] = []
  moedaOrigem = ''
  moedaDestino = ''
  valor = ''

  constructor(private service: ExchangeService) { }

  ngOnInit(): void {
    this.service.listSymbols().subscribe(dado => {
      this.symbols = Object.values(dado.symbols)
    })
  }

  mostrarValor() {
    console.log(this.moedaOrigem)
    console.log(this.moedaDestino)
    console.log(this.valor)
  }
}
