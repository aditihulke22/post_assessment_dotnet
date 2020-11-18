import { Component, OnInit } from '@angular/core';
import {ManageCompanyService} from '../Shared/manage-company.service';
import { Company } from '../models/company';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {

name: string;
turnover: string;
ceo: string;
boardofdirectors: string;
exchange: string;
sector: string;
description: string;
code: string;

obj: Company;

  constructor(private service: ManageCompanyService) {}

  ngOnInit(): void {
  }

  Get(){
    this.service.Get(this.name).subscribe(i =>{
      this.turnover = i["turnover"];
      this.ceo = i["ceo"];
      this.boardofdirectors = i["boardOfDirectors"];
      this.exchange = i["stockExchange"];
      this.sector = i["sector"];
      this.description = i["brief"];
      this.code = i["code"];
    });
  }

  Add(){
    this.obj = new Company();

    this.obj.CompanyName = this.name;
    this.obj.Turnover = this.turnover;
    this.obj.Ceo = this.ceo;
    this.obj.BoardOfDirectors = this.boardofdirectors;
    this.obj.StockExchange = this.exchange;
    this.obj.Sector = this.sector;
    this.obj.Brief = this.description;
    this.obj.Code = this.code;

    this.service.Add(this.obj).subscribe();
  }

  Update(){
    this.obj = new Company();

    this.obj.CompanyName = this.name;
    this.obj.Turnover = this.turnover;
    this.obj.Ceo = this.ceo;
    this.obj.BoardOfDirectors = this.boardofdirectors;
    this.obj.StockExchange = this.exchange;
    this.obj.Sector = this.sector;
    this.obj.Brief = this.description;
    this.obj.Code = this.code;

    this.service.Update(this.obj).subscribe();
  }

}
