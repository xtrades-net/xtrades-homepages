import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Renderer2,
  Inject,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { SeoService } from '@shared/service/seo.service';
import { ActivatedRoute } from '@angular/router';
import { Title_Description } from '../seo-config/seo.constants';
import { DOCUMENT, Location } from '@angular/common';
import { ContentScrollService } from '../content-scroll-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-post-27',
  templateUrl: './blog-post-27.component.html',
  styleUrls: ['../blog-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPost27Component implements OnInit, OnDestroy {
  @Input() id = 0;
  subscribtion = new Subscription();
  public tableOfContent = [
    'The market moves fast, you need the tools to keep up with it',
    'Setting up basic pricing alerts',
    'Keeping up with news alerts',
    'Trade alerts keep you on top of your accounts',
  ];

  public list = Title_Description.List;

  constructor(
    private location: Location,
    private contentScrollService: ContentScrollService,
    private renderer: Renderer2,
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

    this.subscribtion.add(
      this.contentScrollService.scrollToSection$.subscribe((data) => {
        const parentElement = this.renderer.selectRootElement(`html`, true);
        const element = document.getElementById(`${data}`);
        if (element) {
          const offset = element.getBoundingClientRect().top + window.scrollY;
          parentElement.scrollTo({
            top: offset,
            behavior: 'smooth',
          });
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
