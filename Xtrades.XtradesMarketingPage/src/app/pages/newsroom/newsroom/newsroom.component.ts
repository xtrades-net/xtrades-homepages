import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BodyScrollingService } from '@core/body-scrolling.service';

@Component({
  selector: 'app-newsroom',
  templateUrl: './newsroom.component.html',
  styleUrls: ['./newsroom.component.scss']
})
export class NewsroomComponent {
  id = 1;
  headerElements = [
    "Blogs",
    "Updates",
    "Xhub uploads",
    "Ideas",
    "Tools"
  ]

  constructor(private router: Router, private bodyScrolling: BodyScrollingService) { }

  goToBlogPost(event: number) {
    this.router.navigateByUrl(`newsroom/${event}`);
  }
}
