import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  endpoint = `${environment.api}/products`;

  constructor(private http: HttpClient) {
  }

  all(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint);
  }

  create(data: any): Observable<Product> {
    return this.http.post<Product>(this.endpoint, data);
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.endpoint}/${id}`);
  }

  update(id: number, data: any): Observable<Product> {
    return this.http.put<Product>(`${this.endpoint}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`);
  }
}
