import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Createproject } from 'src/app/model/grimodel';
import {map} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GrievanceService {

  // constructor() { }
  myUrl='http://localhost:3000/posts';

  request!:Createproject[]
  constructor(private http:HttpClient) { }
  
  //create project

  createproject(request:Createproject) {
   return this.http.post(this.myUrl,request)
  }
  // getproject(){
  //   return this.http.get<any>("http://localhost:3000/posts").pipe(
  //     map(
  //       (res=>{
  //         return res
  //       })
  //     )
  //   )
  // }
  

}
