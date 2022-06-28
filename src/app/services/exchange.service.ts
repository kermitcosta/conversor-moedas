import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private readonly API = 'https://api.exchangerate.host'

  constructor(private http: HttpClient) { }

  public listSymbols(): Observable<any> {
    return this.http.get<any>(`${this.API}/symbols`)
  }

  public convert(from: string, to: string, value: number): Observable<any> {
    return this.http.get<any>(`${this.API}/convert?from=${from}&to=${to}&amount=${value}`)
  }

}

