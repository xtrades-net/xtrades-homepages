import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImgDirective } from './lazy-img-directive/lazy-img.directive';
import { ToggleDirective } from './toggle-directive/toggle.directive';
import { InViewportDirective } from './in-viewport-directive/in-viewport.directive';
import { MinHeightDirective } from './min-height-directive/min-height-directive';
import { InactivityDirective } from './inactivity-directive/inactivity.directive';

@NgModule({
  declarations: [
    LazyImgDirective,
    ToggleDirective,
    InViewportDirective,
    MinHeightDirective,
    InactivityDirective,
  ],
  imports: [CommonModule],
  exports: [
    LazyImgDirective,
    ToggleDirective,
    InViewportDirective,
    MinHeightDirective,
    InactivityDirective,
  ],
})
export class DirectivesModule {}
