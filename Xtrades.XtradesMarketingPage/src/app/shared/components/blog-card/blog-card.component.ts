import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() blogPost: any;
  @Output() goToBlogPost = new EventEmitter();

  onClickBlogCard() {
    this.goToBlogPost.emit(this.blogPost.id);
  }

}
