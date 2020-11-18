import { Component, OnInit } from '@angular/core';
import {Company} from '../models/company';
import {ManageCompanyService} from '../Shared/manage-company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  //list: Company[];
  /*name: string;
  turnover: string;
  ceo: string;
  boardofdirectors: string;
  exchange: string;
  sector: string;
  description: string;
  code: string;*/

  obj: Company;
  list: Company[] = new Array();

  constructor(private service: ManageCompanyService, private router: Router) {
    this.service.GetAll().subscribe(i=>{
      
      for(let o in i){
        this.obj = new Company();

        this.obj.CompanyName = i[o]["companyName"];
        this.obj.Turnover = i[o]["turnover"];
        this.obj.Ceo = i[o]["ceo"];
        this.obj.BoardOfDirectors = i[o]["boardOfDirectors"];
        this.obj.StockExchange = i[o]["stockExchange"];
        this.obj.Sector = i[o]["sector"];
        this.obj.Brief = i[o]["brief"];
        this.obj.Code = i[o]["code"];
        
        this.list.push(this.obj);
      }
    })
  }

  ngOnInit(): void {
  }

  Edit(){
    this.router.navigateByUrl('new-company');
  }

}
