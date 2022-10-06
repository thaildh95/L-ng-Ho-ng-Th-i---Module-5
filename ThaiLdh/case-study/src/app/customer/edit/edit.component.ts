import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {TypeCustomer} from '../../model/TypeCustomer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  customerFormEdit: FormGroup;
  customer: Customer;
  id: number;
  typeCustomer: TypeCustomer[] = [];

  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = +param.get('id');
    });
    this.customerService.getAllTypeCustomer().subscribe(data => {
      this.typeCustomer = data;
    });
  }

  ngOnInit(): void {
    this.customerService.findById(this.id).subscribe(next => {
      this.customer = next;
    }, error => {
    }, () => {
      this.customerFormEdit = new FormGroup({
        id: new FormControl(this.customer.id),
        name: new FormControl(this.customer.name),
        dayOfBirth: new FormControl(this.customer.dayOfBirth),
        gender: new FormControl(this.customer.gender),
        phone: new FormControl(this.customer.phone),
        type: new FormControl(this.customer.type),
        address: new FormControl(this.customer.address),
        email: new FormControl(this.customer.email)
      });
    });

  }

  edit() {
    this.customerService.updateCustomer(this.customerFormEdit.value).subscribe(data => {
      this.router.navigateByUrl('/customer');
    });
  }
}
