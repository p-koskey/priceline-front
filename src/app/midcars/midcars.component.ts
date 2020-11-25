import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-midcars',
  templateUrl: './midcars.component.html',
  styleUrls: ['./midcars.component.css']
})
export class MidcarsComponent implements OnInit {
  midcars:any;
  constructor(private userService: UserService) { }
  LoginStatus$ : Observable<boolean>;
  ngOnInit(){
    this.LoginStatus$ = this.userService.isLoggedIn;
    this.retrieveMidCars();
  }
  retrieveMidCars(){
    this.userService.midcars()
      .subscribe(
        data => {
          this.midcars = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
