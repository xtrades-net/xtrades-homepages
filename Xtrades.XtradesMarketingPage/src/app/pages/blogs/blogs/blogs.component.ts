import { Component, Renderer2, Inject } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { LoadingService } from '@core/loading.service';

import { SeoService } from '@shared/service/seo.service';
import { DOCUMENT, Location } from '@angular/common';
import { Title_Description } from '@shared/components/blog-post/seo-config/seo.constants';
import { BlogPostsService } from '@core/blogs-service';

export type BlogPost = {
  id: string;
  snippet: string;
  url: string;
  date: string;
  href: string;
  title: string;
};

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent {
  id = 1;
  public shortView = true;
  headerElements = ['Blogs', 'Updates', 'Xhub uploads', 'Ideas', 'Tools'];
  blogPosts: BlogPost[] = [];
  blogs;

  constructor(
    private router: Router,
    private loadingService: LoadingService,
    private location: Location,
    private SEOService: SeoService,
    private blogPostsService: BlogPostsService,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.blogPosts = this.blogPostsService.blogPosts;
    this.blogs = this.blogPosts.slice(1, 7);
  }

  ngOnInit(): void {
    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    script.text = Title_Description.blogPageScript || ``;
    this._renderer2.appendChild(this._document.body, script);

    this.SEOService.createCanonicalLink(this.location.path());
  }
  ngAfterViewInit() {
    this.loadingService.removeLoader();
  }

  loadMore() {
    if (this.blogPosts.length - this.blogs.length > 6) {
      this.blogs = this.blogs.concat(
        this.blogPosts.slice(this.blogs.length + 1, this.blogs.length + 7)
      );
    } else {
      this.blogs = this.blogs.concat(
        this.blogPosts.slice(this.blogs.length + 1, this.blogPosts.length + 1)
      );
      this.shortView = false;
    }
  }

  showLess() {
    this.blogs = this.blogPosts.slice(1, 7);
    this.shortView = true;
    scroll(0, 300);
  }

  goToBlogPost(event: RouterEvent) {
    this.router.navigateByUrl(`blogs/${event.url}`);
  }
}
