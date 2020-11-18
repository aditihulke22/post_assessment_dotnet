import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/Company';
import { StockExchange } from '../models/stock-exchange';

const httpOptions= {
  headers: new HttpHeaders({'Content-Type': 'application/json'}) 
}

@Injectable({
  providedIn: 'root'
})
export class ManageExchangeService {

  path: string = "http://localhost:50562/ManageExchange/";

  constructor(private http: HttpClient) { }

  public GetAll(): Observable<StockExchange[]>{
    return this.http.get<StockExchange[]>(this.path + "GetAll");
  }

  public Get(name: string): Observable<StockExchange>{
    return this.http.get<StockExchange>(this.path + "Get/" + name);
  }

  public Add(e: StockExchange){
    return this.http.post(this.path + "Add", e, httpOptions);
  }

  public Update(e: StockExchange): Observable<any>{
    return this.http.put<any>(this.path + "Update", e, httpOptions);
  }
}
