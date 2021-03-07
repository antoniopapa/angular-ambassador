import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  create(data: any): Observable<any> {
    return this.http.post(`${environment.api}/orders`, data);
  }

  confirm(data: any): Observable<any> {
    return this.http.post(`${environment.api}/orders/confirm`, data);
  }
}
