import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GrievanceService } from './grievance.service';

@Component({
  selector: 'app-grievance',
  templateUrl: './grievance.component.html',
  styleUrls: ['./grievance.component.css']
})
export class GrievanceComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
constructor(private fb: FormBuilder, private grievance: GrievanceService, private router: Router) { }

  ngOnInit(): void {
  }

  projectForm = this.fb.group({
     //_id:[''],
     email:[''],
     department:[''],
     complaint:['']
  })



  project(projectData: any) {
    console.log("login data is", projectData)
    console.log(this.projectForm.value)
    const Data = {
      id:projectData.value.id,
      email: projectData.value.email,
      department: projectData.value.department,
      complaint:projectData.value.complaint
    }
    this.grievance.createproject(Data).subscribe((data) => {
      alert("details submitted successfully")
  
    }, (err) => {
      alert("unable to post")
    })

  }

}

