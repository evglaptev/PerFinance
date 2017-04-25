
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from "@angular/core";
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean
    | Observable<boolean>
    | Promise<boolean> {
    console.dir('canActivate Auth');
    if (localStorage.getItem('currentUser'))
      return true;
    console.dir('routing');
    this.router.navigate(['/login']);
    return false;
  }

  constructor(private router: Router) {}
}
