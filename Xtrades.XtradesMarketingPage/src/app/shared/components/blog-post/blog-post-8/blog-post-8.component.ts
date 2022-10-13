import { Component, Input } from '@angular/core';

import { SeoService } from '@shared/service/seo.service';
import { ActivatedRoute } from '@angular/router';
import { Title_Description } from '../seo-config/seo.constants';

@Component({
  selector: 'app-blog-post-8',
  templateUrl: './blog-post-8.component.html'
})
export class BlogPost8Component {
  @Input() id = 0;

  public list=Title_Description.List;

  constructor(
    private SEOService: SeoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const { url } = this.route.snapshot.params;
    let componentObj=this.list.find(obj=>obj.Path === url)
    this.SEOService.updateTitle(componentObj?.Title || '');
    this.SEOService.updateDescription(componentObj?.Des || '');
  }
  
}
