import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { PeriodItemListComponent } from './view-for-user/periods/period-item-list/period-item-list.component';
import { OperationItemListComponent } from './view-for-user/operations/operation-item-list/operation-item-list.component';
import { OperationItemComponent } from './view-for-user/operations/operation-item/operation-item.component';
import { CategoryItemListComponent } from './view-for-user/categories/category-item-list/category-item-list.component';
import {AsyncDataService} from './view-for-user/async-data.service';
import {DataService} from './view-for-user/data.service';
import { StaticOfPeriodComponent } from './view-for-user/static-of-period/static-of-period.component';
import { PageListComponent } from './view-for-user/operations/pages/page-list/page-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { ViewForUserComponent } from './view-for-user/view-for-user.component';
import { PieComponent } from './view-for-user/static-of-period/pie/pie.component';
import {CategoryService} from './view-for-user/services/category.service';
import {PeriodService} from './view-for-user/services/period.service';

@NgModule({
  declarations: [
    AppComponent,
    PeriodItemListComponent,
    OperationItemListComponent,
    OperationItemComponent,
    CategoryItemListComponent,
    StaticOfPeriodComponent,
    PageListComponent,
    LogInComponent,
    ViewForUserComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [AsyncDataService, DataService, CategoryService, PeriodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
