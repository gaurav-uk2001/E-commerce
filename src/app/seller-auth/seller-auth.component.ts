import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Signup } from '../data-type';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

constructor(private seller:SellerService ,  private router:Router){}

showLogin=false;
authError : any ='';

ngOnit():void{
  this.seller.reloadSeller()
}

signUp(data:Signup):void{
this.seller.userSignup(data);
console.log(data);

}

login(data:Signup):void{
  this.authError='';
  // this.seller.userSignup(data);
  // console.log(data);
  this.seller.userLogin(data);
  this.seller.isLoginError.subscribe((isError)=>{
    if(isError){
      this.authError="Email or Password is not correct"
    }
  })
  }

openLogin(){
 this.showLogin = true;
}

openSignUp(){
  this.showLogin = false;
}
}
