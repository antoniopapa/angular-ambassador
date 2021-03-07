import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Link} from '../interfaces/link';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  constructor(private http: HttpClient) {
  }

  generate(data: any): Observable<Link> {
    return this.http.post<Link>(`${environment.api}/links`, data);
  }
}
