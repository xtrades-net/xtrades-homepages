import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImgDirective } from './lazy-img-directive/lazy-img.directive';
import { ToggleDirective } from './toggle-directive/toggle.directive';
import { InViewportDirective } from './in-viewport-directive/in-viewport.directive';

@NgModule({
  declarations: [LazyImgDirective, ToggleDirective, InViewportDirective],
  imports: [CommonModule],
  exports: [LazyImgDirective, ToggleDirective, InViewportDirective],
})
export class DirectivesModule {}
