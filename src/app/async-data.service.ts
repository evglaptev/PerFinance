import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AsyncDataService {
   BASE_URL = 'http://188.255.20.77:81/perFinance/api/Data';
  constructor(private http: Http) {
    // this.http = http;
  }

  getDataByName(name) {
    return this.http.get(`${this.BASE_URL}?userName=${name}`);
  }

}
