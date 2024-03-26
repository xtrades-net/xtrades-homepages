import { DOCUMENT, Location } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { LoadingService } from '@core/loading.service';
import { RankedTraderModel, RoleModel } from '@core/models/ranked-trader.model';
import { RankedTradersService } from '@core/services/ranked-traders.service';
import { Title_Description } from '@shared/components/blog-post/seo-config/seo.constants';
import { SeoService } from '@shared/service/seo.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-ourtraders',
  templateUrl: './ourtraders.component.html',
  styleUrls: ['./ourtraders.component.scss'],
})
export class OurTradersComponent implements OnInit, AfterViewInit {
  @Input() isMobile: boolean = false;

  private momentumId = 'b890bf0f-7830-496c-b1ed-f9ce4b1f2228';
  private momentumInstagramUrl = 'https://www.instagram.com/kevallin/';

  traders: RankedTraderModel[] = [];
  allRoles: RoleModel[] = [];

  constructor(
    private loadingService: LoadingService,
    private location: Location,
    private SEOService: SeoService,
    private _renderer2: Renderer2,
    private rankedTradersService: RankedTradersService,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit(): void {
    // the script info -----
    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    script.text = Title_Description.blogPageScript || ``;
    this._renderer2.appendChild(this._document.body, script);

    // add cannonical link in page ---
    this.SEOService.createCanonicalLink(this.location.path());

    this.rankedTradersService.getRankedTraders().subscribe((data) => {
      if (data) {
        this.allRoles = data;
        this.allRoles.forEach((el) => {
          el.traders.forEach(async (elem) => {
            elem.icon = await Utils.getImageUrl(elem.userId);
            elem.url = 'https://app.xtrades.net/profile/' + elem.userId;
            if (elem.userId === this.momentumId) {
              elem.instagramUrl = this.momentumInstagramUrl;
            }
          });
        });
        this.traders = this.allRoles[0].traders;
      }
    });
  }

  ngAfterViewInit(): void {
    this.loadingService.removeLoader();
  }

  chooseRole(index: number) {
    this.traders = this.allRoles[index].traders;
    if (!this.traders) {
      this.traders = [];
    }
  }

  handleGoToDestination(link: string) {
    window.open(link, '_blank');
  }

  goToTraderProfile(url: string | undefined) {
    if (url) {
      window.open(url);
    }
  }
}
