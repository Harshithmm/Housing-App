import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IpropertyBase } from '../../Models/IPropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent implements OnInit {
  propertTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'semi', 'unfurnished'];

  propertyView: IpropertyBase = {
    Id: 0, Ptype: "", Name: "", Price: 0, SellRent: 0, Image: "",
    Ftype: '',
    BHK: 0,
    BuiltArea: 0,
    city: '',
    RTM: 0
  };

  NextIsClicked: boolean = false;
  addPropertyForm!: FormGroup;

  constructor(private route: Router,
    private fb: FormBuilder) { }
  ngOnInit(): void {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        SellRent: ['1', Validators.required],   //default given 1 to represent Sell
        BHK: [null, Validators.required],
        Ptype: [null, Validators.required],
        Ftype: [null, Validators.required],
        Name: [null, Validators.required],
        City: [null, Validators.required]
      }),
      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required],
        CarpetArea: [null],
        Security: [null],
        Maintenance: [null],
      }),
      AddressInfo: this.fb.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address: [null, Validators.required],
        LandMark: [null],
      }),

      OtherInfo: this.fb.group({
        RTM: [null, Validators.required],
        PosessionOn: [null],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null]
      })
    })
  }
  @ViewChild('formTabs', { static: false }) formTabs?: TabsetComponent;    //add this from web and change to forTabs variable which is in  <tabset #formTabs>
  //in the html to access it,remove , { static: false } as default now will be false and add the function in the website and change variable name from staticTabs to forTabs
  selectTab(tabId: number, IsCurrentTabValid: boolean) {
    this.NextIsClicked = true;
    if (this.formTabs?.tabs[tabId] && IsCurrentTabValid) {
      this.formTabs.tabs[tabId].active = true;
    }
    else
      console.log("select");   //used else bcz it was not ececuting the if condition
  }

  //#region <Getter Methods>
  // #region <FormGroups>
  get BasicInfo() {
    return this.addPropertyForm.controls['BasicInfo'] as FormGroup;
  }

  get PriceInfo() {
    return this.addPropertyForm.controls['PriceInfo'] as FormGroup;
  }

  get AddressInfo() {
    return this.addPropertyForm.controls['AddressInfo'] as FormGroup;
  }

  get OtherInfo() {
    return this.addPropertyForm.controls['OtherInfo'] as FormGroup;
  }
  // #endregion

  //#region <Form Controls>
  get SellRent() {
    return this.BasicInfo.controls['SellRent'] as FormControl;
  }

  get BHK() {
    return this.BasicInfo.controls['BHK'] as FormControl;
  }

  get PType() {
    return this.BasicInfo.controls['PType'] as FormControl;
  }

  get FType() {
    return this.BasicInfo.controls['FType'] as FormControl;
  }

  get Name() {
    return this.BasicInfo.controls['Name'] as FormControl;
  }

  get City() {
    return this.BasicInfo.controls['City'] as FormControl;
  }

  get Price() {
    return this.PriceInfo.controls['Price'] as FormControl;
  }

  get BuiltArea() {
    return this.PriceInfo.controls['BuiltArea'] as FormControl;
  }

  get CarpetArea() {
    return this.PriceInfo.controls['CarpetArea'] as FormControl;
  }

  get Security() {
    return this.PriceInfo.controls['Security'] as FormControl;
  }

  get Maintenance() {
    return this.PriceInfo.controls['Maintenance'] as FormControl;
  }

  get FloorNo() {
    return this.AddressInfo.controls['FloorNo'] as FormControl;
  }

  get TotalFloor() {
    return this.AddressInfo.controls['TotalFloor'] as FormControl;
  }

  get Address() {
    return this.AddressInfo.controls['Address'] as FormControl;
  }

  get LandMark() {
    return this.AddressInfo.controls['LandMark'] as FormControl;
  }

  get RTM() {
    return this.OtherInfo.controls['RTM'] as FormControl;
  }

  get PossesioOn() {
    return this.OtherInfo.controls['PosessionOn'] as FormControl;
  }

  get AOP() {
    return this.OtherInfo.controls['AOP'] as FormControl;
  }

  get Gated() {
    return this.OtherInfo.controls['Gated'] as FormControl;
  }

  get MainEntrace() {
    return this.OtherInfo.controls['MainEntrance'] as FormControl;
  }

  get Description() {
    return this.OtherInfo.controls['Description'] as FormControl;
  }

  //#endregion
  //#endregion
  Back() {
    this.route.navigate(['/']);
  }
  allTabsValid(): boolean {
    if (this.BasicInfo.invalid) {
      this.formTabs!.tabs[0].active = true;
      return false;                                //very imp to put return otherwise pgm will executes and got to the 2nd tab cuz even though 1st condion is true it will 
      //execute second cuz if not else and also it will submit the form if do not put return
    }

    if (this.PriceInfo.invalid) {
      this.formTabs!.tabs[1].active = true;
      return false;
    }

    if (this.AddressInfo.invalid) {
      this.formTabs!.tabs[2].active = true;
      return false;
    }

    if (this.OtherInfo.invalid) {
      this.formTabs!.tabs[3].active = true;
      return false;
    }
    return true;
  }
  onSubmit() {
    this.NextIsClicked = true;
    if(this.allTabsValid()){
    console.log("form submitted");
    console.log(this.addPropertyForm);
    console.log(this.propertyView);
    console.log(this.addPropertyForm.value.BasicInfo.SellRent);   //now to access sellrent we have to write like this
    }
    else{
      console.log("provide all entries");
    }
  }



}
