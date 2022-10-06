import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {TypeCustomer} from '../../model/TypeCustomer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customer: Customer[] = [];
  customerInf: Customer;
  page: number = 1;
  type: TypeCustomer[] = [];


  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {
    console.log(this.customerService.getAll());
    this.customerService.getAll().subscribe(data => {
      this.customer = data;
    });
    this.customerService.getAllTypeCustomer().subscribe(data => {
      this.type = data;
    });

  }

  showInfo(c: Customer) {
    this.customerInf = c;
  }

  delete(id: number) {
    this.customerService.deleteCustomer(id).subscribe(next => {
      this.customerService.getAll().subscribe(data => {
        this.customer = data;
      });
    });
  }

  search(value: string, value2: string) {
    this.customerService.search(value,value2).subscribe(data => {
      this.customer = data;
    });
  }
}
