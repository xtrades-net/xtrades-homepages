import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-main-image-animation',
  template: ` <ng-lottie [options]="options"></ng-lottie> `,
})
export class MainImageAnimationComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/main-homepage-animation.json',
  };

  constructor() {}

  ngOnInit(): void {}
}
