import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap, of } from 'rxjs';

import { Conversion } from './../models/conversion';
import { SupportedSymbols } from 'src/app/models/supported-symbols';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private readonly API = 'https://api.exchangerate.host';

  private limitBoolean!: boolean;
  private conversion!: Conversion;

  constructor(private http: HttpClient) { }

  public listSymbols(): Observable<SupportedSymbols[]> {
    return this.http.get<any>(`${this.API}/symbols`).pipe(
      map((res) => {
        return Object.values(res.symbols);
      })
    );
  }

  public convert(from: string, to: string, value: number): Observable<Conversion> {

    if (to !== 'USD') {
      return this.http.get<any>(`${this.API}/convert?from=${from}&to=USD&amount=${value}`).pipe(
        switchMap(res => {
          res.result > 10000 ? this.limitBoolean = true : this.limitBoolean = false;
          return this.http.get<any>(`${this.API}/convert?from=${from}&to=${to}&amount=${value}`).pipe(
            switchMap((res) => {
              this.conversion = this.conversionResponse(res, this.limitBoolean);
              return of(this.conversion);
            })
          );
        })
      );
    } else {
      return this.http.get<any>(`${this.API}/convert?from=${from}&to=${to}&amount=${value}`).pipe(
        switchMap((res) => {
          res.result > 10000 ? this.limitBoolean = true : this.limitBoolean = false;
          this.conversion = this.conversionResponse(res, this.limitBoolean);
          return of(this.conversion);
        })
      );
    }
  }

  private conversionResponse(res: any, limitBoolean: boolean): Conversion {
    let conversion = {
      from: res.query.from,
      to: res.query.to,
      value: res.query.amount,
      date: new Date(),
      result: res.result,
      rate: res.info.rate,
      dollarLimit: limitBoolean
    };
    return conversion;
  }
}
