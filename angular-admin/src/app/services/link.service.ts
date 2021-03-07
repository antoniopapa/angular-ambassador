import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Link} from '../interfaces/link';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  constructor(private http: HttpClient) {
  }

  all(id: number): Observable<Link[]> {
    return this.http.get<Link[]>(`${environment.api}/users/${id}/links`);
  }
}
