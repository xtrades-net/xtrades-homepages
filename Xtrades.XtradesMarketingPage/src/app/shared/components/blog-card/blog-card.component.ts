import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() id = 0;
  @Output() goToBlogPost = new EventEmitter();

  onClickBlogCard() {
    this.goToBlogPost.emit(this.id);
  }

}
