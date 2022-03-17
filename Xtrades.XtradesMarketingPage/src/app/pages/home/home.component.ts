/* eslint-disable max-len */
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ScreenService } from '@core/screen.service';
import { AutoUnsub } from '@core/decorators';
import { SwiperOptions } from 'swiper';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Utils } from '../../utils/utils';
import * as _ from 'lodash';
import { ExtendedCounterAnimationOptions } from '../../animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
// @AutoUnsub()
export class HomeComponent implements OnInit {
  @ViewChild('email') input: ElementRef | any;
  sliderImages: Array<any> = [
    {
      title: 'User Joins',
      page: 1,
      src: 'assets/swiper-image.webp',
      alt: 'User Joins Image',
    },
    {
      title: 'Access Content',
      page: 2,
      src: 'assets/swiper-image.webp',
      alt: 'Access Content Image',
    },
    {
      title: 'Learn Together',
      page: 3,
      src: 'assets/swiper-image.webp',
      alt: 'Learn together Image',
    },
    {
      title: 'Use Custom Tools',
      page: 4,
      src: 'assets/swiper-image.webp',
      alt: 'Use Custom Tools Image',
    },
    {
      title: 'Watch Video Lessons',
      page: 5,
      src: 'assets/swiper-image.webp',
      alt: 'Watch video lessons Image',
    },
    {
      title: 'Become Profitable',
      page: 6,
      src: 'assets/swiper-image.webp',
      alt: 'Becofe Profitable Image',
    },
    {
      title: 'Fruits Of Success',
      page: 7,
      src: 'assets/swiper-image.webp',
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
    zoom: {
      maxRatio: 2,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  testimonials = [
    {
      quote:
        'In addition to the excellent service provided by the analysts, Xtrades has an amazing and welcoming community where I feel at home.',
      image:
        'https://www.xtrades.net/wp-content/uploads/2021/03/testimonial1.jpg',
      name: 'Yung Boul Tommy',
    },
  ];
  faqs = [
    {
      question: 'Is Xtrades Worth It?',
      answer:
        "Xtrades was initially created to fill a very large gap in the market. We saw that education and guidance relating to the short-term US markets were extremely overpriced. Blind leading the blind, while at the same time charging unreasonable amounts to provide their information. We've developed a team of very experienced veterans that are willing to provide our insights for a low price of only $38/month - undercutting the entire overpriced system we see today of furus charging $100-$200/month for hardly any resources.",
    },
    {
      question: 'Do You Offer Crypto?',
      answer:
        'We do not, but our partner server cryptotraders.com specializes in finding great trading opportunities to earn Crypto and Stocks. Led by a Trader that turned $8K into $1.4M (70BTC) during the 2017 Bull Market. The pricing is Equal on this front.',
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

  constructor(
    public screenService: ScreenService,
    private httpService: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  handleJoinChatClick(): void {
    window.location.href = 'https://discord.com/invite/xtrades';
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
    this.httpService
      .post(
        `${
          Utils.isLocalhost()
            ? '/emailOctopus'
            : 'https://hidden-bayou-43712.herokuapp.com/https://emailoctopus.com/api/1.5/'
        }lists/${
          Utils.isDevOrLocalhost()
            ? 'ae80632f-98e6-11ec-9258-0241b9615763'
            : '6e571cde-993d-11ec-9258-0241b9615763'
        }/contacts`,
        {
          api_key: 'a398538f-2712-49ca-8268-631ec7ad51bf',
          email_address: this.input.control.value,
        }
      )
      .subscribe({
        next: (res) => this.subscribeSuccess(),
        error: (error: HttpErrorResponse) => {
          if (
            error.error &&
            error.error.error &&
            error.error.error.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS'
          ) {
            this.subscribeSuccess();
          } else {
            alert('something went wrong :(, please try again later');
          }
        },
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
}
