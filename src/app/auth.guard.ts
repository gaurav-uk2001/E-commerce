import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SellerService } from './services/seller.service'; // Adjust the path accordingly

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private sellerService: SellerService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
   if(localStorage.getItem('seller')){
    return true;
  }

  return this.sellerService.isSellerLoggedIn;
    }
  }

