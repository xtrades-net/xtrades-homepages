import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent {
  url = '';
  id = 0;
  blogPosts = [
    {
      id: '1',
      url: 'what-is-webull',
      date: '14.05.2022',
      title: 'What Is Webull? How to Sign Up and What You Need to Know!',
    },
    {
      id: '2',
      url: 'what-is-tradingview',
      date: '14.05.2022',
      title: 'What is TradingView?',
    },
    {
      id: '3',
      url: 'copy-trading',
      date: '16.05.2022',
      title: 'Copy Trading: What Investors Need to Know',
    },
    {
      id: '4',
      url: 'how-to-make-most-of-stock-alerts',
      date: '16.05.2022',
      title:
        'How to Make the Most Out of Stock Alerts: Tips for Maximum Profits',
    },
    {
      id: '5',
      url: 'why-real-time-alerts-are-essential',
      date: '16.05.2022',
      title: 'Why Real-Time Alerts are Essential for Investors?',
    },
    {
      id: '6',
      url: 'how-to-read-option-alerts',
      date: '17.05.2022',
      title: 'How to Read Option Alerts: The Ultimate Guide',
    },
    {
      id: '7',
      url: 'why-swing-trading',
      date: '31.05.2022',
      title: 'Why Swing Trading Is More Lucrative Than Day Trading',
    },
    {
      id: '8',
      url: 'getting-started-with-stock-trading',
      date: '16.06.2022',
      title: 'Getting Started with Stock Trading: Everything You Need to Know',
    },
    {
      id: '9',
      url: 'how-to-make-money-of-penny-stocks',
      date: '29.06.2022',
      title: 'How to Make Money off Penny Stocks: The Complete Guide',
    },
    {
      id: '10',
      url: 'using-stock-alerts-to-improve-your-investing-strategy',
      date: '11.07.2022',
      title:
        'Using Stock Alerts to Improve Your Investing Strategy: Learn the Trading Strategies of the Pros',
    },
    {
      id: '11',
      url: 'what-are-the-best-social-trading-applications-or-platforms',
      date: '18.07.2022',
      title: 'What Are The Best Social Trading Applications or Platforms?',
    },
    {
      id: '12',
      url: 'how-to-start-stock-training',
      date: '25.07.2022',
      title: 'How to start Stock Trading: The Basics, Tips and Tricks',
    },
    {
      id: '13',
      url: 'how-to-make-money-in-bear-market',
      date: '01.08.2022',
      title:
        'How to Make Money in a Bear Market: Tips to Stay Ahead of the Curve',
    },
    {
      id: '14',
      url: 'xtrades-and-penny-stock-alerts',
      date: '18.11.2022',
      title: 'Xtrades And Penny Stock Alerts',
    },
    {
      id: '15',
      url: 'trading-scripts-and-trading-channels',
      date: '22.11.2022',
      title: 'Trading Scripts and Trading Channels',
    },
    {
      id: '16',
      url: 'how-to-start-stock-trading',
      date: '25.11.2022',
      title: 'How To Start Stock Trading',
    },
    {
      id: '17',
      url: 'the-rise-of-a-social-trading-application',
      date: '29.11.2022',
      title: 'The Rise Of A Social Trading Application: Xtrades',
    },
    {
      id: '18',
      url: 'what-is-copy-trading-how-do-i-get-involved',
      date: '30.11.2022',
      title: 'What Is Copy Trading? How Do I Get Involved?',
    },
    {
      id: '19',
      url: 'a-first-of-its-kind-application-for-traders',
      date: '01.12.2022',
      title: "A First Of It's Kind Application For Traders: The Xtrades App",
    },
    {
      id: '20',
      url: 'differences-between-penny-stocks-and-normal-stocks',
      date: '02.11.2023',
      title: 'What are the differences between Penny Stocks and Normal Stocks?',
    },
    {
      id: '21',
      url: 'guide-to-options-flow-&-understanding-call-option-sweep',
      date: '15.11.2023',
      title: 'Options Flow is DIFFERENT! Understanding Call Option Sweep',
    },
  ];

  faqs = [
    {
      question: 'Are calls bullish and puts bearish?',
      answer:
      'Both. Remember you can either buy or sell a call and likewise with puts. So if you BUY A CALL, that is bullish but if you SELL A CALL then its a bearish trade. The same goes for puts; if you BUY A PUT its bearish but if you SELL A PUT its bullish.',
    },
    {
      question: 'Why is selling options more dangerous?',
      answer: "The reason is that selling options gives you the obligation to do something whereas buying options gives you the right, if you want it.  If you sell a call you are then obligated to turn over 100 shares if the trade didn’t go your way.  If you sell a put you are obligated to buy shares if the trade didn't go your way.",
    },
    {
      question: 'I bought a call and the stock went up but my profit barely moved or went down, why?',
      answer: "Remember the value of options is composed of intrinsic and extrinsic.  If an option’s expiry is too far out or it is way OTM, then option values move slower.  ATM and ITM options expiring the same day, 0DTE, are the ones that move more because they expire sooner.",
    },
    {
      question: 'I always get out of trades and then they take off and I lose money, what am I doing wrong?',
      answer: "This is very common when starting out if you have not taken the time to develop your trading strategy.  Yes strategy includes how to do technical analysis and pick trades but it more importantly tells you when to get out.  You must have a plan to take profits as soon as you can while leaving more contracts on the table and continue taking profits.  If you exit a trade that was green because it made a sudden move downwards; not only did you lose your unrealized profits but you also cut your chances of making money once that trade rebounds.  Watch our strategy videos.",
    },
    {
      question: 'How to check option flow?',
      answer: "Many new traders don’t know what is options flow or how to read it. To check options flow simply go to the options chain on your broker and look for large grouped trades.  On Xtrades.net you can simply look for the icon with the waves flowing inside the circle:<img  class='faqs-icon' src='assets/blogs/faqs-waves-icon.png' alt='Waves flowing inside the circle' /> <br> Call option sweeps:  Sweeps are a type of trade made by large investors.  While Block trades are trades of 10,000 shares or more made on one exchange.  Sweeps on the other hand are large trades made over many exchanges.  Sweeps and Blocks are identified, grouped and presented in Options Flow software to help traders get a better idea as to what stocks are being traded by Institutional investors who are the ones that make these types of trades.",
    },
  ];

  constructor(private router: Router) {
    this.url =
      this.router.url.split('/')[this.router.url.split('/').length - 1];
    this.id = Number(this.blogPosts.find((post) => post.url === this.url)?.id);
  }

  ngAfterViewInit() {
    document.querySelector('body')?.classList.remove('inactive-scroll');
    document.querySelector('.full-screen')?.classList.remove('full-height');
  }
}
