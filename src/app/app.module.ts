import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { PeriodItemListComponent } from './static-content/period-item-list/period-item-list.component';
import { OperationItemListComponent } from './dynamic-content/operations/operation-item-list/operation-item-list.component';
import { OperationItemComponent } from './dynamic-content/operations/operation-item/operation-item.component';
import { CategoryItemListComponent } from './static-content/category-item-list/category-item-list.component';
import {DataService} from './services/data.service';
import { StaticOfPeriodComponent } from './dynamic-content/static-of-period/static-of-period.component';
import { PageListComponent } from './dynamic-content/operations/pages/page-list/page-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { PieComponent } from './dynamic-content/static-of-period/pie/pie.component';
import {CategoryService} from './services/category.service';
import {PeriodService} from './services/period.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {routing} from './app.routing';
import { UserInfoComponent } from './static-content/user-info/user-info.component';
import {GroupService} from './services/group.service';
import { TransferComponent } from './dynamic-content/transfer/transfer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogOutComponent } from './static-content/log-out/log-out.component';
import { TransferButtonComponent } from './static-content/transfer-button/transfer-button.component';


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
    NotFoundComponent,
    LogOutComponent,
    TransferButtonComponent
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
