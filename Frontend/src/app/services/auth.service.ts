import { Injectable } from '@angular/core';
import { User1 } from '../Models/User1';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  authUser(user:any){
    let UserArray:User1[]=[];
    let arrayItems=localStorage.getItem('Users');
    if(arrayItems!=null){
      UserArray=JSON.parse(arrayItems);
      
    }
  return UserArray.find(u=>u.userName===user.userName && u.password===user.password);
  }
}
