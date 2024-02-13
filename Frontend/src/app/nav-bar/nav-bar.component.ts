import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
onLogout() {
  console.log("logout successful");
 localStorage.removeItem('token');
}

  loggedIn(){
    return localStorage.getItem('token');  //in case user logged in it contains a value otherwise undefined
  }
}
