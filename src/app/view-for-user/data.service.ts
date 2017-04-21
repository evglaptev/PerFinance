import { Injectable } from '@angular/core';
import {AsyncDataService} from './async-data.service';
import {IOperationsData} from './shared/ioperations-data';
import {Http, Response} from '@angular/http';
import {Observable, Subject} from "rxjs";

@Injectable()
export class DataService {
  data: IOperationsData[];
  currentName = 'Александр';
  isAuthorize = false;

  BASE_URL = 'http://188.255.20.77:81/perFinance/api/Data';
  sub = new Subject<boolean>();
  constructor(private http: Http) {
  }

  getDataByName(name: string): Observable<IOperationsData[]> {
    return this.http.get(`${this.BASE_URL}?userName=${name}`)
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

  logIn(name: string, password: string): Observable<boolean> {
    return this.sub.asObservable();
  }
  test(){
    this.sub.next(true);
  }


  getDataForCurrentUser(): Observable<IOperationsData[]> {
    //if (this.isAuthorize)
      return this.getDataByName(this.currentName);
  }

}


