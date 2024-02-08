
import { Component, Input } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { Iproperty } from '../../Models/IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {
SellRent=1;
constructor(private housingservice:HousingService,private route:ActivatedRoute){}

  properties:Iproperty[]=[
    {Id:0,Type:"",Name:"",Price:0,SellRent:0}
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
      },
      error=>{
        console.log(error);
      }
      
    );
  }
}
