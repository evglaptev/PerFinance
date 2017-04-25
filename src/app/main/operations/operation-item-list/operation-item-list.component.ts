import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {IOperationsData} from '../../shared/ioperations-data';
import {Category} from '../../constants/category.enum';

@Component({
  selector: 'app-operation-item-list',
  templateUrl: './operation-item-list.component.html',
  styleUrls: ['./operation-item-list.component.css']
})
export class OperationItemListComponent implements OnInit {

  data: IOperationsData[];


  isVisible = true;
  currentPageData: IOperationsData[];
  currentPage=1;
  lengthData: number;
  elementsOnPage=8;
  pageNumber: number;
  listNumPage: number[];

  constructor(private categoryService: CategoryService) {

    //this.categoryService.update();  // Чтобы при инициализации компоненты событие повторилось, когда совершена подписка
  }

  changePage(numPage) {
    this.currentPage = numPage;
    this.updateCurrentPageData();

  }

  updateListNumPage() {
    this.lengthData = this.data.length;
    console.dir('length filtered data: ' + this.lengthData);
    this.pageNumber = this.lengthData / this.elementsOnPage;
    this.listNumPage = [];
    for (let i = 1; i <= this.pageNumber; i++) {
      this.listNumPage.push(i);
    }
    console.dir(this.listNumPage);
  }

  ngOnInit() {
    console.dir('Operation list init');
    console.dir('run constructor operationsData');
    this.categoryService.getOperationsListForCurrentCategory().subscribe(val => {
      this.data = val;

      this.updateListNumPage();
      this.updateCurrentPageData();
      this.isVisible = true;
      console.dir('Filtered data:');
      console.dir(this.data);
    });
  }

  updateCurrentPageData() {
    this.currentPageData = this.data.splice(this.elementsOnPage * (this.currentPage - 1), this.elementsOnPage - 1);

  }

}
