import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {TypeCustomer} from '../model/TypeCustomer';

const URL_CUSTOMER = "http://localhost:8080/customer";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<Customer[]>(URL_CUSTOMER);
  }

  create(customer: Customer) {
    return this.http.post('http://localhost:8080/add', customer);
  }

  getAllTypeCustomer(): Observable<any> {
    return this.http.get<TypeCustomer>('http://localhost:8080/customer/type');
  }

  deleteCustomer(id: number) {
    return this.http.delete(URL_CUSTOMER + id);
  }

  updateCustomer(c: Customer) {
    console.log(c);
    return this.http.patch('http://localhost:3000/customer/' + c.id, c);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(URL_CUSTOMER + id);
  }
  search(name:string,typeName:string):Observable<any>{
    return this.http.get<Customer[]>(`http://localhost:3000/customer?name_like=${name}&type.id_like=${typeName}`)

  }
}
