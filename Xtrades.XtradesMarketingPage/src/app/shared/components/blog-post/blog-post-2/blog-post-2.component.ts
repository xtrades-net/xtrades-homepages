import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post-2',
  templateUrl: './blog-post-2.component.html'
})
export class BlogPost2Component {
  @Input() id = 0;
}
