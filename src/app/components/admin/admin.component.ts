import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  email!: String;
password!:String;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

adminLogin(){
  if(this.email==="admin@gmail.com" && this.password==="Pass@123"){
    console.log("Successful");
    alert("Logged in");
    this.router.navigate(['adminview'])
  }else{
    console.log("User Unauthorized");
    alert("Unauthorized user")
  }
}
}
