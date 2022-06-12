import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplyService } from './apply.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  constructor(private fb: FormBuilder, private apply: ApplyService, private router: Router) { }

  ngOnInit(): void {
  }
  applyForm = this.fb.group({
    //_id:[''],
    name:[''],
    dob:[''],
    email:[''],
    department:[''],
    address:[''],
    number:['']
 })

 applyy(applyData: any) {
  console.log("data is", applyData)
  console.log(this.applyForm.value)
  const Data1 = {
    name:applyData.value.name,
    dob:applyData.value.dob,
    email: applyData.value.email,
    department: applyData.value.department,
    address: applyData.value.address,
    number: applyData.value.number
  }
  this.apply.applyOnline(Data1).subscribe((_data: any) => {
    alert("details submitted successfully")

  }, (err) => {
    alert("unable to post")
  })
}

}
