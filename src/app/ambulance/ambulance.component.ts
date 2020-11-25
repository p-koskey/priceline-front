import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.css']
})
export class AmbulanceComponent implements OnInit {
  ambulance:any;
  constructor(private userService: UserService) { }
  LoginStatus$ : Observable<boolean>;
  ngOnInit(){
    this.LoginStatus$ = this.userService.isLoggedIn;
    this.retrieveAmbulance();
  }
  retrieveAmbulance(){
    this.userService.ambulance()
      .subscribe(
        data => {
          this.ambulance = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
