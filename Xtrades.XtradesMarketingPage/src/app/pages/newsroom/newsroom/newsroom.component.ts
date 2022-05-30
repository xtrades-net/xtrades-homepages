import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { BodyScrollingService } from '@core/body-scrolling.service';
import { ModalService } from '@shared/components/modal/modal.service';

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
      author: 'AnkitCreates',
      url: 'what-is-webull',
      date: '14.05.2022',
      title: 'What Is Webull? How to Sign Up and What You Need to Know!'
    },
    {
      id: '2',
      author: 'AnkitCreates',
      url: 'what-is-tradingview',
      date: '14.05.2022',
      title: 'What is TradingView?'
    },
    {
      id: '3',
      author: 'AnkitCreates',
      url: 'copy-trading',
      date: '16.05.2022',
      title: 'Copy Trading: What Investors Need to Know'
    },
    {
      id: '4',
      author: 'AnkitCreates',
      url: 'how-to-make-most-of-stock-alerts',
      date: '16.05.2022',
      title: 'How to Make the Most Out of Stock Alerts: Tips for Maximum Profits'
    },
    {
      id: '5',
      author: 'AnkitCreates',
      url: 'why-real-time-alerts-are-essential',
      date: '16.05.2022',
      title: 'Why Real-Time Alerts are Essential for Investors?'
    },
    {
      id: '6',
      author: 'AnkitCreates',
      url: 'how-to-read-option-alerts',
      date: '17.05.2022',
      title: 'How to Read Option Alerts: The Ultimate Guide'
    },
    {
      id: '7',
      url: 'why-swing-trading',
      author: 'AnkitCreates',
      date: '30.05.2022',
      title: 'Why Swing Trading Is More Lucrative Than Day Trading'
    }
  ].reverse();

  constructor(private router: Router) { }

  goToBlogPost(event: RouterEvent) {
    this.router.navigateByUrl(`newsroom/${event.url}`);
  }
}
