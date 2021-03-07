import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../interfaces/product';
import {PaginatedProducts} from '../interfaces/paginated-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  endpoint = `${environment.api}/products`;

  constructor(private http: HttpClient) {
  }

  backend(filters?: { page?: number, s?: string, sort?: string }): Observable<PaginatedProducts> {
    let params = new HttpParams();

    if (filters?.page) {
      params = params.set('page', filters.page.toString());
    }

    if (filters?.s) {
      params = params.set('s', filters.s);
    }

    if (filters?.sort) {
      params = params.set('sort', filters.sort);
    }

    return this.http.get<PaginatedProducts>(`${this.endpoint}/backend`, {params});
  }

  frontend(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.endpoint}/frontend`);
  }
}
