
import {RouterModule, Routes} from "@angular/router";
import {LogInComponent} from "./log-in/log-in.component";
import {MainComponent} from "./main/main.component";
import {AuthGuard} from "./guards/auth.guard";
const appRoutes: Routes = [
  {path: '', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LogInComponent},
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
