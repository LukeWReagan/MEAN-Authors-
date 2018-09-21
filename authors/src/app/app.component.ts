import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Rate My Cake';
  tasks: any;
  task: any;
  newPet: { name: "", type: "", description:0, skill:0}
  obj: any;
  id = "";
  change = false;
  rating: any = {name:"",comment:0,value: 0};
  comments: any = {comment:0}
  showReview: any;

  constructor(private _httpService: HttpService){}
  
  ngOnInit(){
    this.getAllPets();
    this.showReview = false
  }

  getAllPets(){
  let x = this._httpService.getTasks()
  x.subscribe(data=>{
    this.tasks = data;
    for(let c of this.tasks) {
      // c.star=null
      // c.comment=null
    }
    
    console.log("got our data", data);
    console.log(this.tasks);
    })
  }
  getOneTask(id){
    if(this.id != id){
      this.id = id;
    }
  }
  onSubmit() {
    let x = this._httpService.createOne(this.newPet)
    x.subscribe(data=>{
      console.log("Added new entry",data);
      this.getAllPets();
    })
  }
  
  onDelete(id){
    let y = this._httpService.deleteOne(id)
    y.subscribe(data=>{
      this.task = data;
      console.log("delete bro", data);
      console.log(this.task);
      this.getAllPets();
      this.id = ""  
    })
  }

  dataToService(id){
    this.showReview = true;
    this._httpService.storedId = id
  }

  onSubmitUpdate(id, cake) {
    cake.star.push(this.rating);
    cake.comment.push(this.comments);
    let z = this._httpService.updateOne(id, cake);
    z.subscribe(data => {
      this.getAllPets();
    })
  }

}