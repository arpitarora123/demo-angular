import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  firstName: string= 'Arpit';
  lastName: string = 'Arora';
  gender: string= 'Male';
  age: number = 25;

  interpolation: string = 'This is the demo for interpolation.';
  propertyBinding: string = 'This is the demo for property binding';

  name: string = null;
  dynamicName: string = null;
  constructor() { }

  showDetails: boolean = false;

  personDetail() {
    this.showDetails = !this.showDetails;
  }

  ngOnInit() {
  }

}
