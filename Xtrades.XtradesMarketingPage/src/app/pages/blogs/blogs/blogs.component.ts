import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
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
      date: '13.05.2022',
      href: 'https://www.xtrades.net/blogs/what-is-webull',
      title: 'What Is Webull? How to Sign Up and What You Need to Know!'
    },
    {
      id: '2',
      author: 'AnkitCreates',
      url: 'what-is-tradingview',
      date: '14.05.2022',
      href: 'https://www.xtrades.net/blogs/what-is-tradingview',
      title: 'What is TradingView?'
    },
    {
      id: '3',
      author: 'AnkitCreates',
      url: 'copy-trading',
      date: '16.05.2022',
      href: 'https://www.xtrades.net/blogs/copy-trading',
      title: 'Copy Trading: What Investors Need to Know'
    },
    {
      id: '4',
      author: 'AnkitCreates',
      url: 'how-to-make-most-of-stock-alerts',
      date: '16.05.2022',
      href: 'https://www.xtrades.net/blogs/how-to-make-most-of-stock-alerts',
      title: 'How to Make the Most Out of Stock Alerts: Tips for Maximum Profits'
    },
    {
      id: '5',
      author: 'AnkitCreates',
      url: 'why-real-time-alerts-are-essential',
      date: '16.05.2022',
      href: 'https://www.xtrades.net/blogs/why-real-time-alerts-are-essential',
      title: 'Why Real-Time Alerts are Essential for Investors?'
    },
    {
      id: '6',
      author: 'AnkitCreates',
      url: 'how-to-read-option-alerts',
      date: '17.05.2022',
      href: 'https://www.xtrades.net/blogs/how-to-read-option-alerts',
      title: 'How to Read Option Alerts: The Ultimate Guide'
    },
    {
      id: '7',
      url: 'why-swing-trading',
      author: 'AnkitCreates',
      date: '31.05.2022',
      href: 'https://www.xtrades.net/blogs/why-swing-trading',
      title: 'Why Swing Trading Is More Lucrative Than Day Trading'
    },
    {
      id: '8',
      url: 'getting-started-with-stock-trading',
      author: 'AnkitCreates',
      date: '16.06.2022',
      href: '/blogs/getting-started-with-stock-trading',
      title: 'Getting started with Stock Trading. Everything you need to know.'
    }
  ].reverse();

  constructor(private router: Router) { }

  goToBlogPost(event: RouterEvent) {
    this.router.navigateByUrl(`blogs/${event.url}`);
  }
}
