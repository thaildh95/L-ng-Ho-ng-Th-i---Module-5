import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Travel} from "../model/Travel";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<Travel[]>('http://localhost:8080');
  }

  delete(id: number) {
    return this.http.delete('http://localhost:3000/car/'+id);
  }
  findById(id: number): Observable<Travel> {
    return this.http.get<Travel>('http://localhost:3000/car/' + id);
  }
  updateTravel(c: Travel) {
    console.log(c);
    return this.http.patch('http://localhost:3000/car/' + c.id, c);
  }
}
