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

ngOnit():void{
  this.seller.reloadSeller()
}

signUp(data:Signup):void{
this.seller.userSignup(data);
}
}
