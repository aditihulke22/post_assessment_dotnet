import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import {ExcelService} from '../Shared/excel.service';
import {StockPrice} from '../models/stock-price';
import {Subject} from 'rxjs';
import * as XLSX from 'xlsx';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {

  importRecords: StockPrice[] = [];

  constructor(private excelSrv: ExcelService) { }

  ngOnInit(): void {
  }

  spinnerEnabled = false;
  keys: string[];
  dataSheet = new Subject();
  @ViewChild('inputFile') inputFile: ElementRef;
  isExcelFile: boolean;
  list : string[] = [];

  onChange(evt) {
    let data, header;
    const target: DataTransfer = <DataTransfer>(evt.target);
    this.isExcelFile = !!target.files[0].name.match(/(.xls|.xlsx)/);
    if (target.files.length > 1) {
      this.inputFile.nativeElement.value = '';
    }
    if (this.isExcelFile) {
      this.spinnerEnabled = true;
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        data = XLSX.utils.sheet_to_json(ws);
      };

      reader.readAsBinaryString(target.files[0]);

      reader.onloadend = (e) => {
        this.spinnerEnabled = false;
        this.keys = Object.keys(data[0]);
        this.dataSheet.next(data)
      }
    } else {
      this.inputFile.nativeElement.value = '';
    }
  }

  loadData(){
    for(let i in this.dataSheet){
      for(let j in this.keys){
        console.log(i[j]);
      } 
    }
  }

  removeData() {
    this.inputFile.nativeElement.value = '';
    this.dataSheet.next(null);
    this.keys = null;
  }

  /*onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {

      const bstr: string = e.target.result;
      const data = <any[]>this.excelSrv.importFromFile(bstr);

      const header: string[] = Object.getOwnPropertyNames(new StockPrice());
      const importedData = data.slice(1, -1);

      this.importRecords = importedData.map(arr => {
        const obj = {};
        for (let i = 0; i < header.length; i++) {
          const k = header[i];
          obj[k] = arr[i];
        }
        return <StockPrice>obj;
      })

    };
    reader.readAsBinaryString(target.files[0]);

  }*/

}
