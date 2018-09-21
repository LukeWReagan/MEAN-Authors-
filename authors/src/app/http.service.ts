import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class HttpService {
  storedId:any
  constructor(private _http: HttpClient) {}
   getTasks(){
    return this._http.get('api/tasks')
   }
   readOne(id){
    return this._http.get('api/tasks/' + id)
   }
   createOne(newPet){
    return this._http.post('api/tasks/', newPet)
}
deleteOne(id){
  console.log(id)
  return this._http.delete('api/tasks/' + id)
}

updateOne(id, obj){
  return this._http.put('/api/tasks/' + id, obj)
}

}

