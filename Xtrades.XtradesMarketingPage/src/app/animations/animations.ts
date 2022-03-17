import {
  animation,
  style,
  animate,
  trigger,
  transition,
  useAnimation,
} from '@angular/animations';
import { ElementRef } from '@angular/core';

export const fadeInOutAnimation = trigger('fadeInOut', [
  transition(':enter', [
    // :enter is alias to 'void => *'
    style({ opacity: 0 }),
    animate(500, style({ opacity: 1 })),
  ]),
  transition(':leave', [
    // :leave is alias to '* => void'
    animate(500, style({ opacity: 0 })),
  ]),
]);

export const foldUnfoldAnimation = trigger('foldUnfold', [
  transition(':enter', [
    style({ height: 0, overflow: 'hidden' }),
    animate('.3s ease', style({ height: '*' })),
  ]),
  transition(':leave', [
    style({ height: '*', overflow: 'hidden' }),
    animate('.3s ease', style({ height: 0 })),
  ]),
]);

export type CustomAnimationOptions = {
  start: number;
  end: number;
  duration: number;
};

export type ExtendedCounterAnimationOptions = {
  obj: HTMLElement;
  start: number;
  end: number;
  duration: number;
};

// //
// // animated loading bars
// //
// @keyframes placeHolderShimmer {
//   0% {
//     background-position: -868px 0;
//   }
//   100% {
//     background-position: 868px 0;
//   }
// }

// .loading-line {
//   animation-duration: 1.25s;
//   animation-fill-mode: forwards;
//   animation-iteration-count: infinite;
//   animation-name: placeHolderShimmer;
//   animation-timing-function: linear;
//   // background: var(--x-bg-gray);
//   // background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #ee7752);
//   background: linear-gradient(to right, var(--x-bg-gray) 8%, var(--x-bg-lightgray) 18%, var(--x-bg-gray) 33%);
//   background-size: 1800px 104px;
//   position: relative;
// }

// // END: animated loading bars
