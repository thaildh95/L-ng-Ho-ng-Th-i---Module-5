import { Component, OnInit } from '@angular/core';
import {Dictionary} from "../model/dictionary";
import {NgGSDictionaryAppService} from "../service/ng-g-s-dictionary-app.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  dictionary : Dictionary[] = [];

  constructor(private dictionaryservice : NgGSDictionaryAppService) {
    this.dictionary = dictionaryservice.getAll();


  }

  ngOnInit(): void {
  }
}
