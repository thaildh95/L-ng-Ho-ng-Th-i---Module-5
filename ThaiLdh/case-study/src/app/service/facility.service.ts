import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facility} from '../model/Facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) {
  }


}
