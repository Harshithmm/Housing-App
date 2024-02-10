import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit{
  registrationForm!: FormGroup;
  ngOnInit(): void {
    this.registrationForm=new FormGroup({
      userName:new FormControl('abc',[Validators.required]),
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      confirmPassword:new FormControl(null,[Validators.required]),
      mobile:new FormControl(null,[Validators.required,Validators.maxLength(8)])
    })
  }
  onSubmit() {
    console.log(this.registrationForm);
  }

}
