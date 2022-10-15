import { Component, Input, Renderer2, Inject } from '@angular/core';

import { SeoService } from '@shared/service/seo.service';
import { ActivatedRoute } from '@angular/router';
import { Title_Description } from '../seo-config/seo.constants';
import { DOCUMENT, Location } from '@angular/common';

@Component({
  selector: 'app-blog-post-1',
  templateUrl: './blog-post-1.component.html'
})
export class BlogPost1Component {
  @Input() id = 0;

  public list = Title_Description.List;

  constructor(
    private location: Location,
    private SEOService: SeoService,
    private route: ActivatedRoute,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit(): void {
    const { url } = this.route.snapshot.params;
    let componentObj = this.list.find(obj => obj.Path === url)
    this.SEOService.updateTitle(componentObj?.Title || '');
    this.SEOService.updateDescription(componentObj?.Des || '');

    // the script info -----
    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    script.text = componentObj?.Spt || ``
    this._renderer2.appendChild(this._document.body, script);

    // add cannonical link in page ---
    this.SEOService.createCanonicalLink(this.location.path())
  }
}
