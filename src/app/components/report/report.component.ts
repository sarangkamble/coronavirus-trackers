import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  reports : any;
  i:number= 1;

  constructor(private http:HttpClient, private dataService:DataService) { }

  ngOnInit() {
    let resp = this.dataService.getGlobalData();
    resp.subscribe((data)=>this.reports=data);
  }

}