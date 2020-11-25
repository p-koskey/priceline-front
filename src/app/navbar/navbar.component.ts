import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user : any;
  constructor(private usr : UserService) { }
//has dollar sign bcoz it's an observable type
LoginStatus$ : Observable<boolean>;
  ngOnInit() {

    this.LoginStatus$ = this.usr.isLoggedIn;
    this.usr.getUser()
            .subscribe(users => {
              // console.log(users)
              this.user = users;
              console.log(this.user.username)
                return users;
            });
  }

  onLogout()
  {
    this.usr.logout();
  }
  } 
