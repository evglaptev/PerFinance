
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import {AuthService} from "../auth.service";
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (!this.auth.isAutorize()) {
      this.router.navigate(['login']);
      console.dir('Не авторизован');
      return false;
    } else {
      console.dir('Авторизован');
      return true;
    }

  }


  constructor(private router: Router, private auth: AuthService) {
  }
}
