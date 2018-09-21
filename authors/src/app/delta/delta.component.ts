import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
@Component({
  selector: 'app-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.css']
})
export class DeltaComponent implements OnInit {
  showReview: any;
  task:any;
  tasks:any;
  obj: {name: "", type: "", description:0, skill: 0};
  description: any = {description:0}
  newCake: any;
  id = "";
  change = false;
  CakeWithReviews:any

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  this.obj= { name: "", type: "", description:0, skill:0 }
  this.showReview= false 
  this.getAllPets();
  }
dataToService(id){
    this.showReview = true;
    this._httpService.storedId = id
  }
  getAllPets(){
    let x = this._httpService.getTasks()
    x.subscribe(data=>{
      this.tasks = data;
    })
  }
  onSubmitUpdate(id, obj) {
    obj.skill.push(this.obj);
    obj.description.push(this.obj);
    let z = this._httpService.updateOne(id, obj);
    z.subscribe(data => {
      this.getAllPets();
    })
  }
  getOneReview(id){
    this._httpService.readOne(id).subscribe(data=>{
      this.CakeWithReviews = data
      console.log("review",data)
    })
  }
}
