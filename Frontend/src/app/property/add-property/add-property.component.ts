import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent {

  constructor(private route:Router){}
Back() {
  this.route.navigate(['/']);
}

}
