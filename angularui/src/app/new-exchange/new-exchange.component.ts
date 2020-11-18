import { Component, OnInit } from '@angular/core';
import {ManageExchangeService} from '../Shared/manage-exchange.service';
import {StockExchange} from '../models/stock-exchange';

@Component({
  selector: 'app-new-exchange',
  templateUrl: './new-exchange.component.html',
  styleUrls: ['./new-exchange.component.css']
})
export class NewExchangeComponent implements OnInit {

  StockExchange1: string;
  Id: number;
  Brief: string;
  Contact: string;
  Remarks: string;
  
  obj: StockExchange;
  
    constructor(private service: ManageExchangeService) {}
  
    ngOnInit(): void {
    }
  
    Get(){
      this.service.Get(this.StockExchange1).subscribe(i =>{
        this.StockExchange1 = i["stockExchange1"];
        this.Id = i["id"];
        this.Brief = i["brief"];
        this.Contact = i["contact"];
        this.Remarks = i["remarks"];
      });
    }
  
    Add(){
      this.obj = new StockExchange();
  
      this.obj.StockExchange1 = this.StockExchange1;
      this.obj.Id = Number(this.Id);
      this.obj.Brief = this.Brief;
      this.obj.Contact = this.Contact;
      this.obj.Remarks = this.Remarks;
  
      this.service.Add(this.obj).subscribe();
    }
  
    Update(){
      this.obj = new StockExchange();
  
      this.obj.StockExchange1 = this.StockExchange1;
      this.obj.Id = this.Id;
      this.obj.Brief = this.Brief;
      this.obj.Contact = this.Contact;
      this.obj.Remarks = this.Remarks;
  
      this.service.Update(this.obj).subscribe();
    }

}
