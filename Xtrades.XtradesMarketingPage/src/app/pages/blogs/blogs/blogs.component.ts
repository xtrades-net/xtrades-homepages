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
      snippet: "If you're looking for a commission-free investing app with a wide variety of investment options, Webull is worth considering. This blog post will provide an overview of Webull and how to sign up.",
      url: 'what-is-webull',
      date: '13.05.2022',
      href: '/blogs/what-is-webull',
      title: 'What Is Webull? How to Sign Up and What You Need to Know!'
    },
    {
      id: '2',
      snippet: 'TradingView offers a wide range of features and tools that help traders analyze charts more effectively. Some of these features include: Various chart types (bar charts, candlestick charts, etc.) Annotations and drawing tools',
      url: 'what-is-tradingview',
      date: '14.05.2022',
      href: '/blogs/what-is-tradingview',
      title: 'What is TradingView?'
    },
    {
      id: '3',
      snippet: 'Copy trading is a relatively new phenomenon that has been growing in popularity in recent years. It is a way for investors to copy the trades of other traders with the hope of achieving the same or better results.',
      url: 'copy-trading',
      date: '16.05.2022',
      href: '/blogs/copy-trading',
      title: 'Copy Trading: What Investors Need to Know'
    },
    {
      id: '4',
      snippet: 'Making money in the stock market is all about being able to act quickly on the best opportunities. That"s why stock alerts are such an important tool for investors',
      url: 'how-to-make-most-of-stock-alerts',
      date: '16.05.2022',
      href: '/blogs/how-to-make-most-of-stock-alerts',
      title: 'How to Make the Most Out of Stock Alerts: Tips for Maximum Profits'
    },
    {
      id: '5',
      snippet: "It's no secret that investors need to stay on top of their portfolios at all times. With the market constantly shifting, is crucial to have up-to-date information at your fingertips. That's where real-time alerts come in.",
      url: 'why-real-time-alerts-are-essential',
      date: '16.05.2022',
      href: '/blogs/why-real-time-alerts-are-essential',
      title: 'Why Real-Time Alerts are Essential for Investors?'
    },
    {
      id: '6',
      snippet: 'Option alerts are an essential tool for options traders. They allow you to stay informed about changing market conditions and take advantage of new trading opportunities.',
      url: 'how-to-read-option-alerts',
      date: '17.05.2022',
      href: '/blogs/how-to-read-option-alerts',
      title: 'How to Read Option Alerts: The Ultimate Guide'
    },
    {
      id: '7',
      url: 'why-swing-trading',
      snippet: 'Swing trading is a type of investment strategy that allows traders to hold positions for more extended periods, typically days or weeks. Swing traders typically buy stocks with the intention of selling them at a higher price in the future.',
      date: '31.05.2022',
      href: '/blogs/why-swing-trading',
      title: 'Why Swing Trading Is More Lucrative Than Day Trading'
    },
    {
      id: '8',
      url: 'getting-started-with-stock-trading',
      snippet: 'New investors often feel intimidated by the idea of trading stocks, but if you"re interested in learning how it works and what mistakes new traders will make when they start out today, keep reading!',
      date: '16.06.2022',
      href: '/blogs/getting-started-with-stock-trading',
      title: 'Getting started with Stock Trading. Everything you need to know.'
    },
    {
      id: '9',
      url: 'how-to-make-money-of-penny-stocks',
      snippet: 'In the world of finance, penny stocks are a classically dangerous investment. They are often small, speculative companies that trade on the over-the-counter market or penny stock exchanges.',
      date: '29.06.2022',
      href: '/blogs/how-to-make-money-of-penny-stocks',
      title: 'How to Make Money off Penny Stocks: The Complete Guide'
    },
    {
      id: '10',
      url: 'using-stock-alerts-to-improve-your-investing-strategy',
      snippet: 'Stock alerts are a great way to stay informed about the market. They can help you make better investment decisions and protect your investments from large fluctuations that could harm their value. Stock alerts can also be an excellent tool for day traders and investors who want to take advantage of short-term opportunities in the market.',
      date: '11.07.2022',
      href: '/blogs/using-stock-alerts-to-improve-your-investing-strategy',
      title: 'Using Stock Alerts to Improve Your Investing Strategy'
    },
    {
      id: '11',
      url: 'what-are-the-best-social-trading-applications-or-platforms',
      snippet: "When it comes to investing and trading, there are a lot of different options out there. If you're looking for a way to take advantage of the wisdom of the crowd, then you should consider using a social trading platform.",
      href: '/blogs/what-are-the-best-social-trading-applications-or-platforms',
      date: '18.07.2022',
      title: 'What Are The Best Social Trading Applications or Platforms?'
    }
  ].reverse();

  constructor(private router: Router) { }

  goToBlogPost(event: RouterEvent) {
    this.router.navigateByUrl(`blogs/${event.url}`);
  }
}
