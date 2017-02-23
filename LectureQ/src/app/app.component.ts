import { Component } from '@angular/core';

const HEROES: Hero[] = [
  { id: 4145, name: 'Databaser' },
  { id: 4100, name: 'Matte1' },
  { id: 4520, name: 'Krets og Digtek' },
  { id: 4105, name: 'AI Intro' },
  { id: 4175, name: 'Fugletitting' },
  { id: 4250, name: 'Diskmat' },
  { id: 4600, name: 'Matte3' },
  { id: 4800, name: 'Anvendt plystring' },
  { id: 4170, name: 'Programvareutvikling' },
  { id: 20, name: 'Exphil' }
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})




export class AppComponent {
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
}
  heroes = HEROES;
  title = 'LectureQ';
  hero :  Hero={
    id:1,
    name: 'windstorm'}
  };


export class Hero {

  id:number;
  name: string;
}
