import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Renderer2,
  Inject,
} from '@angular/core';

import { SeoService } from '@shared/service/seo.service';
import { ActivatedRoute } from '@angular/router';
import { Title_Description } from '../seo-config/seo.constants';
import { DOCUMENT, Location } from '@angular/common';

@Component({
  selector: 'app-blog-post-21',
  templateUrl: './blog-post-21.component.html',
  styleUrls: ['../blog-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPost21Component {
  @Input() id = 0;
  faqs = [
    {
      question: 'Are calls bullish and puts bearish?',
      answer:
        'Both. Remember you can either buy or sell a call and likewise with puts. So if you BUY A CALL, that is bullish but if you SELL A CALL then its a bearish trade. The same goes for puts; if you BUY A PUT its bearish but if you SELL A PUT its bullish.',
    },
    {
      question: 'Why is selling options more dangerous?',
      answer:
        "The reason is that selling options gives you the obligation to do something whereas buying options gives you the right, if you want it.  If you sell a call you are then obligated to turn over 100 shares if the trade didn’t go your way.  If you sell a put you are obligated to buy shares if the trade didn't go your way.",
    },
    {
      question:
        'I bought a call and the stock went up but my profit barely moved or went down, why?',
      answer:
        'Remember the value of options is composed of intrinsic and extrinsic.  If an option’s expiry is too far out or it is way OTM, then option values move slower.  ATM and ITM options expiring the same day, 0DTE, are the ones that move more because they expire sooner.',
    },
    {
      question:
        'I always get out of trades and then they take off and I lose money, what am I doing wrong?',
      answer:
        'This is very common when starting out if you have not taken the time to develop your trading strategy.  Yes strategy includes how to do technical analysis and pick trades but it more importantly tells you when to get out.  You must have a plan to take profits as soon as you can while leaving more contracts on the table and continue taking profits.  If you exit a trade that was green because it made a sudden move downwards; not only did you lose your unrealized profits but you also cut your chances of making money once that trade rebounds.  Watch our strategy videos.',
    },
    {
      question: 'How to check option flow?',
      answer:
        "Many new traders don’t know what is options flow or how to read it. To check options flow simply go to the options chain on your broker and look for large grouped trades.  On Xtrades.net you can simply look for the icon with the waves flowing inside the circle:<br><img  class='faqs-icon' src='assets/blogs/faqs-waves-icon.png' alt='Waves flowing inside the circle' /> <br> Call option sweeps:  Sweeps are a type of trade made by large investors.  While Block trades are trades of 10,000 shares or more made on one exchange.  Sweeps on the other hand are large trades made over many exchanges.  Sweeps and Blocks are identified, grouped and presented in Options Flow software to help traders get a better idea as to what stocks are being traded by Institutional investors who are the ones that make these types of trades.",
    },
  ];
  public list = Title_Description.List;

  constructor(
    private location: Location,
    private SEOService: SeoService,
    private route: ActivatedRoute,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit(): void {
    const { url } = this.route.snapshot.params;
    let componentObj = this.list.find((obj) => obj.Path === url);
    this.SEOService.updateTitle(
      'Guide to Options Flow & Understanding Call Option Sweep'
    );
    this.SEOService.updateMetaTitle(
      'Guide to Options Flow & Understanding Call Option Sweep'
    );
    this.SEOService.updateDescription(
      'How to trade options using Options Flow information! Read our guide on call option sweeps & how to make money trading them! Join our Discord to see our option flow scanner!'
    );

    // the script info -----
    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    script.text = componentObj?.Spt || ``;
    this._renderer2.appendChild(this._document.body, script);

    // add cannonical link in page ---
    this.SEOService.createCanonicalLink(this.location.path());
  }
}
