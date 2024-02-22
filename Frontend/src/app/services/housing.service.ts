import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Iproperty } from '../Models/IProperty.interface';
import { Property } from '../Models/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(SellRent: number): Observable<Iproperty[]> {
    return this.http.get('data/properties.json').pipe(
      map((data: { [key: string]: any }) => {
        const propertiesArray: Array<Iproperty> = [];
        const localproperties=JSON.parse(localStorage.getItem('newProperty0')!);
        if(localproperties){
        for (const id in localproperties) {
          console.log(id)
          if (localproperties.hasOwnProperty(id) && localproperties[id].SellRent === SellRent) {
            propertiesArray.push(localproperties[id]); // Fix: Use index signature to allow indexing with a number
          }
        }
      }

        for (const id in data) {
          console.log(id)
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            propertiesArray.push(data[id]); // Fix: Use index signature to allow indexing with a number
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
    localStorage.setItem('PID',String(+localStorage.getItem('PID')!+1));  //localstorage does not allow numbers hence converted to number added 1 again convrted to string.
    return +localStorage.getItem('PID')!;
    }
    else{
      localStorage.setItem('PID','101');
      return 101;
    }
  }
}
