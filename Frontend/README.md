assets in angular.json ??
The assets array is used to list files or folders that you want to copy as-is when you build your project. These files are not processed by the Angular's build system. They are directly copied to the output directory, maintaining the same directory structure.

execute ng serve if we change something in angular.json etc..  bcz they r loaded at first

---------------------------------------------------------------------------------------
@Injectable({
  providedIn: 'root'
})
this tells that the service is injected in root component hence we have to register it in providers array in app.module.ts

when u provide a service at root level angular craetes a single shared instance of service meaning it is available for whole application

-----------------------------------------------------------------------------
.pipe(map=>)   map operators allows passing some data to a function and return a new data that automatically we rewrite into a observable so we can subsribe to it
----------------------------------------------------------------------------------------------
          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" aria-current="page" routerLink="/">Buy</a>
          </li>

    routerLinkActive="active"  :make the link active but path should be differnent if slightly similar then it make other links also active
    hence we add 
       [routerLinkActiveOptions]="{ exact: true }"
       so that it should match the exact



       -------------------------------------------------------------------------------
         constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.propertyId=this.route.snapshot.params['id'];  //should be same as the id in /property-dateail/:id and it is case sensetive
  }

  ----------------------------------------------------------------------------------------

<button (click)="Back()" class="btn btn-primary">Back</button>
  constructor(private route:Router){}
Back() {
  this.route.navigate(['/']);
}

To navigate to differnt page if used in ngOnint() u can go to a diff component at the end of the lifecycle of the component



--------------------------------------------------------

<button routerLink="property-detail/1" class="btn btn-primary">1</button>  
<button routerLink="property-detail/2" class="btn btn-primary">2</button>
<button routerLink="property-detail/3" class="btn btn-primary">3</button> 

in angular this does not work if we are in the property-detail component and use the above like ex:localhost4200/property-detail if we use here it doesnt work only url changes

https://www.youtube.com/watch?v=VQnZMWTFn88&list=PL_NVFNExoAxclqXo9fLAeP0G2Qp56Fu8C&index=14

hence

    this.route.params.subscribe(
        params=>{
            this.propertyId=params['id'];
        }
    )
    
    we use the abve code to fix that problem

ytlink:
    https://www.youtube.com/watch?v=VQnZMWTFn88&list=PL_NVFNExoAxclqXo9fLAeP0G2Qp56Fu8C&index=14


----------------------------------------------------------------------------------

  {
    path:"**",
    component:PropertyListComponent   //This will redirect to PropertyListComponent in this case if any wrong urls are typedafter localhost
  },

  --------------------------------------------------------

      <img *ngIf="property.Image" class="houseimg" src="../../../assets/Images/{{property.Image}}.jpg" alt="Not Found">
    <img *ngIf="!property.Image" class="houseimg" src="../../../assets/Images/House_default.jpg" alt="Not Found">

    -------------------------------------------------------------------------------------

    Making Buy and Rent items seperate

    https://www.youtube.com/watch?v=VQnZMWTFn88&list=PL_NVFNExoAxclqXo9fLAeP0G2Qp56Fu8C&index=14


    ----------------------------------------------------------------------------------------------

            <form (ngSubmit)="onSubmit(Form)" #Form="ngForm">
            <div class="form-group col-12">
                <label for="name">Name</label>
                <input type="text" class="form-control" ngModel name="propertyName">
            </div>

  the above is a method to pass data from html fields to typescript file through onSubmit(Form) method

  also we ca do [(ngModel)]="propertyName" name="propertyName" but for this we have to define a variable in the ts file

  -------------------------------------------------------------------------------------------------

                <button [disabled]="!Form.valid" type="submit" class="btn btn-primary m-2">Submit</button>

this only works when fields have attributes like required etc..
ex:
                <input type="text" class="form-control" ngModel name="propertyName" required>  bcz it needs some validation


----------------------------------------------------------------------------------------------------------

