import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserDetail } from './user-detail'
import { Observable, of, empty, BehaviorSubject, Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: Subject<UserDetail>;
  constructor(private http: HttpClient) {
    this.user = new ReplaySubject<UserDetail>();
  }

  get(): void {
    this.http.get<UserDetail>('assets/data/data.json').subscribe(res => {
      this.user.next(res);
    });
  }

  getUser(): Observable<UserDetail>{
    return this.user.asObservable();
  }
}
