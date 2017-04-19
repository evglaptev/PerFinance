
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {IOperationsData} from './shared/ioperations-data';

@Injectable()
export class AsyncDataService {
  BASE_URL = 'http://188.255.20.77:81/perFinance/api/Data';

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

}
