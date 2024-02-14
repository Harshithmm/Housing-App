
import { Component, Input } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { IpropertyBase } from '../../Models/IPropertybase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {
SellRent=1;
constructor(private housingservice:HousingService,private route:ActivatedRoute){}

  properties:IpropertyBase[]=[
    {
      Id: 0, Ptype: "", Name: "", Price: 0, SellRent: 0, Image: "",
      Ftype: '',
      BHK: 0,
      BuiltArea: 0,
      city: '',
      RTM: 0
    }
  ];

  ngOnInit():void{
    if(this.route.snapshot.url.toString()){
      this.SellRent=2;
    }
    this.housingservice.getAllProperties(this.SellRent).subscribe(
      data=>
      {console.log(data),
        console.log(this.route.snapshot.url.toString()),
      this.properties=data;
      console.log(this.properties);
      },
      error=>{
        console.log(error);
      }
      
    );
  }
}
