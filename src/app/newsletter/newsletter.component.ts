import { Component, OnInit } from '@angular/core';
import { FormBase } from '../bussines/form-base';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent extends FormBase implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}

  save() {
    console.log('saving');
    this.sendToAnalytics();
  }
}
