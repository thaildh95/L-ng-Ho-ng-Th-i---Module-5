import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {AppProductService} from '../../service/app-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product: Product[] = [];

  constructor(private productAppService: AppProductService) {
    this.productAppService.getAll().subscribe(products => {
      this.product = products;
    });
  }

  ngOnInit(): void {
  }

}
