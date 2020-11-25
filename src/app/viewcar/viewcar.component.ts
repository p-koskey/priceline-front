import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../_services/user.service';
import {Observable} from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-viewcar',
  templateUrl: './viewcar.component.html',
  styleUrls: ['./viewcar.component.css']
})
export class ViewcarComponent implements OnInit {
  private routeSub: Subscription;
  bookingForm: FormGroup;
  form:any = {};
  loading = false;
 submitted = false;
  errorMessage = '';
  constructor(private route: ActivatedRoute , private usr : UserService, private formBuilder:FormBuilder) { }
  car :any;
  LoginStatus$ : Observable<boolean>;
  ngOnInit() {
    this.LoginStatus$ = this.usr.isLoggedIn;
    this.bookingForm = this.formBuilder.group({
      cell_no: [''],      
      address: [''],
      startdate: [''],
      returndate:[''],
    
    })
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.usr.viewCar(params['id'])
      .subscribe(
        data => {
          this.car= data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    });
  }
    
  get f() { return this.bookingForm.controls; }
  onSubmit(){
    this.submitted = true;

      // reset alerts on submit
      // this.alertService.clear();

      // stop here if form is invalid
      if (this.bookingForm.invalid) {
          return;
      }

      this.loading = true;
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
    this.usr.bookCar(params['id'])
  });

}
ngOnDestroy() {
  this.routeSub.unsubscribe();
}
}