bydefault angular adds classes like ng-valid,ng-invalid at runtime if we add fields like requred like in the above hence
we can make the border of the Name field red or any color by giving style for ng-invalid class so in runtime it turns to red
ex:
.ng-invalid.ng-touched {
    border-color: red;
}
the above executes when both the classes are called at the runtime together hence after once touch it becomes red

-------------------------------------------------------------------------------------------------------------------------
for a warning that can be show below individual input boxes we can
                <span *ngIf="(!Form.valid && Form) && (Form.touched) " class="text-danger">Please Provide a Name</span>
but the above will check for entire form hence
            <div class="form-group col-12">
                <label for="name">Name</label>
                <input type="text" class="form-control" ngModel name="propertyName" required #propName="ngModel">
                <span *ngIf="(!propName.valid) && (propName.touched) " class="text-danger">Please Provide a Name</span>
            </div>

-------------------------------------------------------------------------------------------------------------------------

@ViewChild('Form') addPropertyForm: NgForm | undefined;

the above shows other way of getting the data in this case from html tto ts and form data in this case.

-------------------------------------------------------------------------------------------------------------------------

validators angular

https://angular.io/api/forms/Validators

------------------------------------------------------------------------------------------------------------------------

                <label for="name">Name</label>
                <input type="text" class="form-control" ngModel name="propertyName" required #propName="ngModel" minlength="5">
                <span *ngIf="(!propName.valid) && (propName.touched) " class="text-danger">
                <span *ngIf="propName.errors?.['required']" class="text-danger">Please Provide a Name</span>
                <span *ngIf="propName.errors?.['minlength']" class="text-danger">Name should contain at least 5 letters</span>
            </span>

  for giving 2 error messages one for length and one for blank field

  https://www.youtube.com/watch?v=UJjxRNv-qVs&list=PL_NVFNExoAxclqXo9fLAeP0G2Qp56Fu8C&index=16


  ----------------------------------------------------------------------------------------------------------------------------

  the add-property form was a template driven form but the register form is reactive form

----------------------------------------------------------------------------------------------------------------------

@import 'assets/forms.css';

for global import for every form

------------------------------------------------------------------------------------------------------------------------------------

              <span class="text-danger" *ngIf="!registrationForm.get('userName')?.valid && registrationForm.get('userName')?.touched">
                Please provide a valid name</span>

      instead of the above we can define a get method in ts file like
        get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  and above code will be more readable like

                <span class="text-danger" *ngIf="!userName?.valid && userName?.touched">
                Please provide a valid name</span>

--------------------------------------------------------------------------------------------------------------------------------------

          <div class="form-group col-12">
            <label for="cpassword" class="form-label">Confirm Password</label>
            <input type="text" class="form-control" formControlName="confirmPassword" name="confirmPassword">
            <span class="text-danger" *ngIf="!confirmPassword?.valid && confirmPassword?.touched">
              <span *ngIf="confirmPassword.hasError('required')">
                Please confirm password
              </span>
            </span>
            <span *ngIf="registrationForm.hasError('notmatched') && confirmPassword.valid">  <!--this error is checked in form level not control level bcz this 
                                                                                              error will get in FormGroup level and also seperate span bcz its 
                                                                                              only executed when first conditon fails-->
              password not matched
            </span>
          </div>

  
  more info reactive forms:
  https://www.youtube.com/watch?v=WNSjvhJKaIA&list=PL_NVFNExoAxclqXo9fLAeP0G2Qp56Fu8C&index=18

