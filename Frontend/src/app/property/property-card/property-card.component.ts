import { Component,Input } from '@angular/core';
import { Iproperty } from '../../Models/IProperty.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {
  @Input() property:Iproperty={Id:0,Type:"",Name:"",Price:0,SellRent:0,Image:""};
  @Input() hideIcons:boolean=false;
}
