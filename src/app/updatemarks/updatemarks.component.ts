import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-updatemarks',
  templateUrl: './updatemarks.component.html',
  styleUrls: ['./updatemarks.component.css']
})
export class UpdatemarksComponent implements OnInit {

   _marks;
   names;
  //  _selected;
   marksid;
  
  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this.getnames();
  }

//   updatemarks(){
// console.log(this._select);
// window.alert(this.form.);
//   }


  updatemarks() {
    // const corporationObj = form.value.selected;
    console.log(this._marks);
    console.log(this.marksid);
    var ret;


    let updateddata={
      marksid : this.marksid,
      marks: this._marks
    }

    this._data.updatemarks(updateddata).subscribe(
      data => { ret = data},
      err => console.error(err),
      () => console.log('Marks Updated')
    
      );
      alert("Marks Updated Successfully")
      this._marks="";
      this.marksid="";
 }

  getnames(){

    this._data.viewmarks().subscribe(
      data=> {this.names = data},
      err=>{console.log(err)},
      ()=>{console.log("names recieved")}

    )
  }




}
