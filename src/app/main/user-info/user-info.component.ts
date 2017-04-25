import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {IUserInfo} from "../shared/iuser-info";

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
      .subscribe(val => this.userInfo = val);
  }


}
