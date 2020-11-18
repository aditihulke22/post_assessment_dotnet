import { Component, OnInit } from '@angular/core';
import {IpoDetailsService} from '../Shared/ipo-details.service';
import {IpoDetails} from '../models/ipo-details';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-new-ipo',
  templateUrl: './new-ipo.component.html',
  styleUrls: ['./new-ipo.component.css']
})
export class NewIpoComponent implements OnInit {

  StockExchange: string;
  Id: number;
  CompanyName: string;
  PricePerShare: string;
  TotalShares: number;
  OpenDateTime: Date;
  Remarks: string;
  
  obj: IpoDetails;
  
    constructor(private service: IpoDetailsService) {}
  
    ngOnInit(): void {
    }
  
    Get(){
      this.service.Get(this.Id).subscribe(i =>{
        this.Id = i["id"];
        this.StockExchange = i["stockExchange"];
        this.CompanyName = i["companyName"];
        this.PricePerShare = i["pricePerShare"];
        this.TotalShares = i["totalShares"];
        this.OpenDateTime = i["openDateTime"];
        this.Remarks = i["remarks"];
      });
    }
  
    Add(){
      this.obj = new IpoDetails();
  
      this.obj.Id = Number(this.Id);
      this.obj.CompanyName = this.CompanyName;
      this.obj.StockExchange = this.StockExchange;
      this.obj.PricePerShare = this.PricePerShare;
      this.obj.TotalShares = Number(this.TotalShares);
      this.obj.OpenDateTime = this.OpenDateTime;
      this.obj.Remarks = this.Remarks;
  
      this.service.Add(this.obj).subscribe();
    }
  
    Update(){
      this.obj = new IpoDetails();
  
      this.obj.StockExchange = this.StockExchange;
      this.obj.Id = Number(this.Id);
      this.obj.CompanyName = this.CompanyName;
      this.obj.PricePerShare = this.PricePerShare;
      this.obj.TotalShares = Number(this.TotalShares);
      this.obj.OpenDateTime = this.OpenDateTime;
      this.obj.Remarks = this.Remarks;
  
      this.service.Update(this.obj).subscribe();
    }

}
