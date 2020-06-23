import {animate, group, query, style, transition, trigger} from '@angular/animations';
// Component transition animations
export const routeAnimation = trigger('routeAnimation', [
  transition('* => *', [
    query(':enter', style({transform: 'translateX(100%)', position: 'absolute', opacity: 0}), {optional: true}),
    query(':leave', style({transform: 'translateX(0)', position: 'absolute', opacity: 1}), {optional: true}),
    group([
      query(':leave', animate('.5s ease-in-out', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })), {optional: true}),
      query(':enter', animate('.5s ease-in-out', style({
        transform: 'translateX(0)',
        opacity: 1
      })), {optional: true})
    ])
  ])
]);
export const fadeInOut = trigger('fadeInOut', [
  transition('* => *', [
    query(':enter', style({
        background: 'red'
      }),
      {optional: true}),
    // query(':leave', style({
    //   opacity: '1'
    // }), {optional: true}),
    group([
      // query(':leave', animate('.5s ease-in-out', style({
      //   opacity: '0'
      // })), {optional: true}),
      query(':enter', animate('.5s ease-in-out', style({
        background: 'blue'
      })), {optional: true})
    ])
  ])
]);
