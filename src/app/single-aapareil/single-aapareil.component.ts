import { Component, OnInit } from '@angular/core';
import { AppatreilService } from '../services/appareil.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { take } from 'rxjs';


@Component({
  selector: 'app-single-aapareil',
  imports: [RouterLink],
  templateUrl: './single-aapareil.component.html',
  styleUrl: './single-aapareil.component.scss'
})
export class SingleAapareilComponent implements OnInit {
  name: string = 'Appareil';
  status: string = 'Statut';

  constructor(private appServ: AppatreilService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.params.pipe(take(1)).subscribe(
      params => {
        const id = params['id'];
        if (id) {
          const app = this.appServ.getAppById(+id);
          if (app !== undefined) {
            this.name = app.name;
            this.status = app.status;
          }
        }
      }
    )
  }
}
