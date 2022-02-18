import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  save() {
    console.log('saving');
    this.sendToAnalytics();
  }
  sendToAnalytics() {
    console.log('Sending to analytics');
  }
}
