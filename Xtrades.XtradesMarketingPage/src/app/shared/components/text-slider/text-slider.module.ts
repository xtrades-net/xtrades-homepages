import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSliderComponent } from './text-slider.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [TextSliderComponent],
  imports: [CommonModule, SwiperModule],
  exports: [TextSliderComponent],
})
export class TextSliderModule {}
