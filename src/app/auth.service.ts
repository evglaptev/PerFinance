import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {map} from 'rxjs/operator/map';

@Injectable()
export class AuthService {

  BASE_URL = 'http://188.255.20.77:81/perFinance/api/';
  isAuth: ReplaySubject<string>;

  constructor(private http: Http) {
    this.isAuth = new ReplaySubject(1);
  }

  login(name: string, password: string): Observable<boolean> {

  return  this.getLoginStatus(name, password).do(status =>{
    console.dir('name getLoginStatus');
    console.dir(name);
      if (status)   localStorage.setItem('currentUser',name);// this.isAuth.next(name);
    } ).map(item=> {
      console.dir(!!item);
      return !!item});
    //return this.isAuth.asObservable();

  }

  private getLoginStatus(name: string, password: string): Observable<boolean> {

    const body = JSON.stringify({name, password});
    console.dir(body);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.post(`${this.BASE_URL}Auth`, body, options)
      .map(val => {
        return val.json();
      });

  }

  isAutorize(): boolean {
    return !!localStorage.getItem('currentUser');
  }

}
