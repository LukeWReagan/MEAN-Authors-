import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  tasks: any;
  showReview: any;
  task: any;
  newCake: any;
  obj: any;
  id = "";
  change = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllPets();
    this.showReview= false;

}
  getAllPets(){
    let x = this._httpService.getTasks()
    x.subscribe(data=>{
      this.tasks = data;
    })
  }
  dataToService(id){
    let x = this._httpService.readOne(id)
    x.subscribe(data=>{
      this.tasks = data;

    })
    this.showReview = true;
    this._httpService.storedId = id
  }
  
}