--------------------------------------------------------------------------------------------------------------------------------------------

  onSubmit() {
    console.log(this.registrationForm);
    this.userSubmitted=true;
    if(this.registrationForm.valid){
    // this.user=Object.assign(this.user,this.registrationForm.value);  //using this we can assign value of 1 method to another
    this.service.addUser(this.UserData());
    this.registrationForm.reset();  //reset the form after submit
    this.userSubmitted=false;           //used if user submit valid data then the error should not come after submitting
    }
  }

  ---------------------------------------------------------------------------------------------------------------------------------------------

  
  loggedIn(){
    return localStorage.getItem('tokem');  //in case user logged in it contains a value otherwise undefined
  }

  --------------------------------------------------------------------------------------------------------------------------------------------------

  its not good to use jquery from bootstrap (js module which we ) website to angular hence we use ngx bootstrap
this contains most of bootstrap resources that are available for angular and u dont need to use jquery for this it uses existing bootstrap markup

------------------------------------------------------------------------------------------------------------------------------------------------------

           <div class="form-group col-12">
                            <p>BHK</p>
                            <div class="btn-group" btnRadioGroup>
                                <label
                                *ngFor="let bhk of [1,2,3,4]"
                                class="btn btn-outline-primary" 
                                [btnRadio]="bhk" tabindex="0" role="button" name="SellRent">{{bhk}}</label>
                                <!-- [btnRadio]="bhk" : property binding for giving values where btnRadio is value property which we can find in normal radio buttions -->
                            </div>


-------------------------------------------------------------------------------------------------------------------------

<p>{{property | json}}</p>

---------------------------------------------------------------------------------------------------------------------------------------------------------------

 <tab heading="Basic info" ngModelGroup="BasicInfo" #BasicInfo="ngModelGroup">

 for getting tab values,status etc just like that of a form

 ----------------------------------------------------------------------------------------------------------------------------

  <div class="btn-group" btnRadioGroup [(ngModel)]="propertyView.Ftype" [ngModelOptions]="{standalone:true}" name="Ftype">

  here [ngModelOptions]="{standalone:true}" is used to say that it doesnot belong to FormGroup in add-property.component.html some filds are craeted using reactive and some using template driven

the above is useful for seeing data which is in json format to point out the errors

--------------------------------------------------------------------------------------------------------------------------------------------------------------

 <tab heading="Basic info" formGroupName="BasicInfo">  <!--first tab belongs to basic info group which is in defined in ts file ||ly second tab-->

  <tab heading="Pricing and Area" formGroupName="PriceInfo">

  the groupname are in 
    CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({   
        SellRent: [null, Validators.required],
        Ptype: [null, Validators.required],
        PropertyName: [null, Validators.required],
      }),
      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required]
      }),
    })
  }

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

for disabling the next button of the for we can use
<button type="button" class="btn btn-block btn-primary" [disabled]="addPropertyForm.controls['BasicInfo'].invalid"
                                        (click)="selectTab(1)">Next</button>

-------------------------------------------------------------------------------------------------------------------------------------------------

for 2 way binding there should be a name field

[(ngModel)]="propertyView.Name" name="Name"

--------------------------------------------------------------------------------------------------------------------------------------------------
if else in angilar
                                    <div class="text-danger"
                                        *ngIf="(Price.invalid) && (Price.touched || NextIsClicked)">
                                        Please Provide the
                                        <span *ngIf="SellRent.value==1;else ShowRent">price</span>
                                        <ng-template #ShowRent>rent</ng-template>
                                    </div>

-------------------------------------------------------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @ViewChild('Form') addPropertyForm: NgForm | undefined;  //other way to get data
////////////////////////////////////////////////////
              <span class="text-danger" *ngIf="email.errors?.['email']">     <!-- not working-->
                Please Provide a Valid email</span>
            </span>
////////////////////////////////////////////////////

btn-block not working in add-property.html

                        <div class="form-group col-12">
                            <button type="button" class="btn btn-block btn-primary" (click)="selectTab(1)">Next</button>
                        </div>

                        ////////////////////////////////////

app-property.css

/* the below not working it should make the radio button in the add-property form a bit round */
.btn-group > label [ng-reflect-btn-radio]{
    border-radius: 44px;
    padding: 0 15px;
    line-height: 30px;
}                