import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private readonly API = 'https://api.exchangerate.host/symbols'

  constructor(private http: HttpClient) { }

  public listSymbols(): Observable<any> {
    return this.http.get<any>(this.API)
  }

}

