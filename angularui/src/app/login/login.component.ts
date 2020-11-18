import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Shared/login.service';
import { Router } from '@angular/router';
import {User} from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname: string;
  pwd: string;

  u_uname: string;
  u_pwd: string;

  Id: number;
  Username: string;
  Password: string;
  Email:string;
  Mobile: string;
  Confirmed: string = "no";

  obj: User;
  errmsg: string = "";

  constructor(private service:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  Validate_admin()
  {
    this.service.Validate_admin(this.uname, this.pwd).subscribe(res=>{
      if(res.uname=='Admin')
      {
        localStorage.setItem('token',res.token);
        console.log(res);
        this.router.navigateByUrl('admin-landing');
      }
      else if(res.token==""||res.token==null)
      {
        console.log('Invalid Id');
      }
      else
      {
        localStorage.setItem('token',res.token);
        console.log(res);
        this.router.navigateByUrl('admin-landing');
      }
    })
  }

  Validate_user()
  {
    this.service.Validate_user(this.u_uname, this.u_pwd).subscribe(res=>{
      if(res.uname==this.u_uname)
      {
        localStorage.setItem('token',res.token);
        console.log(res);
        this.router.navigateByUrl('user-landing');
      }
      else if(res.token==""||res.token==null)
      {
        console.log('Invalid Id');
      }
      else
      {
        localStorage.setItem('token',res.token);
        console.log(res);
        this.router.navigateByUrl('user-landing');
      }
    })
  }

  public Add(){
    this.obj = new User();

    this.obj.Id = Number(this.Id);
    this.obj.Username = this.Username;
    this.obj.Password = this.Password;
    this.obj.Email = this.Email;
    this.obj.Mobile = this.Mobile;
    this.obj.Confirmed = this.Confirmed;

    this.service.Add(this.obj).subscribe();
  }


}
