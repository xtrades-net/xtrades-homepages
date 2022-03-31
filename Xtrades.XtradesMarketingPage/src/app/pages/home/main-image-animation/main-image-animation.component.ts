import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-main-image-animation',
  template: ` <ng-lottie [options]="options"></ng-lottie> `,
})
export class MainImageAnimationComponent {
  options: AnimationOptions = {
    path: '/assets/main-homepage-animation.json',
  };
}
