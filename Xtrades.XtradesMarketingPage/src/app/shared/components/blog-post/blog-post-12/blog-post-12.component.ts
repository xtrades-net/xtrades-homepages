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
  selector: 'app-blog-post-12',
  templateUrl: './blog-post-12.component.html',
  styleUrls: ['../blog-post.component.scss'],
})
export class BlogPost12Component {
  @Input() id = 0;

  faqs = [
    {
      question: 'What is Day Trading?',
      answer:
        'Day trading refers to a trade made during a single trading day.  This means you are in and out on the same day.  A clear disadvantage is that you get out regardless of whether you took a loss and leave no consideration for a possible recovery in the future.  However if done properly can result in small gains on a daily basis which accumulate over time.',
    },
    {
      question: 'How much money do I need to start day trading?',
      answer:
        'You can get started with as little as $50 or $100.  But you have to be well versed in day trading and technical analysis in order to not lose those $50-$100 on the same day.  It’s probably better to start with $500-$1000.',
    },
    {
      question: 'Can I make a living from day trading?',
      answer: 'Definitely.  Many people day-trade stock options for a living!',
    },
    {
      question: 'What are some of the common option strategies for beginners?',
      answer:
        'Singles or naked calls and puts are the most common given they are the simplest type of trade to put on and understand.  This refers to buying a single call or single put.  Selling options and spreads are more complex and risky.',
    },
    {
      question: 'Is trading options harder than stocks',
      answer:
        'Trading options is harder than stock trading for beginners, this is because options are more complex and depend not only on the price of the stock, but on different variables such as time to expiration, the overall market volatility and the expectations of other market participants.',
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
    this.SEOService.updateTitle(componentObj?.Title || '');
    this.SEOService.updateMetaTitle(componentObj?.Title || '');
    this.SEOService.updateDescription(componentObj?.Des || '');

    // the script info -----
    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    if (typeof componentObj?.Spt === 'string') {
      script.text = componentObj?.Spt || ``;
      this._renderer2.appendChild(this._document.body, script);
    } else {
      componentObj?.Spt.forEach((item: string) => {
        script.text = item || ``;

        this._renderer2.appendChild(this._document.body, script);
      });
    }

    // add cannonical link in page ---
    this.SEOService.createCanonicalLink(this.location.path());
  }
}
