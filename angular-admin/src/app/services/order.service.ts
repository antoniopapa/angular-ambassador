import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  endpoint = `${environment.api}/orders`;

  constructor(private http: HttpClient) {
  }

  all(): Observable<Order[]> {
    return this.http.get<Order[]>(this.endpoint);
  }
}
