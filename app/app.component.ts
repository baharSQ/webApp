import { Component } from '@angular/core';

export class Hero {
  name: string;
  inStock: number;
  date: string;
  image: string;
  quantity: number;
}

const HEROES: Hero[] = [
  { inStock: 0, name: 'Game1', date: '3.3.2017', image: '../img/game.jpg',quantity:0},
  { inStock: 6, name: 'Game2', date: '1.5.2016', image: '../img/game.jpg',quantity:0},

  { inStock: 13, name: 'Game3', date: '1.3.2016', image: '../img/game.jpg',quantity:0},
  { inStock: 14, name: 'Game4', date: '3.5.2017', image: '../img/game.jpg',quantity:0}
];

@Component({
  selector: 'my-app',
  template: `
    <div class='container cont-pad' >
    <div calss='col-md-12 col-sm-12 col-xs-12 ' style="
    margin-bottom: 30px;
">
    <h1>{{title}}</h1>
    </div>
    </div>
    <ul class='list-unstyled' >
      <li *ngFor="let hero of heroes">
      <div class='container cont-pad' >
      <div class='row'>
      <div class='col-md-4 col-sm-4 col-xs-4  row-img cont-pad'  >
      <img [src]="hero.image" class="img-rounded  float-left" height="170px" width="370px">
      </div>
      <div class='col-md-6 col-sm-6 col-xs-6 col-md-offset-2 row-img' >
      <h2>{{hero.name}}</h2>
        <p *ngIf="hero.inStock > 0">{{hero.inStock}} in stock</p>
        <p *ngIf="hero.inStock === 0"> Out of stock</p>
        <p >Release Date: {{hero.date| date : 'longDate'}}</p>
        <button (click)="downQuantity(hero)">-</button>
        <input type="text" style="width: 24px; text-align:center" [value]="hero.quantity"
        (input)="hero.quantity=$event.target.value"
         >

        <button (click)="upQuantity(hero)">+</button>
      </div>
      </div>
      </div>
      </li>
    </ul>
  `,
styleUrls : ['../bootstrap-3.3.7-dist/css/bootstrap.css']
})
export class AppComponent {
  title = 'List of Games';
  heroes = HEROES;
  selectedHero: Hero;
  upQuantity(hero){
    if(hero.quantity < hero.inStock)
    hero.quantity++;
  }
  downQuantity(hero){
    if(hero.quantity != 0)
    hero.quantity--;
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
