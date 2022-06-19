import { Component, OnInit } from '@angular/core';
import { AdminviewService } from './adminview.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

  adminData:any;
  applicationData:any;
  constructor(private avservice:AdminviewService) { }

  ngOnInit(): void {
    this.avservice.getData().subscribe(res=>{
      this.adminData=res;
    })
    this.avservice.getApplication().subscribe(res1=>{
      this.applicationData=res1;
    })
  }
}
