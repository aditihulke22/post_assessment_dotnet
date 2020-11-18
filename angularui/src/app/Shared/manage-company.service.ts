import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/Company';
//import { Employee } from '../Models/employee';

/*const httpOptions= {
  headers: new HttpHeaders({'Content-Type': 'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})
}*/

const httpOptions={headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '+ localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class ManageCompanyService {

  path: string = "http://localhost:50562/ManageCompany/";

  constructor(private http: HttpClient) { }

  public GetAll(): Observable<Company[]>{
    return this.http.get<Company[]>(this.path + "GetAll", httpOptions);
  }

  public Get(name: string): Observable<Company>{
    return this.http.get<Company>(this.path + "Get/" + name, httpOptions);
  }

  public Add(e: Company){
    return this.http.post(this.path + "Add", e, httpOptions);
  }

  public Update(e: Company): Observable<any>{
    return this.http.put<any>(this.path + "Update", e, httpOptions);
  }
}
