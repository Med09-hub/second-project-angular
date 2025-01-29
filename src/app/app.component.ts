import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonPremierComponent } from "./mon-premier/mon-premier.component";
import { AppareilComponent } from "./appareil/appareil.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AppareilComponent ,   CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
isAuth=false;
appareils =[
  {
    name:'Machine à laver',
    status:'éteint'
  },
  {
    name:'Television',
    status:'allumé'
  },
  {
    name:'Ordinateur',
    status:'éteint'
  }

];

constructor(){
  setTimeout(
    () => {
    this.isAuth=true;
  }, 4000);

}
onAllumer(){
  console.log('On allume tout !!!');
}
}
