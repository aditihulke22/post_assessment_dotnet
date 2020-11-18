import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.css']
})
export class CompareCompanyComponent implements OnInit {

  type: string;
  exchange: string;
  name: string;

  constructor() { }

  ngOnInit(): void {
  }

  public Add(){}

  public Compare(){}
}
