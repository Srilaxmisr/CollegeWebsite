import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Applyonline } from '../model/applygrid';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {
  myUrl1='http://localhost:3000/datas';
  request!:Applyonline[]
  constructor(private http1:HttpClient) { }

  applyOnline(request:Applyonline){
    return this.http1.post(this.myUrl1,request)
  }
}
