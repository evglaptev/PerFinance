import { Injectable } from '@angular/core';
import {AsyncDataService} from './async-data.service';
import {IData} from './shared/idata';
import {Response} from '@angular/http';

@Injectable()
export class DataService {

  data: IData[];

  constructor(private asyncDataService: AsyncDataService) {
  }

  getDataByName(name, callback) {
    this.asyncDataService
      .getDataByName(name)
      .subscribe((response: Response) => {
        this.data = (JSON.parse(
        response.text(), (key, val) => {
          if (key === 'time'){

            return new Date(Date.parse(val));
          }
            return val;
        }
      ));
        callback(this.data);

      });
  }

}
