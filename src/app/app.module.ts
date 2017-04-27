import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { PeriodItemListComponent } from './main/periods/period-item-list/period-item-list.component';
import { OperationItemListComponent } from './main/operations/operation-item-list/operation-item-list.component';
import { OperationItemComponent } from './main/operations/operation-item/operation-item.component';
import { CategoryItemListComponent } from './main/categories/category-item-list/category-item-list.component';
import {DataService} from './main/data.service';
import { StaticOfPeriodComponent } from './main/static-of-period/static-of-period.component';
import { PageListComponent } from './main/operations/pages/page-list/page-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { PieComponent } from './main/static-of-period/pie/pie.component';
import {CategoryService} from './main/services/category.service';
import {PeriodService} from './main/services/period.service';
import {AuthService} from "./auth.service";
import {AuthGuard} from "./guards/auth.guard";
import {routing} from "./app.routing";
import { UserInfoComponent } from './main/user-info/user-info.component';
import {GroupService} from "./main/services/group.service";
import { TransferComponent } from './content/transfer/transfer.component';
import { SharedContentComponent } from './shared-content/shared-content.component';
import { NotFoundComponent } from './not-found/not-found.component';


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
    PieComponent,
    UserInfoComponent,
    TransferComponent,
    SharedContentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [GroupService, DataService, CategoryService, PeriodService, AuthService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
