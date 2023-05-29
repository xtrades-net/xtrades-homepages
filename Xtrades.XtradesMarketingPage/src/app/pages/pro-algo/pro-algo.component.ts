import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingService } from '@core/loading.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-pro-algo',
  templateUrl: './pro-algo.component.html',
  styleUrls: ['./pro-algo.component.scss'],
})
export class ProAlgoComponent implements OnInit, OnDestroy {
  private initialBodyColor = document.body.style.backgroundColor;
  public readonly config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: true,
    scrollbar: false,
    zoom: {
      maxRatio: 2,
    },
    watchOverflow: true,
    navigation: {
      nextEl: '.detailed-swiper-button-next',
      prevEl: '.detailed-swiper-button-prev',
    },
  };

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.removeLoader();
    document.body.style.backgroundColor = '#081B31';
  }

  ngOnDestroy(): void {
    document.body.style.backgroundColor = this.initialBodyColor;
  }

  openPlansPage(): void {
    window.open('https://app.xtrades.net/plans', '_blank');
  }
}
