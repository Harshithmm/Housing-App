import { Component } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  loggedInUserName: string = '';

  constructor(private service:AlertifyService){}
  onLogout() {
    console.log("logout successful");
    localStorage.removeItem('token');
    this.service.Success("Logout Successful");
  }

  loggedIn() {
    this.loggedInUserName = localStorage.getItem('token') ?? '';
    return localStorage.getItem('token');  //in case user logged in it contains a value otherwise undefined
  }
}
