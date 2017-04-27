import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    console.dir('init app component');
   // this.authService.isAutorize().subscribe(status => {
    //  this.isAuthorize = status;
    //  console.dir(this.isAuthorize);
    //  console.dir('Autorize is: ');
   // }   );
  }
  isAuthorize(){return this.authService.isAutorize();
  }
  clickOnTransfer() {

    console.dir('TRANSFEEER');

    this.router.navigate(['my/transfer']);
  }

  // userName: string;
//  isTimePeriodView = false;
//  isOperationListView = false;

  // onCategoryClick() {
  //   console.dir('Click on Category');
  //   this.isTimePeriodView = false;
  //   this.isOperationListView = true;
  // }

  // onTimePeriodChange() {
  //   this.isOperationListView = false;
  //   this.isTimePeriodView = true;
  // }


}
