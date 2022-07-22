import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post-1',
  templateUrl: './blog-post-1.component.html'
})
export class BlogPost1Component {
  @Input() id = 0;
}
