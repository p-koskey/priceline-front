import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-largecars',
  templateUrl: './largecars.component.html',
  styleUrls: ['./largecars.component.css']
})
export class LargecarsComponent implements OnInit {
largecars:any;
constructor(private userService: UserService) { }
LoginStatus$ : Observable<boolean>;
  ngOnInit(){
    this.LoginStatus$ = this.userService.isLoggedIn;
  this.retrieveLargeCars();
}
retrieveLargeCars(){
  this.userService.largecars()
    .subscribe(
      data => {
        this.largecars = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

}
