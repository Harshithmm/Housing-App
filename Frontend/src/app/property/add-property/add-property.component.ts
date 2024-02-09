import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent {
  @ViewChild('Form') addPropertyForm: NgForm | undefined;  //other way to get data

  onSubmit(form: NgForm) {
    console.log("form submitted");
    // console.log(form);
    console.log(this.addPropertyForm);
  }

  constructor(private route: Router) {}

  Back() {
    this.route.navigate(['/']);
  }
}
