import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpComponent } from './employee/emp/emp.component';
import { EmployeeTitlePipe } from './employee/emp/employeeTitle.pipe'
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { EmpCountComponent } from './employee/emp-count/empCount.component';
import { EmployeeListComponent } from './employee/emp-list/empList.component';
import { CreateEmployee } from './employee/create-employee/create-emp.component';
import { CreateReactiveEmployee } from './employee/create-reactive-employee/create-reactive-emp.component';
import { Department } from './employee/department';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'employee', component: EmpComponent },
  { path: 'createEmployee', component: CreateEmployee },
  { path: 'createReactiveEmployee', component: CreateReactiveEmployee},
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    EmployeeTitlePipe,
    HomeComponent,
    EmpCountComponent,
    EmployeeListComponent,
    CreateEmployee,
    CreateReactiveEmployee
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
