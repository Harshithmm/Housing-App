import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproperty } from '../../Models/IProperty.interface';
import { HousingService } from '../../services/housing.service';
import { Property } from '../../Models/property';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css'
})
export class PropertyDetailComponent implements OnInit{

  public propertyId:number=0;
  property=new Property();
galleryOptions!: NgxGalleryOptions[];
galleryImages!: NgxGalleryImage[];
  constructor(private route:ActivatedRoute,private router:Router,private service:HousingService){}
selectNext() {
  this.propertyId++;
  this.router.navigate(['property-detail',this.propertyId])
}


  ngOnInit(): void {
    this.propertyId=this.route.snapshot.params['id'];  //should be same as the id in /property-dateail/:id and it is case sensetive

    this.route.params.subscribe(
        params=>{
            this.propertyId=params['id'];
            this.service.getPropertyById(this.propertyId).subscribe(
              (data:Property)=>{
                this.property=data;
                console.log(this.property);
              }
            );
        }
    )

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '../../../assets/img/gallery/1-small.jpeg',
        medium: '../../../assets/img/gallery/1-small.jpeg',
        big: '../../../assets/img/gallery/1-small.jpeg'
      },
      {
        small: '../../../assets/img/gallery/1-small.jpeg',
        medium: '../../../assets/img/gallery/1-small.jpeg',
        big: '../../../assets/img/gallery/1-small.jpeg'
      },
      {
        small: '../../../assets/img/gallery/1-small.jpeg',
        medium: '../../../assets/img/gallery/1-small.jpeg',
        big: '../../../assets/img/gallery/1-small.jpeg'
      },{
        small: '../../../assets/img/gallery/1-small.jpeg',
        medium: '../../../assets/img/gallery/1-small.jpeg',
        big: '../../../assets/img/gallery/1-small.jpeg'
      },
      {
        small: '../../../assets/img/gallery/1-small.jpeg',
        medium: '../../../assets/img/gallery/1-small.jpeg',
        big: '../../../assets/img/gallery/1-small.jpeg'
      }
    ];
  }


  
}
