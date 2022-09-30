import { Component, OnInit } from '@angular/core';
import {Dictionary} from "../model/dictionary";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {NgGSDictionaryAppService} from "../service/ng-g-s-dictionary-app.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  dictionary : Dictionary;
  constructor(private  activatedRoute: ActivatedRoute,private  dictionaryAppService: NgGSDictionaryAppService)
  {
    activatedRoute.paramMap.subscribe((param: ParamMap)=>{
      const id = param.get('id');
      if (id != null){
        this.dictionary = dictionaryAppService.getDetail(parseInt(id));
      }

    })
    }

  ngOnInit(): void {
  }

}
