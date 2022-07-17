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

  symbols$!: Observable<SupportedSymbols[]>

  initialCurrency = 'BRL'
  finalCurrency = 'USD'
  value!: number
  showDiv: boolean = false

  conversion!: Conversion
  conversions: Conversion[] = []

  constructor(private service: ExchangeService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.symbols$ = this.service.listSymbols()

    if (sessionStorage.length > 0) {
      this.conversions = JSON.parse(sessionStorage.getItem('conversions') as string);
    }
  }

  sendForm(): void {
    this.service.convert(this.initialCurrency, this.finalCurrency, this.value)
      .subscribe((res) => {
        this.conversion = res;
        this.renderConversion(this.conversion);
      });
  }

  private renderConversion(res: Conversion): void {
    this.conversions.push(res)
    this.showDiv = true;
    sessionStorage.setItem('conversions', JSON.stringify(this.conversions));
    this.snackBar.open('Conversão realizada', '', { duration: 2500, panelClass: ['blue-snackbar'] });
  }

  clearConversion(form: NgForm): void {
    this.showDiv = false
    form.reset()
  }

}
