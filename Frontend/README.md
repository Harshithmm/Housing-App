assets in angular.json ??
The assets array is used to list files or folders that you want to copy as-is when you build your project. These files are not processed by the Angular's build system. They are directly copied to the output directory, maintaining the same directory structure.

execute ng serve if we change something in angular.json etc..  bcz they r loaded at first

---------------------------------------------------------------------------------------
@Injectable({
  providedIn: 'root'
})
this tells that the service is injected in root component hence we have to register it in providers array in app.module.ts

when u provide a service at root level angular craetes a single shared instance of service meaning it is available for whole application

-----------------------------------------------------------------------------
.pipe(map=>)   map operators allows passing some data to a function and return a new data that automatically we rewrite into a observable so we can subsribe to it
----------------------------------------------------------------------------------------------
          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" aria-current="page" routerLink="/">Buy</a>
          </li>

    routerLinkActive="active"  :make the link active but path should be differnent if slightly similar then it make other links also active
    hence we add 
       [routerLinkActiveOptions]="{ exact: true }"
       so that it should match the exact



       -------------------------------------------------------------------------------
         constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.propertyId=this.route.snapshot.params['id'];  //should be same as the id in /property-dateail/:id and it is case sensetive
  }

  ----------------------------------------------------------------------------------------

<button (click)="Back()" class="btn btn-primary">Back</button>
  constructor(private route:Router){}
Back() {
  this.route.navigate(['/']);
}

To navigate to differnt page if used in ngOnint() u can go to a diff component at the end of the lifecycle of the component



--------------------------------------------------------

<button routerLink="property-detail/1" class="btn btn-primary">1</button>  
<button routerLink="property-detail/2" class="btn btn-primary">2</button>
<button routerLink="property-detail/3" class="btn btn-primary">3</button> 

in angular this does not work if we are in the property-detail component and use the above like ex:localhost4200/property-detail if we use here it doesnt work only url changes

https://www.youtube.com/watch?v=VQnZMWTFn88&list=PL_NVFNExoAxclqXo9fLAeP0G2Qp56Fu8C&index=14

hence

    this.route.params.subscribe(
        params=>{
            this.propertyId=params['id'];
        }
    )
    
    we use the abve code to fix that problem

ytlink:
    https://www.youtube.com/watch?v=VQnZMWTFn88&list=PL_NVFNExoAxclqXo9fLAeP0G2Qp56Fu8C&index=14


----------------------------------------------------------------------------------

  {
    path:"**",
    component:PropertyListComponent   //This will redirect to PropertyListComponent in this case if any wrong urls are typedafter localhost
  },

  --------------------------------------------------------

      <img *ngIf="property.Image" class="houseimg" src="../../../assets/Images/{{property.Image}}.jpg" alt="Not Found">
    <img *ngIf="!property.Image" class="houseimg" src="../../../assets/Images/House_default.jpg" alt="Not Found">

    -------------------------------------------------------------------------------------

    Making Buy and Rent items seperate

    https://www.youtube.com/watch?v=VQnZMWTFn88&list=PL_NVFNExoAxclqXo9fLAeP0G2Qp56Fu8C&index=14