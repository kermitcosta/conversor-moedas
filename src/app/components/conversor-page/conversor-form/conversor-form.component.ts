import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, switchMap } from 'rxjs';
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

  constructor(private service: ExchangeService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.service.listSymbols().subscribe(dado => {
      this.symbols = Object.values(dado.symbols)
    })
    if (sessionStorage.length > 0) {
      this.conversions = JSON.parse(sessionStorage.getItem('conversions') as string)
    }
  }

  sendForm(initialCurrency: string, finalCurrency: string, value: number): void {
    let limitBoolean!: boolean
    const exchangeRequisition: Observable<any> = this.service.convert(initialCurrency, finalCurrency, value)

    if (finalCurrency != "USD") {
      this.service.convertToUsd(initialCurrency, value).pipe(
        switchMap(response => {
          response.result > 10000 ? limitBoolean = true : limitBoolean = false
          return exchangeRequisition
        })
      ).subscribe(response => {
        this.createConversion(response, limitBoolean)
      })
    } else {
      exchangeRequisition.subscribe(response => {
        response.result > 10000 ? limitBoolean = true : limitBoolean = false
        this.createConversion(response, limitBoolean)
      })
    }
  }

  private createConversion(response: any, limitBoolean: boolean): void {
    this.conversion = {
      from: this.initialCurrency,
      to: this.finalCurrency,
      value: this.value,
      date: new Date(),
      result: response.result,
      rate: response.info.rate,
      dollarLimit: limitBoolean
    }

    this.conversions.push(this.conversion)
    this.showDiv = true
    sessionStorage.setItem('conversions', JSON.stringify(this.conversions))
    this.snackBar.open('Conversão realizada', '', { duration: 2500, panelClass: ['blue-snackbar'] })
  }

  clearConversion(form: NgForm): void {
    this.showDiv = false
    form.resetForm()
  }

}
