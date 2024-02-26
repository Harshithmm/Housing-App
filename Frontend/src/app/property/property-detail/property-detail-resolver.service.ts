// import { Injectable } from '@angular/core';
// import { Property } from '../../Models/property';
// import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
// import { Observable, catchError, of } from 'rxjs';
// import { HousingService } from '../../services/housing.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class PropertyDetailResolverService implements Resolve<Property>{

//   constructor(private housingService:HousingService,private router:Router) { }
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Property | Observable<Property>{
//     const propId=route.params['id'];
//     return this.housingService.getPropertyById(+propId).pipe(
//       catchError(error=>{
//         this.router.navigate(['/']);
//         return of(null);
//       })
//     );
//   }
// }
