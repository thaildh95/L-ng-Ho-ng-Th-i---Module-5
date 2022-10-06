import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';
import {AppProductService} from '../../service/app-product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product: Product;
  productForm: FormGroup;
  categories: Category[] = [];

  constructor(private productAppService: AppProductService,
              private router: Router,
              private categoryService: CategoryService) {
    this.categoryService.getAll().subscribe(cate => {
      this.categories = cate;
    });

  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
  }

  create() {
    this.productAppService.create(this.productForm.value).subscribe(next => {
      this.router.navigateByUrl('');
    });
  }
}
