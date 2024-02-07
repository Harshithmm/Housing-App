import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {



  properties:Array<any>=[{
    "Id":1,
    "Type":"House",
    "Price":12000,
    "Name":"Housee"
  },
  {
    "Id":2,
    "Type":"House",
    "Price":12000,
    "Name":"Housee"
  },
  {
    "Id":3,
    "Type":"House",
    "Price":12000,
    "Name":"Housee"
  },
  {
    "Id":4,
    "Type":"House",
    "Price":12000,
    "Name":"Housee"
  },
  {
    "Id":5,
    "Type":"House",
    "Price":12000,
    "Name":"Housee"
  },
  {
    "Id":6,
    "Type":"House",
    "Price":12000,
    "Name":"Housee"
  },]
}
