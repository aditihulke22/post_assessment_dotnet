import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {

  file_path: string;

  constructor() { }

  ngOnInit(): void {
  }

  Upload(){}

}
