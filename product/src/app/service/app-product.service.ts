import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class AppProductService {

  constructor(private  http: HttpClient) {

  }

  getAll(): Observable<any> {
    return this.http.get<Product[]>('http://localhost:3000/product');
  }
}
