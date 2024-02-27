import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Iproperty } from '../Models/IProperty.interface';
import { Property } from '../Models/property';
import { IpropertyBase } from '../Models/IPropertybase';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(SellRent?: number): Observable<Property[]> {
    return this.http.get('data/properties.json').pipe(
      map((data: { [key: string]: any }) => {
        const propertiesArray: Array<Property> = [];
        const localproperties=JSON.parse(localStorage.getItem('newProperty0')!);
        if(localproperties){
        for (const id in localproperties) {
          if(SellRent){
          console.log(id)
          if (localproperties.hasOwnProperty(id) && localproperties[id].SellRent === SellRent) {
            propertiesArray.push(localproperties[id]); // Fix: Use index signature to allow indexing with a number
          }
        }
        else{
          propertiesArray.push(localproperties[id]);
        }
        }
      }

        for (const id in data) {
          if(SellRent){
          console.log(id)
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            propertiesArray.push(data[id]); // Fix: Use index signature to allow indexing with a number
          }
        }
        else{
          propertiesArray.push(data[id]);
        }
        }
        console.log(propertiesArray);
        return propertiesArray;
      })
    );
  }

  addProperty(property: Property) {
    let properties:Property[]=[]; // Initialize properties as an empty array
    let allProperty = localStorage.getItem('newProperty0');
    // if (allProperty != null) {
    //   properties = [JSON.parse(allProperty)];

    //   properties.push(property);

        // else {
    //   properties = [property];
    // }
    // if(allProperty===null){
    //   properties=[property];
    //   // properties=[property,...JSON.parse(allProperty)];
    // } 
    // else{
    //   properties=[JSON.parse(allProperty)];
    //   properties.push(property);
    // }
    if (allProperty === null) { properties = [property]; } 
    else { properties = [...JSON.parse(allProperty), property]; }

    localStorage.setItem('newProperty0', JSON.stringify(properties));
  }
  //to generate new id for the properties
  newPropId(){
    if(localStorage.getItem('PID')){
    localStorage.setItem('PID',String(+localStorage.getItem('PID')!+1));  //localstorage does not allow numbers hence converted to number added + again convrted to string.
    return +localStorage.getItem('PID')!;
    }
    else{
      localStorage.setItem('PID','101');
      return 101;
    }
  }

    getPropertyById(propertyId:number):Observable<Property>{
      return this.getAllProperties().pipe(
        map(propertiesArray=>{
          console.log(propertiesArray,propertyId);
          return propertiesArray.find(p=>p.Id==propertyId)!;
        })
      )
    }

    getAllCities():Observable<string[]>{
     return this.http.get<string[]>("http://localhost:5008/api/City");
    }
}
