/* eslint-disable max-len */
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef, OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ScreenService } from '@core/screen.service';
import { SwiperOptions } from 'swiper';
import * as _ from 'lodash';
import { ExtendedCounterAnimationOptions } from '../../animations/animations';
import { SubscribeService } from '@shared/components/modal/subscribe-modal/subscribe.service';
import { LoadingService } from '@core/loading.service';

import { SeoService } from '@shared/service/seo.service';
import { Location } from '@angular/common';
import { TestimonialsService} from "@core/testimonials.service";
import {Subscription} from "rxjs";
import {TestimonialModel} from "../../models/testimonial.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('email') input: ElementRef | any;
  sliderImages: Array<any> = [
    {
      title: 'User Joins',
      page: 1,
      src: 'assets/Xtrades-slider-img.svg',
      alt: 'User Joins Image',
    },
    {
      title: 'Access Content',
      page: 2,
      src: 'assets/images/Access Content.svg',
      alt: 'Access Content Image',
    },
    {
      title: 'Learn Together',
      page: 3,
      src: 'assets/images/Learn Together.svg',
      alt: 'Learn together Image',
    },
    {
      title: 'Use Custom Tools',
      page: 4,
      src: 'assets/images/Use Custom Tools.svg',
      alt: 'Use Custom Tools Image',
    },
    {
      title: 'Watch Video Lessons',
      page: 5,
      src: 'assets/images/Watch Video lessons.svg',
      alt: 'Watch video lessons Image',
    },
    {
      title: 'Become Profitable',
      page: 6,
      src: 'assets/images/Become Profitable.svg',
      alt: 'Becofe Profitable Image',
    },
    {
      title: 'Fruits Of Success',
      page: 7,
      src: 'assets/images/Fruits of Success.svg',
      alt: 'Fruits of success Image',
    },
  ];
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: false,
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
  testimonialsSliderConfig: SwiperOptions = {
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
  testimonials: TestimonialModel[] = [];
  faqs = [
    {
      question: 'Is Xtrades Worth It?',
      answer:
        "Xtrades was initially created to fill a very large gap in the market. We saw that education and guidance relating to the short-term US markets were extremely overpriced. Blind leading the blind, while at the same time charging unreasonable amounts to provide their information. We've developed a team of very experienced veterans that are willing to provide our insights for a low price of only $38/month - undercutting the entire overpriced system we see today of furus charging $100-$200/month for hardly any resources.",
    },
    {
      question: 'Do You Offer Crypto?',
      answer: `We do not, but our partner server <a href="https://www.cryptotraders.com/" target="_blank" class="link-without-toogle-effect">cryptotraders.com</a> specializes in finding great trading opportunities to earn Crypto and Stocks. Led by a Trader that turned $8K into $1.4M (70BTC) during the 2017 Bull Market. The pricing is Equal on this front.`,
    },
  ];
  emailModel = {
    email: '',
  };
  counterAnimationOptions = {
    start: 0,
    end: 38,
    duration: 1000,
  };

  isEmailValid = false;
  alreadySubscribed = false;
  showReadMoreSection = false;
  public showPromo = false;
  private subscription: Subscription = new Subscription();

  constructor(
    public screenService: ScreenService,
    private cdr: ChangeDetectorRef,
    private subscribeService: SubscribeService,
    private loadingService: LoadingService,
    private SEOService: SeoService,
    private location: Location,
    private testimonialsService: TestimonialsService,
  ) {}

  ngOnInit(): void {
    // add canonical link in page ---
    this.SEOService.createCanonicalLink(this.location.path());
    this.subscription.add(this.testimonialsService.getTestimonials().subscribe(data=>{
      this.testimonials = data;
    }));
    this.checkActivePromo();
  }

  ngAfterViewInit(): void {
    this.loadingService.removeLoader();
  }

  handleGoToBetaAppClick(): void {
    window.open('https://app.xtrades.net?modal=signup', '_blank');
  }

  handleGoToDownloadAppClick(): void {
    window.location.href = 'https://apps.apple.com/us/app/xtrades/id1619081753';
  }

  onSubmit() {
    if (!this.emailModel.email || !this.isEmailValid) {
      return;
    }
    this.confirmSubscription();
  }

  validateEmail = _.debounce((email: string) => {
    const regularExpression =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const oldEmailValidity = this.isEmailValid;
    this.isEmailValid = regularExpression.test(email.toLowerCase());
    if (oldEmailValidity !== this.isEmailValid) {
      this.cdr.markForCheck();
    }
  }, 200);

  confirmSubscription() {
    this.subscribeService
      .subscribeToMainHomepageList(this.input.value)
      .subscribe({
        next: (v) => this.subscribeSuccess(),
        error: (e) => alert('something went wrong :(, please try again later'),
      });
  }

  subscribeSuccess() {
    localStorage.setItem('isSubscribed', 'true');
    this.emailModel.email = '';
    this.alreadySubscribed = true;
  }

  animateCounterValue(options: ExtendedCounterAnimationOptions) {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / options.duration,
        1
      );
      options.obj.innerHTML = Math.floor(
        progress * (options.end - options.start) + options.start
      ).toString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  private checkActivePromo() {
    if (localStorage.getItem('active-promo')) {
      const currentStep = +localStorage.getItem('active-promo-counter')!;
      if (currentStep < 3) {
        localStorage.setItem('active-promo-counter', `${currentStep + 1}`);
        this.showPromo = true;
      } else {
        localStorage.setItem('active-promo-finished', 'true');
        localStorage.removeItem('active-promo');
      }
    } else if (
      !localStorage.getItem('active-promo') &&
      !localStorage.getItem('active-promo-finished')
    ) {
      localStorage.setItem('active-promo', 'true');
      localStorage.setItem('active-promo-counter', '1');
      this.showPromo = true;
    }
  }

  public proceedPromoLink(): void {
    window.open('https://forms.gle/fH72RrSPW6uWZznK9', '_blank');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
