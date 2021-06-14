import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-deletemarks',
  templateUrl: './deletemarks.component.html',
  styleUrls: ['./deletemarks.component.css']
})
export class DeletemarksComponent implements OnInit {

  constructor(private _data:DataService) { }

  marksid
  names

  ngOnInit(): void {
    this.getnames();
  }


  deleteitem(){

    var ret

    this._data.deletemarks(this.marksid).subscribe(
      data=>{ ret = data},
      err=>{console.log(err)},
      ()=>{console.log("item deleted")}
    )

    alert("Item Deleted")
    this.marksid="";
    window.location.reload();
  }

  getnames(){
    this._data.viewmarks().subscribe(
      data=>{this.names = data},
      err=>{console.log(err)},
      ()=>{console.log("name recieved")}
    )
  }

}
