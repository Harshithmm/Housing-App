import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IpropertyBase } from '../../Models/IPropertybase';
import { Property } from '../../Models/property';
import { HousingService } from '../../services/housing.service';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent implements OnInit {
  propertTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'semi', 'unfurnished'];
  cityList!:any[];

  property = new Property()
  propertyView: IpropertyBase = {
    Id: 0, Ptype: "", Name: "", Price: 0, SellRent: 0, Image: "",
    Ftype: '',
    BHK: 0,
    BuiltArea: 0,
    city: '',
    RTM: 0
  };   //the city value is blank or '' hence in the dropdown city it will take the default value and selected attribute doesnot work

  NextIsClicked: boolean = false;
  addPropertyForm!: FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder,
    private service: HousingService,
    private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.CreateAddPropertyForm();
    this.service.getAllCities().subscribe(
      (data)=>{
        this.cityList=data;
        console.log(data);
      }
    )
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
        PossessionOn: [null],
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

  get Ptype() {
    return this.BasicInfo.controls['Ptype'] as FormControl;
  }

  get Ftype() {
    return this.BasicInfo.controls['Ftype'] as FormControl;
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

  get PossessionOn() {
    return this.OtherInfo.controls['PossessionOn'] as FormControl;
  }

  get AOP() {
    return this.OtherInfo.controls['AOP'] as FormControl;
  }

  get Gated() {
    return this.OtherInfo.controls['Gated'] as FormControl;
  }

  get MainEntrance() {
    return this.OtherInfo.controls['MainEntrance'] as FormControl;
  }

  get Description() {
    return this.OtherInfo.controls['Description'] as FormControl;
  }

  //#endregion
  //#endregion
  Back() {
    this.router.navigate(['/']);
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

  mapProperty(): void {
    this.property.Id=this.service.newPropId();
    this.property.SellRent = +this.SellRent.value;                            //+ sign to convert this.SellRent.value  this to a number
    this.property.BHK = this.BHK.value;
    this.property.Ptype = this.Ptype.value;
    this.property.Name = this.Name.value;
    this.property.city = this.City.value;
    this.property.Ftype = this.Ftype.value;
    this.property.Price = this.Price.value;
    this.property.Security = this.Security.value;
    this.property.Maintenance = this.Maintenance.value;
    this.property.BuiltArea = this.BuiltArea.value;
    this.property.CarpetArea = this.CarpetArea.value;
    this.property.FloorNo = this.FloorNo.value;
    this.property.TotalFloor = this.TotalFloor.value;
    this.property.Address = this.Address.value;
    this.property.Address2 = this.LandMark.value;
    this.property.RTM = this.RTM.value;
    this.property.AOP = this.AOP.value;
    this.property.Gated = this.Gated.value;
    this.property.MainEntrance = this.MainEntrance.value;
    this.property.Possession = this.PossessionOn.value;
    this.property.Description = this.Description.value;
    this.property.PostedOn = new Date().toString();         //this will take the current time when the form is submitted on
  }

  onSubmit() {
    this.NextIsClicked = true;
    if (this.allTabsValid()) {
      this.mapProperty();
      this.service.addProperty(this.property);
      this.alertify.Success("form submittedsuccessfully");
      console.log(this.addPropertyForm);
      console.log(this.propertyView);
      console.log(this.addPropertyForm.value.BasicInfo.SellRent);   //now to access sellrent we have to write like this
      if(this.SellRent.value==1){
        this.router.navigate(['']);
      }
      else{
        this.router.navigate(['rent-property']);
      }
    }
    else {
      this.alertify.Error("provide all entries");
    }
  }



}
