import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.html'
})

export class AppComponent {

  currPage: any = 1;
  page: any = 1;


  constructor() {
    
  }

}