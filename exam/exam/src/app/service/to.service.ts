import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {FromArea} from "../model/FromArea";
import {HttpClient} from "@angular/common/http";
import {ToArea} from "../model/ToArea";

@Injectable({
  providedIn: 'root'
})
export class ToService {

  constructor(private http:HttpClient) { }
  getAllTo():Observable<any>{
    return this.http.get<ToArea[]>('http://localhost:8080/to');
  }
}
