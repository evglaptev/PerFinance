import {Injectable} from '@angular/core';
import {CategoryService} from './category.service';
import {PeriodService} from './period.service';
import {ICategoryName} from '../shared/icategory-name';
import {ReplaySubject} from 'rxjs/ReplaySubject';
@Injectable()
export class GroupService {
  private allCategoryList: ICategoryName[];
  private replaySubject: ReplaySubject<ICategoryName[]>;

  constructor(private periodService: PeriodService, private categoryService: CategoryService) {
    this.replaySubject = new ReplaySubject(1);
    this.allCategoryList = this.categoryService.getCategoryNameList();
    this.periodService.getCurrentPeriodData()
      .subscribe(data => {
        this.clearPrice();
        data.forEach(itemData => {
          this.allCategoryList.forEach(itemCat => {
            if (itemCat.id === itemData.type) {
              itemCat.price += itemData.price;
            }
          });
        });
        this.replaySubject.next(this.allCategoryList.filter(item => item.price));
      });
  }

  getGroupList() {
    return this.replaySubject.asObservable();
  }

  private clearPrice() {
    this.allCategoryList.forEach(item => item.price = 0);
  }
}
