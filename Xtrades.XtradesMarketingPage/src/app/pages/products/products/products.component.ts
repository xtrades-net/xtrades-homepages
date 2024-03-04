import { DOCUMENT, Location } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '@core/loading.service';
import { Title_Description } from '@shared/components/blog-post/seo-config/seo.constants';
import { SeoService } from '@shared/service/seo.service';

interface Trader {
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  @Input() isMobile: boolean = false;

  productsPages: any = [
    {
      name: 'Machine Learning Model',
      url: '/mlmodel',
      color: 'rgb(199, 206, 142)',
      backgroundColor: 'rgba(193, 209, 150, 0.14)',
    },
    {
      name: 'ThinkorSwim Scripts',
      url: 'https://tools.xtrades.net/thinkorswim-scripts',
      color: 'rgb(194, 160, 134)',
      backgroundColor: 'rgba(178, 194, 134, 0.1)',
    },
    {
      name: 'Trade-ideas Scanner',
      url: 'https://tools.xtrades.net/trade-ideas-scanner',
      color: 'rgb(124, 173, 212)',
      backgroundColor: 'rgba(124, 173, 212, 0.1)',
    },
    {
      name: 'E-Trade Pro Scanner',
      url: 'https://tools.xtrades.net/etrade-pro-scanner',
      color: 'rgb(134, 230, 177)',
      backgroundColor: 'rgba(134, 230, 177, 0.1)',
    },
    {
      name: 'Tools & Services',
      url: 'https://tools.xtrades.net/',
      color: 'rgb(152, 255, 232)',
      backgroundColor: 'rgba(152, 255, 232, 0.1)',
    },
  ];

  constructor(
    private loadingService: LoadingService,
    private location: Location,
    private SEOService: SeoService,
    private _renderer2: Renderer2,
    private router: Router,
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
  }

  ngAfterViewInit(): void {
    this.loadingService.removeLoader();
  }

  handleGoToDestination(index: number) {
    this.productsPages[index].url === '/mlmodel'
      ? this.router.navigate([this.productsPages[index].url])
      : window.open(this.productsPages[index].url, '_blank');
  }
}
