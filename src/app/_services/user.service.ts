
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { User } from '../Models/user';
import { map, catchError } from 'rxjs/operators';
import {Router} from '@angular/router';

const API_URL = 'https://pricelineapi.herokuapp.com/api/';

const headers = new HttpHeaders({'content-type': 'application/json', 'Authorization': 'Bearer ' +  localStorage.getItem('jwt') });
const options = { headers: headers };

@Injectable({
  providedIn: 'root'
})

export class UserService {
username:string;
  constructor(private http: HttpClient, private router:Router) { }
  private loginStatus = new BehaviorSubject <boolean>(this.checkLoginStatus());
  private UserName = new BehaviorSubject <string>(localStorage.getItem('username'));
  private UserRole = new BehaviorSubject <string>(localStorage.getItem('userRole'));

     register(user: User) {
      return this.http.post(`https://pricelineapi.herokuapp.com/api/register/`, user);
    }
  
  login(username, password) {
    return this.http.post<any>(`https://pricelineapi.herokuapp.com/api/login/`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('currentUser', JSON.stringify(user.id));
        if (user && user.access)
        {

          this.loginStatus.next(true);
          localStorage.setItem('loginStatus', '1');
          localStorage.setItem('username', user.username);
          localStorage.setItem('expiration', user.expiration);
          localStorage.setItem('userRole', user.userRole);
          localStorage.setItem('jwt', user.access);
          this.UserName.next(localStorage.getItem('username'));
          this.UserRole.next(localStorage.getItem('userRole'));
        }
        // this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
          this.loginStatus.next(false);          
          localStorage.removeItem('jwt');
          // localStorage.removeItem('token');
          localStorage.removeItem('userRole');
          localStorage.removeItem('username');
          localStorage.removeItem('expiration');
          localStorage.setItem('loginStatus','0');

          this.router.navigate(['/login']);
          console.log("Logged out successfully")
  }

 
  getUser() {
    // add authorization header with jwt token
    
    return this.http.get('https://pricelineapi.herokuapp.com/api/user', options);
}
viewCar(car_id: number){
  return this.http.get(`https://pricelineapi.herokuapp.com/api/car/${car_id}`);

}

bookCar(car_id: number){
  let body = '"cell_no":"cell_no","address":"address","startdate":"startdate","returndate":"returndate"'
  
  return this.http.post(`https://pricelineapi.herokuapp.com/api/${car_id}/bookcar/`,body, options).subscribe(
    data => {
      console.log(data);
      console.log("Booked");
      
    },
    err => {
      console.log(err);
    }
  );


}

  smallcars(){
    return this.http.get(`https://pricelineapi.herokuapp.com/api/smallcars`);
  }
  midcars(){
    return this.http.get(`https://pricelineapi.herokuapp.com/api/midcars`);
  }
  largecars(){
    return this.http.get(`https://pricelineapi.herokuapp.com/api/largecars`);
  }
  ambulance(){
    return this.http.get(`https://pricelineapi.herokuapp.com/api/ambulance`);
  }

 checkLoginStatus(): boolean
 {
   let loginCookie = localStorage.getItem("loginStatus");
   if(loginCookie == "1")
   {
     return true;
   }
 }

 get isLoggedIn()
 {
   return this.loginStatus.asObservable();
 }

 get currentUserName()
 {
   
   return this.UserName.asObservable();
 }

 get currentUserRole()
 {
   return this.UserRole.asObservable();
 }
}

