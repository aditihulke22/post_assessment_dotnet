import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../models/user';
import {Token} from '../models/token';

const httpOptions= {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url_admin:string='http://localhost:50562/User/ValidateAdmin/'
  url_user:string='http://localhost:50562/User/ValidateUser/'
  url_signup:string='http://localhost:50562/User/Add'

  constructor(private service:HttpClient) { }
  public Validate_admin(uname:string,pwd:string):Observable<Token>
  {
    return this.service.get<Token>(this.url_admin+uname+'/'+pwd);
  }

  public Validate_user(uname:string,pwd:string):Observable<Token>
  {
    return this.service.get<Token>(this.url_user+uname+'/'+pwd);
  }

  public Add(u: User){
    return this.service.post(this.url_signup, u, httpOptions);
  }
}
