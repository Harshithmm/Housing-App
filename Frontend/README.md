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