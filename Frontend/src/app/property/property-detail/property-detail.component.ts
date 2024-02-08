import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css'
})
export class PropertyDetailComponent implements OnInit{

  public propertyId:number=0;
  constructor(private route:ActivatedRoute,private router:Router){}
selectNext() {
  this.propertyId++;
  this.router.navigate(['property-detail',this.propertyId])
}


  ngOnInit(): void {
    this.propertyId=this.route.snapshot.params['id'];  //should be same as the id in /property-dateail/:id and it is case sensetive

    this.route.params.subscribe(
        params=>{
            this.propertyId=params['id'];
        }
    )
  }


}
