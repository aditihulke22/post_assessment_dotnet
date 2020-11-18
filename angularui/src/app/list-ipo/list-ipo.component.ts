import { Component, OnInit } from '@angular/core';
import {IpoDetails} from '../models/ipo-details';
import {IpoDetailsService} from '../Shared/ipo-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-ipo',
  templateUrl: './list-ipo.component.html',
  styleUrls: ['./list-ipo.component.css']
})
export class ListIpoComponent implements OnInit {

  obj: IpoDetails;
  list: IpoDetails[] = new Array();

  constructor(private service: IpoDetailsService, private router: Router) {
    this.service.GetAll().subscribe(i=>{
      
      for(let o in i){
        this.obj = new IpoDetails();

        this.obj.Id = i[o]["id"];
        this.obj.CompanyName = i[o]["companyName"];
        this.obj.StockExchange = i[o]["stockExchange"];
        this.obj.PricePerShare = i[o]["pricePerShare"];
        this.obj.TotalShares = i[o]["totalShares"];
        this.obj.OpenDateTime = i[o]["openDateTime"];
        this.obj.Remarks = i[o]["remarks"];
        
        this.list.push(this.obj);
      }
    })
  }

  ngOnInit(): void {
  }

}
