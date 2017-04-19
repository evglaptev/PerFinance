import {Component, Input, OnInit} from '@angular/core';
import {IData} from '../../shared/idata';
import {isNumber} from 'util';
import {ICategoriesName} from '../../shared/icategories-name';

@Component({
  selector: 'app-operation-item-list',
  templateUrl: './operation-item-list.component.html',
  styleUrls: ['./operation-item-list.component.css']
})
export class OperationItemListComponent implements OnInit {

  _data: IData[];
  get data(): IData[] {
    return this._data;
  }
  @Input() set data(value: IData[]) {
    this._data = value;
    this.updateListNumPage();
    this.updateCurrentPageData();
  }

@Input() categoriesName: ICategoriesName[];


  currentPageData: IData[];
  currentPage: number;
  lengthData: number;
  elementsOnPage: number;
  pageNumber: number;
  listNumPage: number[];

  constructor() {
  }

  changePage(numPage) {
    this.currentPage = numPage;
    this.updateCurrentPageData();

  }
  updateListNumPage(){
    this.lengthData = this.data.length;
    console.dir('length filtered data: ' + this.lengthData);
    this.pageNumber = this.lengthData / this.elementsOnPage;
    this.listNumPage = [];
    for (let i = 1; i <= this.pageNumber; i++) {
      this.listNumPage.push(i);
    }
  }

  ngOnInit() {
    this.currentPage = 1;
    this.elementsOnPage = 8;
    this.updateListNumPage();
    this.updateCurrentPageData();
  }

  updateCurrentPageData() {
    this.currentPageData = [];
    this.currentPageData = this.data.splice(this.elementsOnPage * (this.currentPage - 1), this.elementsOnPage - 1);
  }

}
