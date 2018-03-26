import { Injectable } from '@angular/core';
import {IOperationsData} from '../shared/ioperations-data';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {IUserInfo} from '../shared/iuser-info';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';

@Injectable()
export class DataService {
 private data: IOperationsData[];
  private BASE_URL = 'http://85.30.248.254:81/perFinance/api/';
  static createTransferItem(from: string, to: string, balance: number) {
    return {
      from,
      to,
      balance
    };
  }
  constructor(private http: Http) {
  }

  private getInfoAboutUser(name: string): Observable<IUserInfo> {
    const request = this.http.get(`${this.BASE_URL}UserInfo?userName=${name}`)
    .map(val => {
      return val.json();
    });
  return  IntervalObservable.create(2000).switchMapTo(request);
  }

  accNumberIsCorrect(accNumber: string): Observable<boolean> {
    const request = this.http.get(`${this.BASE_URL}accNumberIsCorrect?accNumber=${accNumber}`)
      .map(val => {
        return val.json();
      });
    return request;

  }

  getInfoAboutCurrentUser() {
  return this.getInfoAboutUser(localStorage.getItem('currentUser'));
  }
  getDataByName(name: string): Observable<IOperationsData[]> {
    const query$ = this.http.get(`${this.BASE_URL}Data?userName=${name}`);
    return query$
      .map((response: Response) => response.text())
      .map((data: string) => {
        return JSON.parse(data, (key, val) => {
          if (key === 'time') {
            return new Date(Date.parse(val));
          }
          return val;
        });
      });
  }
  getDataForCurrentUser(): Observable<IOperationsData[]> {
    return this.getDataByName(localStorage.getItem('currentUser'));
  }
  sendTransferFromCurrentUser(to: string, value: number, descrip: string): Observable<boolean> {
    return this.sendTransferFromUser(localStorage.getItem('currentId'), to, value);
  }

  private sendTransferFromUser(from: string, to: string, value: number): Observable<boolean> {
   const body = JSON.stringify(DataService.createTransferItem(from, to, value));
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    console.dir(body);
    return this.http.post(`${this.BASE_URL}Transfer`, body, options )
      .map(val => val.json());
  }
}


