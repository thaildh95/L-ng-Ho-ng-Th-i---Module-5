import {Component, OnInit} from '@angular/core';
import {ProductAppService} from "../service/product-app.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../product";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  // @ts-ignore
  product: Product = {};
  updateForm: FormGroup

  constructor(private productAppService: ProductAppService, private router: Router, private activatedRoute: ActivatedRoute) {

    activatedRoute.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');

      if (id != null) {
        this.product = productAppService.findById(parseInt(id));
      }
    })
    this.updateForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description)
    })

  }

  ngOnInit(): void {

  }

  update() {
    this.productAppService.update(this.updateForm.value);
    this.router.navigateByUrl('');

  }
}
