import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  public _performance;

  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this.getperformance();
  }

  getperformance(){

      this._data.viewmarks().subscribe(
      data=>{this._performance=data},
      err=>{console.log(err)},
      ()=>{console.log("marks recieved")}
    );
  }
}
