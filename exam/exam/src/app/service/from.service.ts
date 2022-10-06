import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Travel} from "../model/Travel";
import {FromArea} from "../model/FromArea";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FromService {

  constructor(private http:HttpClient) { }
  getAllFrom():Observable<any>{
    return this.http.get<FromArea[]>('http://localhost:8080/from');
  }
}
