import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html'
})
export class BlogPostComponent {
  url = '';
  id = 0;
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
  ]

  constructor(private router: Router) {
    this.url = this.router.url.split("/")[this.router.url.split("/").length - 1];
    this.id = Number(this.blogPosts.find(post => post.url === this.url)?.id);
  }
}
