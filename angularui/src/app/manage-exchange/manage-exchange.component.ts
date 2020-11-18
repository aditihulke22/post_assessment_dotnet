import { Component, OnInit } from '@angular/core';
import {StockExchange} from '../models/stock-exchange';
import {ManageExchangeService} from '../Shared/manage-exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.css']
})
export class ManageExchangeComponent implements OnInit {

  obj: StockExchange;
  list: StockExchange[] = new Array();

  constructor(private service: ManageExchangeService, private router: Router) {
    this.service.GetAll().subscribe(i=>{
      
      for(let o in i){
        this.obj = new StockExchange();

        this.obj.StockExchange1 = i[o]["stockExchange1"];
        this.obj.Id = i[o]["id"];
        this.obj.Brief = i[o]["brief"];
        this.obj.Contact = i[o]["contact"];
        this.obj.Remarks = i[o]["remarks"];
        
        this.list.push(this.obj);
      }
    })
  }

  ngOnInit(): void {
  }

  Edit(){
    this.router.navigateByUrl('new-exchange');
  }

}
