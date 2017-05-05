import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['/']);
  }

}
