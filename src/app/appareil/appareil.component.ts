import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-appareil',
  imports: [FormsModule],
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
