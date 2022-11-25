import { DOCUMENT, Location } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { GoogleAnalyticsService } from '@core/google-analytics.service';
import { LoadingService } from '@core/loading.service';
import { Title_Description } from '@shared/components/blog-post/seo-config/seo.constants';
import { SeoService } from '@shared/service/seo.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit, AfterViewInit {
  constructor(
    private loadingService: LoadingService,
    private _renderer2: Renderer2,
    private SEOService: SeoService,
    @Inject(DOCUMENT) private _document: Document,
    private location: Location,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit(): void {
    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    this._renderer2.appendChild(this._document.body, script);

    // add cannonical link in page ---
    this.SEOService.createCanonicalLink(this.location.path());

    this.googleAnalyticsService.eventEmitter(
      'confirmation_page',
      'subscription',
      'open page'
    );
  }

  ngAfterViewInit(): void {
    this.loadingService.removeLoader();
  }

  handleGoToDiscord(): void {
    window.location.href = 'https://discord.com/invite/xtrades';
  }

  handleGoToBetaAppClick(): void {
    window.location.href = 'https://app.xtrades.net/';
  }
}
