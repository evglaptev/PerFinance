import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {IOperationsData} from '../../../shared/ioperations-data';
import {PagesService} from '../../../services/pages.service';

@Component({
  selector: 'app-operation-item-list',
  templateUrl: './operation-item-list.component.html',
  styleUrls: ['./operation-item-list.component.css']
})
export class OperationItemListComponent implements OnInit {

   currentPageData: IOperationsData[];
  listNumPage: number[];

  constructor(public pagesService: PagesService) {
    this.pagesService.getCurrentPageData().subscribe(
        data => {
          this.currentPageData = data;
        });
    this.pagesService.getNumberOfPages().subscribe( number =>
      this.listNumPage = this.getArrayOfNumbersPage(number) );
  }
/* событие клика по номеру страницы */
  changePage(numPage) {
    this.pagesService.changePage(numPage);
   // this.listNumPage = this.pagesService.getArrayOfNumbersPage();
    console.dir('Клик по странице номер ' + numPage);
    console.dir(this.currentPageData);
  }


  private getArrayOfNumbersPage(numberOfPages: number): number[] {
    const listNumPage = [];
    for (let i = 1; i <= numberOfPages; i++) {
      listNumPage.push(i);
    }
    return listNumPage;
  }


  ngOnInit() {

  }

}
