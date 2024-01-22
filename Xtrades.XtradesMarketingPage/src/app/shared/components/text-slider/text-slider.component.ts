import { Component, Input } from '@angular/core';
import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

@Component({
  selector: 'app-text-slider',
  templateUrl: './text-slider.component.html',
  styleUrls: ['./text-slider.component.scss'],
})
export class TextSliderComponent {
  @Input() config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: { clickable: true },
    scrollbar: false,
    autoplay: {
      delay: 10000, // 10 seconds in milliseconds
      disableOnInteraction: false,
    },
    zoom: {
      maxRatio: 2,
    },
    speed: 1000,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  };
  @Input() testimonials: any = [];
  @Input() type = '';
}
