import { Component, OnInit } from '@angular/core';
import {ProductAppService} from "../service/product-app.service";
import {Product} from "../product";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product : Product[] = [];

  constructor(private productAppService: ProductAppService) {
    this.product = productAppService.getAll();
  }

  ngOnInit(): void {
  }

  delete(id) {
    this.productAppService.delete(id);
  }
}
