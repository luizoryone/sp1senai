import { Component } from '@angular/core';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1s ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('1s ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('2s', style({ opacity: 0 }))
      ])
    ]),
    trigger('imgSlide', [
      transition(':enter', [
        animate('2s', keyframes([
          style({ transform: 'translateX(-100%)', offset: 0 }),
          style({ transform: 'translateX(0)', offset: 1.0 })
        ]))
      ]),
      transition(':leave', [
        animate('2s', keyframes([
          style({ transform: 'translateX(0)', offset: 0 }),
          style({ transform: 'translateX(100%)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})

export class Componente1Component {

}
