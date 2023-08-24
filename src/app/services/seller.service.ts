import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Signup, login } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, private router: Router) { }

  isLoginError = new EventEmitter<boolean>(false);

  userSignup(data: Signup) {
    // console.warn("service called");
    this.http.post(`http://localhost:3000/seller`, data, { observe: 'response' }).subscribe((result) => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
      // console.warn('result', result);

    });

  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);

    }
  }

  userLogin(data: login) {
    console.log(data);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, 
    { observe: 'response' }).subscribe((result: any) => {
      
      
      console.warn('result', result);
      if(result && result.body && result.body.length){
        console.log("user logged in");    
        localStorage.setItem('seller', JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
      }
      else{
        console.warn("login failed");
        this.isLoginError.emit(true);
      }
      // json-server --watch db.json
    });
  }

}
