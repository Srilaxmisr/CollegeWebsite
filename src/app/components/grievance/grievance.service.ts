import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Createproject } from 'src/app/model/grimodel';

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
  

}
