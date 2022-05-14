import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html'
})
export class BlogPostComponent {
  id = 0;

  constructor(private router: Router) {
    this.id = Number(this.router.url.split("/")[this.router.url.split("/").length - 1]);
  }
}
