import { Injectable } from '@angular/core';
import { IEmployee } from '../emp/emp';

@Injectable()
export class EmployeeService {

  constructor() {

  };
  

  getEmployees(): IEmployee[] {
    return [
    {firstName: "Arpit", lastName: "Arora", age: 25, gender: "male", dateOfBirth: new Date("05/11/1992")}, 
    {firstName: "Adit", lastName: "Bhosale", gender: "male", age: 27, dateOfBirth: new Date("11/05/1989")}, 
    {firstName: "Rashmi", lastName: "Kanaujia", gender: "female", age: 26, dateOfBirth: new Date("12/24/1991")},
    {firstName: "Saurabh", lastName: "Singh", gender: "male", age: 26, dateOfBirth: new Date("11/05/1991")}
    ];
  }
}
