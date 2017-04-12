import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeriodItemListComponent } from './periods/period-item-list/period-item-list.component';
import { OperationItemListComponent } from './operations/operation-item-list/operation-item-list.component';
import { OperationItemComponent } from './operations/operation-item/operation-item.component';
import { CategoryItemListComponent } from './categories/category-item-list/category-item-list.component';
import {AsyncDataService} from './async-data.service';
import {DataService} from './data.service';
import { StaticOfPeriodComponent } from './static-of-period/static-of-period.component';
import { PageListComponent } from './operations/pages/page-list/page-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PeriodItemListComponent,
    OperationItemListComponent,
    OperationItemComponent,
    CategoryItemListComponent,
    StaticOfPeriodComponent,
    PageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AsyncDataService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
