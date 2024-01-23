import { HttpClient } from '@angular/common/http';
import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LoadingService } from '@core/loading.service';
import { SwiperOptions } from 'swiper';
import {TestimonialModel, TestimonialsService} from "@core/testimonials.service";

@Component({
  selector: 'app-crowdfunding-raise',
  templateUrl: './crowdfunding-raise.component.html',
  styleUrls: ['./crowdfunding-raise.component.scss'],
})
export class CrowdfundingRaiseComponent implements OnInit, AfterViewInit {
  public stepContent = [
    '100% Technology Backed Transparency',
    'Choose who to learn and choose who to follow based on statistics',
    'With our price points, Xtrades is a low risk high reward tool.',
    'Traders & Investors earn and recognize for providing high value insights ($3.1m Paid 2020-2023)',
    'Improve your win rate when choose signals to follow with our ML algorithm.',
  ];
  public statsContent = [
    'Signal Endorsements with Machine Learning',
    'Strict Price Validation for Trader Signals',
    'Maximum Trader Transparency',
    'Auto-Alerting by Connecting Favorite Brokers and Exchanges',
    'Fastest growing trading community',
    'Metcalfe Law Value Scaling',
    'A.I. Asset Insight Summarization',
    'Crowdsourced Info converted into Market Edges for Retail',
  ];
  public offersList = [
    { value: 'Network Effect', img: 'assets/fundraising/offer-1.svg' },
    {
      value: 'New Tech for Social Trading',
      img: 'assets/fundraising/offer-2.svg',
    },
    {
      value: 'Machine Learning Assisted Signals',
      img: 'assets/fundraising/offer-3.svg',
    },
    { value: 'Strict Price Validation', img: 'assets/fundraising/offer-4.svg' },
  ];
  public streamsList = [
    { value: 'Monthly Subscriptions', img: 'assets/fundraising/stream-1.svg' },
    { value: 'Coaching', img: 'assets/fundraising/stream-2.svg' },
    {
      value: 'Marketplace Commissions',
      img: 'assets/fundraising/stream-3.svg',
    },
    { value: 'Apparel', img: 'assets/fundraising/stream-4.svg' },
    { value: 'Ad Revenue', img: 'assets/fundraising/stream-5.svg' },
    { value: 'Partnerships', img: 'assets/fundraising/stream-6.svg' },
  ];

  public testimonials: TestimonialModel[] = [];

  public readonly config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: true,
    scrollbar: true,
    zoom: {
      maxRatio: 2,
    },
    watchOverflow: true,
    navigation: {
      nextEl: '.detailed-swiper-button-next',
      prevEl: '.detailed-swiper-button-prev',
    },
  };
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService,
    private testimonialsService: TestimonialsService,
  ) {}

  ngOnInit(): void {
    if (this.testimonialsService.testimonials.length > 0) {
      this.testimonials = this.testimonialsService.testimonials;
    } else {
      this.http
        .get<any>('https://app.xtrades.net/api/v2/Testimonials/testimonials')
        .subscribe((res) => {
          if(res.data) {
            this.testimonials = res.data;
            this.testimonialsService.testimonials = res.data;
          }
        });
    }
  }

  ngAfterViewInit(): void {
    this.loadingService.removeLoader();
  }
}
