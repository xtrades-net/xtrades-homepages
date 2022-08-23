import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImgDirective } from './lazy-img-directive/lazy-img.directive';
import { InViewportDirective } from './in-viewport-directive/in-viewport.directive';

@NgModule({
  declarations: [
    LazyImgDirective,
    InViewportDirective 
  ],
  imports: [CommonModule],
  exports: [
    LazyImgDirective,
    InViewportDirective
  ],
})
export class DirectivesModule {}
