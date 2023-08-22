import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Signup } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }

  userSignup(data:Signup){
    // console.warn("service called");
    return this.http.post(`http://localhost:3000/seller`,data)
  }
}
