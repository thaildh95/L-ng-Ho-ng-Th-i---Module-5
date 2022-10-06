import {Component, OnInit} from '@angular/core';
import {Travel} from "../model/Travel";
import {CarService} from "../service/car.service";
import {Router} from "@angular/router";
import {FromArea} from "../model/FromArea";
import {ToArea} from "../model/ToArea";
import {ToService} from "../service/to.service";
import {FromService} from "../service/from.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carList: Travel[];
  fromList: FromArea[];
  toList: ToArea[];
  page: number = 1;
  travelInf: Travel;

  constructor(private carService: CarService,
              private fromService: FromService,
              private toService: ToService,
              private router: Router) {
    this.fromService.getAllFrom().subscribe(data => {
      this.fromList = data.content;
    })
    this.toService.getAllTo().subscribe(data => {
      this.toList = data;
    })
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(data => {
      this.carList = data;
    })
  }

  showInfo(c: Travel) {
    this.travelInf = c;
  }

  delete(id: number) {
    this.carService.delete(id).subscribe(next => {
      this.carService.getAll().subscribe(data => {
        this.carList = data;
      });
    });
  }
}
