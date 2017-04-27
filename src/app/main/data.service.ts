import { Injectable } from '@angular/core';
import {IOperationsData} from './shared/ioperations-data';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Observable, Subject} from 'rxjs';
import {IUserInfo} from './shared/iuser-info';

@Injectable()
export class DataService {
  data: IOperationsData[];

   BASE_URL = 'http://188.255.20.77:81/perFinance/api/';
  // sub = new Subject<boolean>();
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
    console.dir('getInfoAboutUser');
    return this.http.get(`${this.BASE_URL}UserInfo?userName=${name}`)
      .map(val => {
        console.dir(val);
        return val.json();
      });

  }



  getInfoAboutCurrentUser() {

    return this.getInfoAboutUser(localStorage.getItem('currentUser'));
  }

  getDataByName(name: string): Observable<IOperationsData[]> {
    return this.http.get(`${this.BASE_URL}Data?userName=${name}`)
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

    return this.sendTransferFromUser(localStorage.getItem('currentUser'), to, value);

  }

  private sendTransferFromUser(from: string, to: string, value: number): Observable<boolean> {
   const body = JSON.stringify(DataService.createTransferItem(from, to, value));
    console.dir(body);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.post(`${this.BASE_URL}Transfer`, body, options )
      .map(val => {
        console.dir(val.json());
       return val.json();
      });
  }




}


