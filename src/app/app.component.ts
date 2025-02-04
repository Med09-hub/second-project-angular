import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonPremierComponent } from "./mon-premier/mon-premier.component";
import { AppareilComponent } from "./appareil/appareil.component";
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { AppatreilService } from './services/appareil.service';
@Component({
  selector: 'app-root',
  imports: [AppareilComponent, CommonModule, AsyncPipe],
  providers:[AppatreilService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isAuth = false;
appareils:any[] | undefined ;
  lastUpdate$!: Observable<Date>;


  constructor(private appServ:AppatreilService) {
  }

  ngOnInit(): void {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000);
      
    this.lastUpdate$ = of(new Date());
    this.appareils= this.appServ.appareils;
    }

  onAllumer() {
this.appServ.switchOnAll();
  }
  onEteindre (){
    this.appServ.switchOffAll();
  }
}
