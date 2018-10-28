import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-reactive-emp',
  templateUrl: './create-reactive-emp.component.html',
  styleUrls: ['./create-reactive-emp.component.css']
})
export class CreateReactiveEmployee implements OnInit {

userform = new FormGroup({
  name: new FormControl('',
  [
    Validators.required,
    Validators.minLength(4)
  ]),
  email: new FormControl('', Validators.required)
});

onSubmit() {
  console.log(this.userform.value);
}

get name() { return this.userform.get('name'); }

get email() { return this.userform.get('email'); }

ngOnInit() {

}
  
}
