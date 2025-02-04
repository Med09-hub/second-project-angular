import { Component,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule,NgStyle} from '@angular/common'
import { AppatreilService } from '../services/appareil.service';
@Component({
  selector: 'app-appareil',
  imports: [FormsModule ,
    CommonModule,NgStyle
  ],
  templateUrl: './appareil.component.html',
  styleUrl: './appareil.component.scss'
})
export class AppareilComponent {
  @Input() appareilName:string | undefined;
  @Input() appreilStatus:string  | undefined;
  @Input() appareilIndex:number | undefined;

  constructor(private appServ :AppatreilService) {

  }
  getStatus () {
    return this.appreilStatus;
  }

  getColor () {
    if (this.appreilStatus==='allumé')
      {
      return 'green';
    }
    else {
    return 'red';
    }
  }
  onSwitchOn(){
this.appServ.switchOnOne(this.appareilIndex!);
  }
  onSwitchOff(){
    this.appServ.switchOffOne(this.appareilIndex!);
  }
}
