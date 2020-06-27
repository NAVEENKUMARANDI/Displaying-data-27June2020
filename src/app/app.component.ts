import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero.name}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.name }}
      {{hero.phonenumber}}
    </li>
  </ul>
`
})
export class AppComponent {

  title: string;
  myHero: Hero;
  heroes = [
    new Hero(1, 'Windstorm', 1234567898),
    new Hero(13, 'Bombasto', 8754839837),
    new Hero(15, 'Magneta', 9994265858),
    new Hero(20, 'Tornado', 9944649728)
  ];

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = this.heroes[0];
  }
}

