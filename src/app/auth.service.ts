import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {
  }

  login(user: string, password: string) {

    if (user === password) {
      localStorage.setItem('currentUser', user);
      console.dir('в localStorage[user]: ' + localStorage.getItem('user'));
      return true;
    }
    return false;
  }

}
