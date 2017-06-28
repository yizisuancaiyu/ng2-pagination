import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <input placeholder="总页数" value="" />
    <input placeholder="每页数目" value="" />


    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    `
})

export class AppComponent {


  title = 'Tour of Heroes';
  myHero = 'Windstorm';


  
}