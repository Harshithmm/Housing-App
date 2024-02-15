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
        for (const id in data) {
          console.log(id)
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            propertiesArray.push(data[id]); // Fix: Use index signature to allow indexing with a number
          }
        }
        return propertiesArray;
      })
    );
  }

  addProperty(property:Property){
    localStorage.setItem('newProperty0',JSON.stringify(property));
  }
}
