import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserDetail } from './user-detail'
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData: UserDetail;
  private user: Subject<UserDetail>;
  constructor(private http: HttpClient) {
    this.user = new ReplaySubject<UserDetail>();
  }

  get(): Promise<UserDetail> {
    const promise = this.http.get<UserDetail>('assets/data/data.json')
      .pipe(map(e => { console.log('user loaded', e); return e }))
      .toPromise();
    promise.then(data => {
      console.log('user load then');
      this.user.next(data);
      this.userData = data;
    });
    return promise;
  }

  getUser(): Observable<UserDetail> {
    return this.user.asObservable();
  }

  getData(): UserDetail {
    return this.userData;
  }
}
