import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IpoDetails} from '../models/ipo-details';


const httpOptions= {
  headers: new HttpHeaders({'Content-Type': 'application/json'}) 
}

@Injectable({
  providedIn: 'root'
})
export class IpoDetailsService {

  path: string = "http://localhost:50562/IpoDetails/";

  constructor(private http: HttpClient) { }

  public GetAll(): Observable<IpoDetails[]>{
    return this.http.get<IpoDetails[]>(this.path + "GetAll");
  }

  public Get(id: number): Observable<IpoDetails>{
    return this.http.get<IpoDetails>(this.path + "Get/" + id);
  }

  public Add(e: IpoDetails){
    return this.http.post(this.path + "Add", e, httpOptions);
  }

  public Update(e: IpoDetails): Observable<any>{
    return this.http.put<any>(this.path + "Update", e, httpOptions);
  }
}
