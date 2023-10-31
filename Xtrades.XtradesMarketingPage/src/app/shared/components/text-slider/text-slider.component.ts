import { Component, Input } from '@angular/core';
import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Swiper,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

@Component({
  selector: 'app-text-slider',
  templateUrl: './text-slider.component.html',
  styleUrls: ['./text-slider.component.scss'],
})
export class TextSliderComponent {
  @Input() config: SwiperOptions = {};
  @Input() testimonials!: any;
  swiper: any;

}
