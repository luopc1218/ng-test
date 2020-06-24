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
  transition('* <=> *', [
    style({
      opacity: '0',
      transform: 'translateX(100px)'
    }),
    animate('.5s ease-in-out', style({
      opacity: '1',
      transform: 'translateX(0)'
    }))
  ])
]);
