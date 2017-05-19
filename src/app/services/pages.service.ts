import { Injectable } from '@angular/core';
import {CategoryService} from './category.service';
import {IOperationsData} from '../shared/ioperations-data';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class PagesService {
  currentPage = 1;
  elementsOnPage = 32;
  currentCategoryData: IOperationsData[] = [];
  dataSubject: Subject<IOperationsData[]>;
  numberOfPageSubject: Subject<number>;
  constructor(public categoryService: CategoryService) {
    this.categoryService.getOperationsListForCurrentCategory().subscribe(val => {
    //  if (this.currentCategoryData !== val){}
      this.currentCategoryData = val;
      const numberOfPages = Math.ceil(val.length / this.elementsOnPage);
      console.dir(numberOfPages);
      this.changeNumberOfPages(numberOfPages);
      this.changePage(1);
    });
    this.numberOfPageSubject = new Subject();
    this.dataSubject = new Subject();
  }

  changePage(numPage: number) {
    this.currentPage = numPage;
    this.dataSubject.next(
      this.currentCategoryData
        .slice(
          this.elementsOnPage * (numPage - 1),
          this.elementsOnPage * numPage
      )
    );
  }

  getCurrentPageData(): Observable<IOperationsData[]> {
    return this.dataSubject.asObservable();
  }


  private changeNumberOfPages(numberOfPages: number) {
    console.dir(this.numberOfPageSubject);
    this.numberOfPageSubject.next(numberOfPages);
  }

  getNumberOfPages(): Observable<number> {
    return this.numberOfPageSubject.asObservable();
  }
}
