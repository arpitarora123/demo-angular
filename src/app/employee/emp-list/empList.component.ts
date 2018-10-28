import { Component, OnInit } from '@angular/core';
import { Employee } from '../emp/employee';
import { IEmployee } from '../emp/emp';
import { EmployeeService } from '../service/employee.service';

@Component({
    selector: 'list-employee',
    templateUrl: './empList.component.html',
    providers: [EmployeeService]
    // styleUrls: ['app/employee/employeeList.component.css']
})
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];

    selectedEmployeeCountRadioButton: string = 'All';

    constructor(private _employeeService: EmployeeService) {

    }

    ngOnInit() {
        this.employees = this._employeeService.getEmployees();
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender.toLowerCase() === 'male').length;
    }

    getFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender.toLowerCase() === 'female').length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

}
