
import { Component, Input } from '@angular/core';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {

constructor(private housingservice:HousingService){}

  properties:any;

  ngOnInit():void{
    this.housingservice.getAllProperties().subscribe(
      data=>
      {console.log(data),
      this.properties=data;
      },
      error=>{
        console.log(error);
      }
      
    );
  }
}
