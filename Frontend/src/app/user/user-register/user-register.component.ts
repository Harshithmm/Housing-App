import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../Models/user';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit{
  registrationForm!: FormGroup;
  user:User={userName:'',email:'',password:'',mobile:0};
  userSubmitted:boolean=false;         //used for giving error msg when submitting invalid form
  ngOnInit(): void {
    // this.registrationForm=new FormGroup({
    //   userName:new FormControl('abc',[Validators.required]),
    //   email:new FormControl(null,[Validators.required,Validators.email]),
    //   password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   confirmPassword:new FormControl(null,[Validators.required]),
    //   mobile:new FormControl(null,[Validators.required,Validators.maxLength(10)])
    // },this.matchingFields('password','confirmPassword')
    // );
     this.createRegistrationForm();
  }
constructor(private fb: FormBuilder,
  private service:UserServiceService,
  private alertifyService:AlertifyService){
  // this.registrationForm=fb.group({
  //   userName:[null,Validators.required],
  //   email:[null,[Validators.required,Validators.email]],
  //   password:[null,[Validators.required,Validators.minLength(8)]],
  //   confirmPassword:[null,Validators.required],
  //   mobile:[null,[Validators.required,Validators.maxLength(10)]]
  // },{Validators:this.matchingFields('password','confirmPassword')});
}
createRegistrationForm(){
  this.registrationForm=this.fb.group({
    userName:[null,Validators.required],
    email:[null,[Validators.required,Validators.email]],
    password:[null,[Validators.required,Validators.minLength(8)]],
    confirmPassword:[null,Validators.required],
    mobile:[null,[Validators.required,Validators.maxLength(10)]]
  },{Validators:this.matchingFields('password','confirmPassword')});
}

UserData():User{
  return this.user={
    userName:this.userName.value,
    email:this.email.value,
    password:this.password.value,
    mobile:this.mobile.value
  }
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
    this.userSubmitted=true;
    if(this.registrationForm.valid){
    // this.user=Object.assign(this.user,this.registrationForm.value);  //using this we can assign value of 1 method to another
    this.service.addUser(this.UserData());
    this.registrationForm.reset();  //reset the form after submit
    this.userSubmitted=false;           //used if user submit valid data then the error should not come after submitting
    this.alertifyService.Success("Congrats,you are successfully registred");
    }
    else{
    this.alertifyService.Error("Kindly provide required details");
    }
  }
  
}
