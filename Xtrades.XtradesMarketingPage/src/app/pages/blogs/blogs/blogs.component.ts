import { Component, Renderer2, Inject } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { LoadingService } from '@core/loading.service';

import { SeoService } from '@shared/service/seo.service';
import { DOCUMENT, Location } from '@angular/common';
import { Title_Description } from '@shared/components/blog-post/seo-config/seo.constants';

export type BlogPost = {
  id: string;
  snippet: string;
  url: string;
  date: string;
  href: string;
  title: string;
};

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent {
  id = 1;
  headerElements = ['Blogs', 'Updates', 'Xhub uploads', 'Ideas', 'Tools'];
  blogPosts: BlogPost[] = [
    {
      id: '1',
      snippet:
        "If you're looking for a commission-free investing app with a wide variety of investment options, Webull is worth considering. This blog post will provide an overview of Webull and how to sign up.",
      url: 'what-is-webull',
      date: '13.05.2022',
      href: '/blogs/what-is-webull',
      title: 'What Is Webull? How to Sign Up and What You Need to Know!',
    },
    {
      id: '2',
      snippet:
        'TradingView offers a wide range of features and tools that help traders analyze charts more effectively. Some of these features include: Various chart types (bar charts, candlestick charts, etc.) Annotations and drawing tools',
      url: 'what-is-tradingview',
      date: '14.05.2022',
      href: '/blogs/what-is-tradingview',
      title: 'What is TradingView?',
    },
    {
      id: '3',
      snippet:
        'Copy trading is a relatively new phenomenon that has been growing in popularity in recent years. It is a way for investors to copy the trades of other traders with the hope of achieving the same or better results.',
      url: 'copy-trading',
      date: '16.05.2022',
      href: '/blogs/copy-trading',
      title: 'Copy Trading: What Investors Need to Know',
    },
    {
      id: '4',
      snippet:
        'Making money in the stock market is all about being able to act quickly on the best opportunities. That"s why stock alerts are such an important tool for investors',
      url: 'how-to-make-most-of-stock-alerts',
      date: '16.05.2022',
      href: '/blogs/how-to-make-most-of-stock-alerts',
      title:
        'How to Make the Most Out of Stock Alerts: Tips for Maximum Profits',
    },
    {
      id: '5',
      snippet:
        "It's no secret that investors need to stay on top of their portfolios at all times. With the market constantly shifting, is crucial to have up-to-date information at your fingertips. That's where real-time alerts come in.",
      url: 'why-real-time-alerts-are-essential',
      date: '16.05.2022',
      href: '/blogs/why-real-time-alerts-are-essential',
      title: 'Why Real-Time Alerts are Essential for Investors?',
    },
    {
      id: '6',
      snippet:
        'Option alerts are an essential tool for options traders. They allow you to stay informed about changing market conditions and take advantage of new trading opportunities.',
      url: 'how-to-read-option-alerts',
      date: '17.05.2022',
      href: '/blogs/how-to-read-option-alerts',
      title: 'How to Read Option Alerts: The Ultimate Guide',
    },
    {
      id: '7',
      url: 'why-swing-trading',
      snippet:
        'Swing trading is a type of investment strategy that allows traders to hold positions for more extended periods, typically days or weeks. Swing traders typically buy stocks with the intention of selling them at a higher price in the future.',
      date: '31.05.2022',
      href: '/blogs/why-swing-trading',
      title: 'Why Swing Trading Is More Lucrative Than Day Trading',
    },
    {
      id: '8',
      url: 'getting-started-with-stock-trading',
      snippet:
        'New investors often feel intimidated by the idea of trading stocks, but if you"re interested in learning how it works and what mistakes new traders will make when they start out today, keep reading!',
      date: '16.06.2022',
      href: '/blogs/getting-started-with-stock-trading',
      title: 'Getting started with Stock Trading. Everything you need to know.',
    },
    {
      id: '9',
      url: 'how-to-make-money-of-penny-stocks',
      snippet:
        'In the world of finance, penny stocks are a classically dangerous investment. They are often small, speculative companies that trade on the over-the-counter market or penny stock exchanges.',
      date: '29.06.2022',
      href: '/blogs/how-to-make-money-of-penny-stocks',
      title: 'How to Make Money off Penny Stocks: The Complete Guide',
    },
    {
      id: '10',
      url: 'using-stock-alerts-to-improve-your-investing-strategy',
      snippet:
        'Stock alerts are a great way to stay informed about the market. They can help you make better investment decisions and protect your investments from large fluctuations that could harm their value. Stock alerts can also be an excellent tool for day traders and investors who want to take advantage of short-term opportunities in the market.',
      date: '11.07.2022',
      href: '/blogs/using-stock-alerts-to-improve-your-investing-strategy',
      title: 'Using Stock Alerts to Improve Your Investing Strategy',
    },
    {
      id: '11',
      url: 'what-are-the-best-social-trading-applications-or-platforms',
      snippet:
        "When it comes to investing and trading, there are a lot of different options out there. If you're looking for a way to take advantage of the wisdom of the crowd, then you should consider using a social trading platform.",
      href: '/blogs/what-are-the-best-social-trading-applications-or-platforms',
      date: '18.07.2022',
      title: 'What Are The Best Social Trading Applications or Platforms?',
    },
    {
      id: '12',
      url: 'how-to-start-stock-training',
      snippet:
        "The world of stock trading can be daunting for those who are new to it. This blog post will walk you through everything necessary to get started, from buying your first shares all the way up to achieving success on Wall Street! We'll cover basic information like how much money one should invest with a brokerage account and some tips & tricks designed just as much towards beginners like yourself looking to make their experience successful. So whether or not this is something currently happening within your life - whether you are trying out different financial avenues because finances aren't going quite right lately - you're covered. Learning how to start stock trading can help in your journey to financial success!",
      href: '/blogs/how-to-start-stock-training',
      date: '25.07.2022',
      title: 'How to start Stock Trading: The Basics, Tips and Tricks',
    },
    {
      id: '13',
      url: 'how-to-make-money-in-bear-market',
      snippet:
        "It's no secret that the stock market is a volatile place. One day you're up, and the next, you're down. This can be especially true during a bear market when the markets are in decline and investments are losing value. If you're looking to make money in a bear market, it's essential to understand how these markets work and take appropriate action to protect your portfolio. This blog post will discuss seven tips for making money during a bear market and staying ahead of the curve!",
      href: '/blogs/how-to-make-money-in-bear-market',
      date: '01.08.2022',
      title:
        'How to Make Money in a Bear Market: Tips to Stay Ahead of the Curve',
    },
    {
      id: '14',
      url: 'xtrades-and-penny-stock-alerts',
      snippet:
        'Penny stocks are a pretty niche and particular field of trading.  In this field of trading, it requires a few leaders to really find these plays for the team.  Generally, you can get this done with a combination of a few watchful eyes and momentum trading scanners.  We have a lot of Penny Stock analysts in our team that are able to guide our team to victory in these sectors. At Xtrades, we are constantly rewarding the traders that are able to spot Penny Stocks fast and then turn these spotting into Penny Stock Alerts.  When you have Penny Stock Alerts that are of high accuracy, you build momentum within the community.',
      href: '/blogs/xtrades-and-penny-stock-alerts',
      date: '18.11.2022',
      title: 'Xtrades And Penny Stock Alerts',
    },
    {
      id: '15',
      url: 'trading-scripts-and-trading-channels',
      snippet:
        'What are Trading Scripts? This is a great question.  A script is an automated creation that is there to help us as traders define that a technical parameter has been met.  Generally, people use Trading scripts for entries and exits, but they can also be optimized to show other things like unusual volume, or other factors like pattern recognition.',
      href: '/blogs/trading-scripts-and-trading-channels',
      date: '22.11.2022',
      title: 'Trading Scripts and Trading Channels',
    },
    {
      id: '16',
      url: 'how-to-start-stock-trading',
      snippet:
        "Who currently has the best stock trading platform on the internet?  That's a good question my friend, but it's also an easy one to answer.  In order to claim to be the best stock trading platform on the internet, you must have the capability of creating an amazing stocks trading community. In order to do this, the proper incentivization and recognition systems must be in place.",
      href: '/blogs/how-to-start-stock-trading',
      date: '25.11.2022',
      title: 'How To Start Stock Trading',
    },
    {
      id: '17',
      url: 'the-rise-of-a-social-trading-application',
      snippet:
        'The concept of social trading was not yet discovered until the late 21st century. Prior to this, people used websites like Stocktwits, or Twitter which are slowly becoming outdated in regards to their ability to truly supply users with a user experience that encompasses everything needed for traders to find a larger edge against their competitors.  Other than this, people were also led falsey astray by being shilled into boiler rooms, where the assets being alerted were simply pump and dumps that are only there to benefit the creators / owners of those boiler rooms. ',
      href: '/blogs/the-rise-of-a-social-trading-application',
      date: '29.11.2022',
      title: 'The Rise Of A Social Trading Application: Xtrades',
    },
    {
      id: '18',
      url: 'what-is-copy-trading-how-do-i-get-involved',
      snippet:
        "In this current day and age - most people are too busy to actually try and find the best trades for themselves.  It's hard to integrate the overall market movement and fluidity into your daily process, which is why they usually sign up for a service that does this for them!  However there is an inconvenience factor that lies within this, which is the fact that customers still need to open their broker, and execute the trade themselves after receiving an alert from alerters / gurus out there.",
      href: '/blogs/what-is-copy-trading-how-do-i-get-involved',
      date: '30.11.2022',
      title: 'What Is Copy Trading? How Do I Get Involved?',
    },
    {
      id: '19',
      url: 'a-first-of-its-kind-application-for-traders',
      snippet:
        "Have you ever thought of a trading app that encompassed everything you needed as a trader?  From receiving isolated push notifications, to finding the right mentor and coach that you can strictly follow and listen to for advice, to knowing what the general public thinks about an asset. What about getting educated or using the same tools as the traders that you're interested in following - this is all possible through downloading our Apple Store Xtrades App, or if you're an android uer, you can download our Xtrades Android App.",
      href: '/blogs/a-first-of-its-kind-application-for-traders',
      date: '01.12.2022',
      title: "A First Of It's Kind Application For Traders: The Xtrades App",
    },
    {
      id: '20',
      url: 'differences-between-penny-stocks-and-normal-stocks',
      snippet:
        'Why are people so attracted to trading penny stocks?  This is a good question - it’s because penny stocks are more of a short term game.  People are drawn to instant gratification and penny stocks can be a provider for this.  It is a more active form of playing the markets.  You wake up in the morning, check the chat, check the charts and make a semi-informed decision on what trade will go up the most today.  In a sense, some can say it’s a form of betting with a slight edge if you know what you are doing. There’s also a simplicity factor when it comes to trading penny stocks.',
      href: '/blogs/differences-between-penny-stocks-and-normal-stocks',
      date: '02.11.2023',
      title: 'What are the differences between Penny Stocks and Normal Stocks?',
    },
    {
      id: '21',
      url: 'guide-to-options-flow-&-understanding-call-option-sweep',
      snippet:
        'How to trade options using Options Flow information! Read our guide on call option sweeps & how to make money trading them! Join our Discord to see our option flow scanner!',
      href: '/blogs/guide-to-options-flow-&-understanding-call-option-sweep',
      date: '15.11.2023',
      title: 'Options Flow is DIFFERENT! Understanding Call Option Sweep',
    },
  ].reverse();

  constructor(
    private router: Router,
    private loadingService: LoadingService,
    private location: Location,
    private SEOService: SeoService,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit(): void {
    // the script info -----
    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    script.text = Title_Description.blogPageScript || ``;
    this._renderer2.appendChild(this._document.body, script);

    // add cannonical link in page ---
    this.SEOService.createCanonicalLink(this.location.path());
  }
  ngAfterViewInit() {
    this.loadingService.removeLoader();
  }

  goToBlogPost(event: RouterEvent) {
    this.router.navigateByUrl(`blogs/${event.url}`);
  }
}
