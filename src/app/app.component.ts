import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('* => *', [
        style({
          position: 'relative'
        }),

        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: '0',
            left: 'auto',
            width: '100%'
          })
        ], { optional: true }
        ),

        group([
          query(':leave', [
            animate('500ms ease-in',
              style({ opacity: 0 })
            )
          ], { optional: true }),

          query(':enter', [
            style({ opacity: 0 }),
            animate('1000ms ease-out',
              style({ opacity: 1 })
            )
          ], { optional: true }
          )
        ])
      ])
    ])
  ]
})
export class AppComponent {

  title = 'conversor-moedas';

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) { return outlet.activatedRoute.snapshot.url }
    return
  }

}
