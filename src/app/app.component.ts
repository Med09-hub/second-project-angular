import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MonPremierComponent } from "./mon-premier/mon-premier.component";
import { AppareilComponent } from "./appareil/appareil.component";
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { AppatreilService } from './services/appareil.service';
import { AppareilViewComponent } from "./appareil-view/appareil-view.component";
import { AuthServiceService } from './services/auth.service.service';
@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterModule],
  providers:[AppatreilService,AuthServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
constructor () {

}
}