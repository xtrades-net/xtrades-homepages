import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() inputData: Array<any> = [];
  @Input() detailedNavigation = false;
  @Input() config: SwiperOptions = {};
  @Input() testimonials: any = [];

  ngOnInit(): void {}
}
