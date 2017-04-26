
import {RouterModule, Routes} from "@angular/router";
import {LogInComponent} from "./log-in/log-in.component";
import {AuthGuard} from "./guards/auth.guard";
import {OperationItemListComponent} from "./main/operations/operation-item-list/operation-item-list.component";
import {StaticOfPeriodComponent} from "./main/static-of-period/static-of-period.component";
const appRoutes: Routes = [
  {path: 'category', component: OperationItemListComponent, canActivate: [AuthGuard]},
  {path: 'statistics', component: StaticOfPeriodComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LogInComponent},
  {path: '**', redirectTo: 'category'}
];

export const routing = RouterModule.forRoot(appRoutes);
