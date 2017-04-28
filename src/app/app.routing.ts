
import {RouterModule, Routes} from '@angular/router';
import {LogInComponent} from './log-in/log-in.component';
import {AuthGuard} from './guards/auth.guard';
import {OperationItemListComponent} from './dynamic-content/operations/operation-item-list/operation-item-list.component';
import {StaticOfPeriodComponent} from './dynamic-content/static-of-period/static-of-period.component';
import {TransferComponent} from './dynamic-content/transfer/transfer.component';
import {NotFoundComponent} from "./not-found/not-found.component";
const appRoutes: Routes = [
  {path: 'my', children: [

    {path: '', component: OperationItemListComponent, canActivate: [AuthGuard], pathMatch:'full'},
    {path: 'category', component: OperationItemListComponent, canActivate: [AuthGuard]},
    {path: 'statistics', component: StaticOfPeriodComponent, canActivate: [AuthGuard]},
    {path: 'transfer', component: TransferComponent, canActivate: [AuthGuard]}
  ]},
  {path: '', redirectTo: 'my', canActivate: [AuthGuard], pathMatch:'full'},
  {path: 'login', component: LogInComponent},
  {path: '**', component: NotFoundComponent }

];


export const routing = RouterModule.forRoot(appRoutes);
