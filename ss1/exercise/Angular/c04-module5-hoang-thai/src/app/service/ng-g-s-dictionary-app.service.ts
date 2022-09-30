import { Injectable } from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class NgGSDictionaryAppService {
  dictionary: Dictionary[] = [
    {id:1,name:'dog',mean:'cho'},
    {id:2,name:'cat',mean:'meo'},
    {id:3,name:'horse',mean:'ngua'},
    {id:4,name:'raven',mean:'qua'},
    {id:5,name:'worm',mean:'sau'},
    {id:6,name:'penguin',mean:'chim canh cut'},
    {id:7,name:'snake',mean:'ran'},
    {id:8,name:'buffalo',mean:'trau'},
    ]


  constructor() { }
  getAll(){
    return this.dictionary;
  }
  getDetail(id: number){
    return this.dictionary.filter(item => item.id == id)[0]
  }
}
