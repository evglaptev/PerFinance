import { Injectable } from '@angular/core';
import {IOperationsData} from './shared/ioperations-data';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Observable, ReplaySubject, Subject} from 'rxjs/Rx';
import {from} from 'rxjs/observable/from';
//import {Rx} from 'rxjs/Rx';
import {IUserInfo} from './shared/iuser-info';
import {IntervalObservable} from "rxjs/observable/IntervalObservable";
import {combineLatest} from "rxjs/observable/combineLatest";

@Injectable()
export class DataService {
  data: IOperationsData[];
currentStatus:number;
   BASE_URL = 'http://188.255.20.77:81/perFinance/api/';
   sub = new ReplaySubject<IUserInfo>(1);
  static createTransferItem(from: string, to: string, balance: number) {
    return {
      from,
      to,
      balance
    };
  }
  constructor(private http: Http) {
  }
//  console.dir('getInfoAboutUser');

  private getInfoAboutUser(name: string): Observable<IUserInfo> {
    const request = this.http.get(`${this.BASE_URL}UserInfo?userName=${name}`)
    .map(val => {
      return val.json();
    });
  return  IntervalObservable.create(1000).switchMapTo(request);

    //console.dir(val);
    //this.sub.next(val.json());
 //   return IntervalObservable.create(1000).map(()=> {
//        return this.http.get(`${this.BASE_URL}UserInfo?userName=${name}`)
 //         .map(val => {
  //          val.json()
  //          console.dir(val);
 //          this.sub.next(val.json());
 //         }).subscribe();
 //     })



   // return this.http.get(`${this.BASE_URL}UserInfo?userName=${name}`)
    //  .map(val => {
    //    console.dir(val);
  //     return val.json();
  //    });

  }



  getInfoAboutCurrentUser() {

   // this.sub.next(val.json());
  //  combineLatest(IntervalObservable.create(1000), this.sub)
  //  .subscribe(val=>{
   //   console.dir("val");
   // });


  return this.getInfoAboutUser(localStorage.getItem('currentUser'));
   // return this.sub.asObservable();
 //   return IntervalObservable.create(1000).map(() => {
  //    return this.getInfoAboutUser(localStorage.getItem('currentUser'));
 //   });

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


