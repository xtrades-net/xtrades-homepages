import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {
  url = '';
  id = 0;
  blogPosts = [
    {
      id: '1',
      url: 'what-is-webull',
      date: '14.05.2022',
      title: 'What Is Webull? How to Sign Up and What You Need to Know!'
    },
    {
      id: '2',
      url: 'what-is-tradingview',
      date: '14.05.2022',
      title: 'What is TradingView?'
    },
    {
      id: '3',
      url: 'copy-trading',
      date: '16.05.2022',
      title: 'Copy Trading: What Investors Need to Know'
    },
    {
      id: '4',
      url: 'how-to-make-most-of-stock-alerts',
      date: '16.05.2022',
      title: 'How to Make the Most Out of Stock Alerts: Tips for Maximum Profits'
    },
    {
      id: '5',
      url: 'why-real-time-alerts-are-essential',
      date: '16.05.2022',
      title: 'Why Real-Time Alerts are Essential for Investors?'
    },
    {
      id: '6',
      url: 'how-to-read-option-alerts',
      date: '17.05.2022',
      title: 'How to Read Option Alerts: The Ultimate Guide'
    },
    {
      id: '7',
      url: 'why-swing-trading',
      date: '31.05.2022',
      title: 'Why Swing Trading Is More Lucrative Than Day Trading'
    },
    {
      id: '8',
      url: 'getting-started-with-stock-trading',
      date: '16.06.2022',
      title: 'Getting Started with Stock Trading: Everything You Need to Know'
    },
    {
      id: '9',
      url: 'how-to-make-money-of-penny-stocks',
      date: '29.06.2022',
      title: 'How to Make Money off Penny Stocks: The Complete Guide'
    },
    {
      id: '10',
      url: 'using-stock-alerts-to-improve-your-investing-strategy',
      date: '11.07.2022',
      title: 'Using Stock Alerts to Improve Your Investing Strategy: Learn the Trading Strategies of the Pros'
    }
  ]

  constructor(private router: Router) {
    this.url = this.router.url.split("/")[this.router.url.split("/").length - 1];
    this.id = Number(this.blogPosts.find(post => post.url === this.url)?.id);
  }
}
