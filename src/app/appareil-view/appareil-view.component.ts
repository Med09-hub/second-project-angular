import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppatreilService } from '../services/appareil.service';
import { AppareilComponent } from "../appareil/appareil.component";
import { AsyncPipe, CommonModule } from '@angular/common';
@Component({
  selector: 'app-appareil-view',
  imports: [AppareilComponent,AsyncPipe,CommonModule],
  templateUrl: './appareil-view.component.html',
  styleUrl: './appareil-view.component.scss'
})
export class AppareilViewComponent {
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
