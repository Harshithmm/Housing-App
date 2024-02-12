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
      mobile:new FormControl(null,[Validators.required,Validators.maxLength(10)])
    },{validators:this.matchingFields('password','confirmPassword')}
    );
  }

  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }

  get password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

  passwordMatchingValidator(fg:FormGroup):Validators{
    console.log(fg.get('password')?.value);
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ?{notmatched:false}:{notmatched:true};
  }

 matchingFields(field1: string, field2: string): any {
    return (form: FormGroup) => {
      if (form.controls[field1].value !== form.controls[field2].value) {
        return { notmatched: true };
      }
      return null;
    }
  }
  onSubmit() {
    console.log(this.registrationForm);
  }

}
