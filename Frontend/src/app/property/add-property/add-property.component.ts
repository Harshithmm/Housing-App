import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IpropertyBase } from '../../Models/IPropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent implements OnInit{
propertTypes:Array<string>=['House','Apartment','Duplex'];
furnishTypes:Array<string>=['Fully','semi','unfurnished'];

propertyView:IpropertyBase={
  Id: 0, Ptype: "", Name: "", Price: 0, SellRent: 0, Image: "",
  Ftype: '',
  BHK: 0,
  BuiltArea: 0,
  city: '',
  RTM: 0
};

addPropertyForm!:FormGroup;

constructor(private route: Router,
  private fb:FormBuilder) { }
  ngOnInit(): void {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm(){
    this.addPropertyForm= this.fb.group({
      SellRent:[null,Validators.required],
      Ptype:[null,Validators.required],
      PropertyName:[null,Validators.required],
      Price:[null,Validators.required],
      BuiltArea:[null,Validators.required]
    })
  }
  @ViewChild('formTabs',{ static: false }) formTabs?: TabsetComponent;    //add this from web and change to forTabs variable which is in  <tabset #formTabs>
  //in the html to access it,remove , { static: false } as default now will be false and add the function in the website and change variable name from staticTabs to forTabs
  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
    else
    console.log("select");   //used else bcz it was not ececuting the if condition
  }   
  
Back() {
  this.route.navigate(['/']);
}       
onSubmit() {
  console.log("form submitted");
  console.log(this.propertyView);
  console.log(this.addPropertyForm);
  }



}
