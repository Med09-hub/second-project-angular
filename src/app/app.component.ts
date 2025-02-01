import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonPremierComponent } from "./mon-premier/mon-premier.component";
import { AppareilComponent } from "./appareil/appareil.component";
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [AppareilComponent, CommonModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isAuth = false;

  lastUpdate$!: Observable<Date>;

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Television',


      status: 'éteint'
    },
    {
      name: 'Ordinateur',
      status: 'allumé'
    }

  ];

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000);
    this.lastUpdate$ = of(new Date());
    }

  onAllumer() {


    console.log('On allume tout !!!');
  }
}
