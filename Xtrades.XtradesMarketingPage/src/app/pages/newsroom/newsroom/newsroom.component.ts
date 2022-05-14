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
  ];
  blogPosts = [
    {
      id: '1',
      author: '',
      date: '14.05.2022',
      title: 'What Is Webull? How to Sign Up and What You Need to Know!'
    },
    {
      id: '2',
      author: '',
      date: '14.05.2022',
      title: 'What is TradingView?'
    }
  ]

  constructor(private router: Router, private bodyScrolling: BodyScrollingService) { }

  goToBlogPost(event: number) {
    this.router.navigateByUrl(`newsroom/${event}`);
  }
}
