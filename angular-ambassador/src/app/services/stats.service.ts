import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) {
  }

  stats(): Observable<any> {
    return this.http.get(`${environment.api}/stats`);
  }

  rankings(): Observable<any> {
    return this.http.get(`${environment.api}/rankings`);
  }
}
