assets in angular.json ??
The assets array is used to list files or folders that you want to copy as-is when you build your project. These files are not processed by the Angular's build system. They are directly copied to the output directory, maintaining the same directory structure.

execute ng serve if we change something in angular.json etc..  bcz they r loaded at first


@Injectable({
  providedIn: 'root'
})
this tells that the service is injected in root component hence we have to register it in providers array in app.module.ts

when u provide a service at root level angular craetes a single shared instance of service meaning it is available for whole application