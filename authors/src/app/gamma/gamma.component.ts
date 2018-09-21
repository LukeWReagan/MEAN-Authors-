import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
  newPet: { name: "", type: "", description:0, skill:0 }
  tasks:any;
  task: any;
  obj: any;
  id = "";
  change = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllPets();
    this.newPet = { name: "", type: "", description:0, skill:0 }
  }

  onSubmit() {
    let x = this._httpService.createOne(this.newPet)
    x.subscribe(data=>{
      console.log("Added new entry",data);
    })
  }
  getAllPets(){
    let x = this._httpService.getTasks()
    x.subscribe(data=>{
      this.tasks = data;
    })
  }
}
