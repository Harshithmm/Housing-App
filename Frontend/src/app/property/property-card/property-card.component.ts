import { Component,Input, OnInit } from '@angular/core';
import { IpropertyBase } from '../../Models/IPropertybase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.property)
  }
  @Input() property:IpropertyBase={
    Id: 0, Name: "", Price: 0, SellRent: 0, Image: "",
    Ptype: '',
    Ftype: '',
    BHK: 0,
    BuiltArea: 0,
    city: '',
    RTM: 0
  };
  @Input() hideIcons:boolean=false;
}
