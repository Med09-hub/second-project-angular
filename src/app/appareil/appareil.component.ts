import { Component } from '@angular/core';

@Component({
  selector: 'app-appareil',
  imports: [],
  templateUrl: './appareil.component.html',
  styleUrl: './appareil.component.scss'
})
export class AppareilComponent {
  appareilName='Machine à laver';
  appreilStatus='éteint';
  getStatus () {
    return this.appreilStatus;
  }
}
