import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  CakeWithReviews:any
  lul: {_id: ""}
  id:any
  task:any
  tasks:any
  newCake: any;
  obj: any;
  change = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getOneReview(this._httpService.storedId)
    this.lul= {_id: ""} 
  }
  getOneReview(id){
    this._httpService.readOne(id).subscribe(data=>{
      this.CakeWithReviews = data
      console.log("review",data)
    })
  }
  onDelete(id){
    let y = this._httpService.deleteOne(id)
    y.subscribe(data=>{
      this.task = data;
      console.log("delete bro", data);
      console.log(this.task);
      this.getTasksFromService();
      this.id=""
        
    })
  }
  getTasksFromService(){
    let x = this._httpService.getTasks()
    x.subscribe(data=>{
      this.tasks = data;
      for(let c of this.tasks) {
        // c.star=null
        // c.comment=null
      }
    })
  }
}

