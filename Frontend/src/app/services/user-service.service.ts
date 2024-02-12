import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  addUser(user:User){
    let users=[];
    let individualUser=localStorage.getItem('Users');
    if(individualUser!=null){
      users=JSON.parse(individualUser);
      users.push(...[user]);
      // users=[users,...[user]]; not working
    }
    else{
      users=[user];
    }
    localStorage.setItem('Users',JSON.stringify(users));
  }

}
