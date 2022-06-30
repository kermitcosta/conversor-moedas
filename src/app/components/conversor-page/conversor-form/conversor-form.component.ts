import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SupportedSymbols } from 'src/app/models/supported-symbols';
import { ExchangeService } from 'src/app/services/exchange.service';

import { Conversion } from './../../../models/conversion';


@Component({
  selector: 'app-conversor-form',
  templateUrl: './conversor-form.component.html',
  styleUrls: ['./conversor-form.component.css']
})
export class ConversorFormComponent implements OnInit {

  symbols: SupportedSymbols[] = []

  initialCurrency = ''
  finalCurrency = ''
  value!: number
  showDiv: boolean = false

  conversion!: Conversion
  conversions: Conversion[] = []

  // @Output() redirect: EventEmitter<any> = new EventEmitter

  constructor(private service: ExchangeService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.service.listSymbols().subscribe(dado => {
      this.symbols = Object.values(dado.symbols)
    })
    if (sessionStorage.length > 0) {
      this.conversions = JSON.parse(sessionStorage.getItem('conversions') as string)
    }
  }

  sendToConvert() {
    this.service.convert(this.initialCurrency, this.finalCurrency, this.value)
      .subscribe(res => {
        this.conversion = {
          from: res.query.from,
          to: res.query.to,
          value: res.query.amount,
          date: new Date(),
          result: res.result,
          rate: res.info.rate
        }
        this.conversions.push(this.conversion)
        this.showDiv = true
        sessionStorage.setItem('conversions', JSON.stringify(this.conversions))
        this._snackBar.open('Conversão realizada', '', { duration: 2500, panelClass: ['blue-snackbar'] })
        // this.redirect.emit(this.conversions)
      })
  }

  clearConversion(form: NgForm) {
    this.showDiv = false
    form.resetForm()
  }
}
