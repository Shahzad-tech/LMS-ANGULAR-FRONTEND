import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewmarks',
  templateUrl: './viewmarks.component.html',
  styleUrls: ['./viewmarks.component.css']
})
export class ViewmarksComponent implements OnInit {

  public marks;

  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this.getmarks()
  }

  getmarks(){

      this._data.viewmarks().subscribe(
      data=>{this.marks=data},
      err=>{console.log(err)},
      ()=>{console.log("marks recieved")}
    );
  }


}
