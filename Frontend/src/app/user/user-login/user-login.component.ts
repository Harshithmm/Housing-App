import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  constructor(private authUser: AuthService,
    private alertifyService:AlertifyService) { }
  onLogin(loginForm: NgForm) {
    const token = this.authUser.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('token',token.userName)
      console.log(loginForm.value);
      this.alertifyService.Success("Login Successful");
    }
    else{
      this.alertifyService.Error("Wrong username or password");
    }
  }
}
