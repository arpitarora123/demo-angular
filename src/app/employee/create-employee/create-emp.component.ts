import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../department';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmployee implements OnInit {

  gender: String = "male";
 
 departments: Department[] = 
  [
    {id:1, name: "Admin"}, 
    {id:2, name: "HR"},
    {id:3, name: "IT"}
  ];
  
  ngOnInit() {
  }

  saveEmployee(employeeForm: NgForm): void {
    // console.log(employeeForm);
    console.log(employeeForm.value);
  }
  
}
