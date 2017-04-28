import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {map} from 'rxjs/operator/map';

@Injectable()
export class AuthService {
  private BASE_URL = 'http://188.255.20.77:81/perFinance/api/';

  constructor(private http: Http) {
  }

  login(name: string, password: string): Observable<boolean> {
    return this.getLoginStatus(name, password).do(status => {
      if (status) localStorage.setItem('currentUser', name);
    });
  }

  logOut() {
    localStorage.removeItem('currentUser');
  }

  isAutorize(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  private getLoginStatus(name: string, password: string): Observable<boolean> {
    const body = JSON.stringify({name, password});
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.post(`${this.BASE_URL}Auth`, body, options)
      .map(val => val.json());
  }
}
