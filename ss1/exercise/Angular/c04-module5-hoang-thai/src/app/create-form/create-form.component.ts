import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Country} from "./country";

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  country: Country[] = [{id: 1, name: 'Viet Nam'}, {id: 2, name: 'America'}, {id: 3, name: 'Korea'}]

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),

    pass: new FormGroup({
      password: new FormControl(),
      confirmPassword: new FormControl()
    }, [this.invalidPassword]),
    country: new FormControl(),
    age: new FormControl('', [Validators.min(1),Validators.max(130)]),
    gender: new FormControl(),
    phone: new FormControl('', [Validators.required, Validators.pattern(' /^\\+84\\[0-9]{9}$')])

  })
  onSubmit: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  public invalidPassword(pass: AbstractControl) {
    let temp1 = pass.value.password;
    let temp2 = pass.value.confirmPassword;
    if (temp1 === temp2) {
      return null;
    } else {return {'notComparePassword': true}}
  }

  get email() {
    return this.email.get('email');
  }

  get age() {
    return this.age.get('age');
  }

  get phone() {
    return this.phone.get('phone');
  }

}


