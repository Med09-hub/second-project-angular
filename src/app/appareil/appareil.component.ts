import { Component,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-appareil',
  imports: [FormsModule ,
    CommonModule
  ],
  templateUrl: './appareil.component.html',
  styleUrl: './appareil.component.scss'
})
export class AppareilComponent {
  @Input() appareilName:string | undefined;
  @Input() appreilStatus:string  | undefined;
  getStatus () {
    return this.appreilStatus;
  }
  
}
