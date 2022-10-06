import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {TypeCustomer} from '../../model/TypeCustomer';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  customerForm: FormGroup;
  typeCustomer1: TypeCustomer[] = [];

  constructor(private customerService: CustomerService,
              private router: Router,
              private typeCustomer: CustomerService) {

    this.customerService.getAllTypeCustomer().subscribe(data => {
      this.typeCustomer1 = data;
    });
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      dayOfBirth: new FormControl(),
      gender: new FormControl(),
      phone: new FormControl(),
      type: new FormControl(),
      address: new FormControl(),
      email: new FormControl()
    });
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.create(customer).subscribe(() => {
      this.router.navigateByUrl('/customer');
    }, error => {
      console.log(error);
    });


  }

  add() {
    this.customerService.create(this.customerForm.value).subscribe(next => {
      this.router.navigateByUrl('/customer');
    });
  }
}
