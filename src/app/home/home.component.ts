import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../services/data.service';
import * as pbi from 'powerbi-client'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public report: any;
  myReport: pbi.Report;
  currentPage: string;

  constructor(private _service: DataService) { }

  ngOnInit() {
    this.getReports();
  }

  getReports(){
    this._service.getReports().subscribe((res:any)=>{
      this.report = res[0];
    });
  }
  onEmbedded(report: pbi.Report){
    this.myReport = report;
    report.on('pageChanged', (event) => {
      this.currentPage = event.detail['newPage'].name;
    });
  }
  
  printReport(){
    this.myReport.print().then(d=>{
      const page = this.myReport.page(this.currentPage);
    })
  }

}
