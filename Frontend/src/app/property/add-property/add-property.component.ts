import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { Iproperty } from '../../Models/IProperty.interface';
import { IpropertyBase } from '../../Models/IPropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent {
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

constructor(private route: Router) { }

  @ViewChild('Form') addPropertyFormByViewChild: NgForm | undefined;  //other way to get data
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
onSubmit(addPropertyFormByFormVariable: NgForm) {
  console.log("form submitted");
   console.log(addPropertyFormByFormVariable);
  console.log(this.addPropertyFormByViewChild?.value);
  console.log(this.propertyView);
  }



}
