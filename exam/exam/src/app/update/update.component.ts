import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Travel} from "../model/Travel";
import {FromArea} from "../model/FromArea";
import {ToArea} from "../model/ToArea";
import {CarService} from "../service/car.service";
import {ToService} from "../service/to.service";
import {FromService} from "../service/from.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  carFormEdit :FormGroup;
  travel: Travel;
  carList: Travel[];
  fromList: FromArea[];
  toList: ToArea[];
  id : number;

  constructor(private carService: CarService,
              private toService:ToService,
              private fromService:FromService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = +param.get('id');
    });

    this.fromService.getAllFrom().subscribe(data => {
      this.fromList = data;
    })
    this.toService.getAllTo().subscribe(data => {
      this.toList = data;
    })
  }

  ngOnInit(): void {
    this.carService.findById(this.id).subscribe(next => {
      this.travel = next;
    }, error => {
    }, () => {
      this.carFormEdit = new FormGroup({
        id: new FormControl(this.travel.id,Validators.required),
        carCode: new FormControl(this.travel.carCode,Validators.required),
        typeCar: new FormControl(this.travel.typeCar,Validators.required),
        from: new FormControl(this.travel.from.id),
        to: new FormControl(this.travel.to.id),
        phone: new FormControl(this.travel.phone,Validators.required),
        email: new FormControl(this.travel.email,Validators.required),
        start: new FormControl(this.travel.start),
        end: new FormControl(this.travel.end),
      });
    });
  }

  edit() {
    console.log(this.carFormEdit.value)
    this.carService.updateTravel(this.carFormEdit.value).subscribe(data => {
      this.router.navigateByUrl('');
    });
  }

}
