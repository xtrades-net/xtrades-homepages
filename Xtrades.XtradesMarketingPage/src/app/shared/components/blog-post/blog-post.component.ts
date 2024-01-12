import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPostsService } from '@core/blogs-service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent {
  url = '';
  id = 0;
  post: any;
  blogPosts;

  constructor(
    private router: Router,
    private blogPostsService: BlogPostsService,
  ) {
    this.blogPosts = this.blogPostsService.blogPosts;
    this.url = this.router.url.split('/')[this.router.url.split('/').length - 1];
    this.id = Number(this.blogPosts.find((post) => post.url === this.url)?.id);
    this.post = this.blogPosts.find((post) => +post.id === this.id);
  }

  ngAfterViewInit() {
    document.querySelector('body')?.classList.remove('inactive-scroll');
    document.querySelector('.full-screen')?.classList.remove('full-height');
  }

  navigateToContent(data: number) {
    this.blogPostsService.goTo(data);
  }
}
