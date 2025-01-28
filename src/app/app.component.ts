import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonPremierComponent } from "./mon-premier/mon-premier.component";
import { AppareilComponent } from "./appareil/appareil.component";

@Component({
  selector: 'app-root',
  imports: [AppareilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
isAuth=false;
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
