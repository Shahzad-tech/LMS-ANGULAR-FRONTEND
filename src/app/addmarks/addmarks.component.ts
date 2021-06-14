import { Component, OnInit } from '@angular/core';
import { type } from 'os';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addmarks',
  templateUrl: './addmarks.component.html',
  styleUrls: ['./addmarks.component.css']
})
export class AddmarksComponent implements OnInit {
  _name:String;
  _marks:String;
  _students;
  studentid;


  constructor(private _data:DataService) { }

  ngOnInit(): void {
  this.viewstudents()
  }

  addmarksgeneral(){
    // console.log(this.studentid)
    let ret;
    let data={
      name:this._name,
      marks:this._marks,
      student:this.studentid
    };

    this._data.addmarks(data).subscribe(
      data=>{ret=data},
      err=>{console.log(err)},
      ()=>{console.log("General Marks Added")}
    )
    alert("Name and General Marks Added");
    this._name="";
    this._marks="";
    this.studentid="";


  }

  viewstudents(){

    this._data.viewstudents().subscribe(
      data=>{this._students=data},
      err=>{console.log(err)},
      ()=>{console.log("Student displayed"); console.log(typeof(this._students));}

    )
  }

}
