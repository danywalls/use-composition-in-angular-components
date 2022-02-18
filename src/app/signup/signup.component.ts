import { Component, OnInit } from '@angular/core';
import { FormBase } from '../bussines/form-base';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent extends FormBase implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}

  save() {
    console.log('saving');
    this.sendToAnalytics();
  }
}
