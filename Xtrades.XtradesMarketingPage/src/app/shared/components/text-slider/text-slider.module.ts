import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSliderComponent } from './text-slider.component';

import { SwiperModule } from 'swiper/angular';
import { Truncate1Pipe } from './truncate.pipe';

@NgModule({
  declarations: [TextSliderComponent, Truncate1Pipe],
  imports: [CommonModule, SwiperModule],
  exports: [TextSliderComponent],
})
export class TextSliderModule {}
