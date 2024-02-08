import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

const routes: Routes = [
  {
    path:"add-property",
    component:AddPropertyComponent
  },
  {
    path:"",
    component:PropertyListComponent
  },
  {
    path:"rent-property",
    component:PropertyListComponent
  },
  {
    path:"property-detail/:id",
    component:PropertyDetailComponent
  },  
  {
    path:"**",
    component:PropertyListComponent   //This will redirect to PropertyListComponent in this case if any wrong urls are typedafter localhost
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
