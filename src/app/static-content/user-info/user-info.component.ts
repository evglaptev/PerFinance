import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {IUserInfo} from "../../shared/iuser-info";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userInfo: IUserInfo;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getInfoAboutCurrentUser()
      .subscribe(val => {
        if (!(val == null && typeof val === 'undefined'))
        {
          this.userInfo = val;
          localStorage.setItem('currentId', val.accountNumber);
        }
      });
  }


}
