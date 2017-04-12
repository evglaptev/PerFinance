import {Component, Input, OnInit} from '@angular/core';
import {IData} from '../../shared/idata';
import {isNumber} from 'util';

@Component({
  selector: 'app-operation-item-list',
  templateUrl: './operation-item-list.component.html',
  styleUrls: ['./operation-item-list.component.css']
})
export class OperationItemListComponent implements OnInit {
  @Input() data: IData[];
  currentPageData: IData[];
  currentPage: number;
  lengthData: number;
  elementsOnPage: number;
  pageNumber: number;
  listNumPage:number[];

  constructor() {
  }

  changePage(numPage) {
    this.currentPage = numPage;
    this.updateCurrentPageData();

  }

  ngOnInit() {
    this.currentPage = 1;
    this.lengthData = this.data.length;
    this.elementsOnPage = 8;
    this.pageNumber = this.lengthData / this.elementsOnPage;
    this.listNumPage = [];
    for (let i = 1; i <= this.pageNumber; i++) {
      this.listNumPage.push(i);
    }
    this.updateCurrentPageData();
  }

  updateCurrentPageData() {
    this.currentPageData=[];
    this.currentPageData = [];
    this.currentPageData = this.data.splice(this.elementsOnPage*(this.currentPage - 1), this.elementsOnPage);
    console.dir(this.currentPageData);
    console.dir(this.elementsOnPage*(this.currentPage - 1));
    console.dir(this.currentPage * this.elementsOnPage);
  }

}
