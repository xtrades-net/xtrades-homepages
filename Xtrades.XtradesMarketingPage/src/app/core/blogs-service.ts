import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class BlogPostsService {
  public scrollToSection = new Subject();
  scrollToSection$ = this.scrollToSection.asObservable();
  public blogPosts = [
    {
      id: '1',
      snippet:
        "If you're looking for a commission-free investing app with a wide variety of investment options, Webull is worth considering. This blog post will provide an overview of Webull and how to sign up. We'll also discuss some of the features that investors will appreciate, such as the ability to trade on margin and short-sell stocks. Keep in mind that there are some restrictions investors should be aware of before signing up for an account with Webull, so read on to learn more!",
      url: 'what-is-webull',
      date: '13.05.2022',
      href: '/blogs/what-is-webull',
      title: 'What Is Webull? How to Sign Up and What You Need to Know!',
      image: 'assets/blogs/1/1-1.jpg',
      duration: Utils.getDuration(871),
    },
    {
      id: '2',
      snippet:
        'TradingView offers a wide range of features and tools that help traders analyze charts more effectively. Some of these features include: Various chart types (bar charts, candlestick charts, etc.) Annotations and drawing tools',
      url: 'what-is-tradingview',
      date: '14.05.2022',
      href: '/blogs/what-is-tradingview',
      title: 'What is TradingView?',
      image: 'assets/blogs/2/2-1.jpg',
      duration: Utils.getDuration(749),
    },
    {
      id: '3',
      snippet:
        'Copy trading is a relatively new phenomenon that has been growing in popularity in recent years. It is a way for investors to copy the trades of other traders with the hope of achieving the same or better results. But what is copy trading, and how can you use it to make money? In this article, we will explore these questions and more. We will also look at the benefits and risks of copy trading and some tips for investors who want to use this type of platform.',
      url: 'copy-trading',
      date: '16.05.2022',
      href: '/blogs/copy-trading',
      title: 'Copy Trading: What Investors Need to Know',
      image: 'assets/blogs/3/3-1.jpg',
      duration: Utils.getDuration(1577),
    },
    {
      id: '4',
      snippet: `Making money in the stock market is all about being able to act quickly on the best opportunities. That's why stock alerts are such an important tool for investors. By subscribing to a service that provides stock alerts, you can stay up-to-date on the latest movements in the market and make sure you don't miss out on any profitable opportunities.`,
      url: 'how-to-make-most-of-stock-alerts',
      date: '16.05.2022',
      href: '/blogs/how-to-make-most-of-stock-alerts',
      title:
        'How to Make the Most Out of Stock Alerts: Tips for Maximum Profits',
      image: 'assets/blogs/4/4-1.png',
      duration: Utils.getDuration(1003),
    },
    {
      id: '5',
      snippet: `It's no secret that investors need to stay on top of their portfolios at all times. With the market constantly shifting, it's crucial to have up-to-date information at your fingertips. That's where real-time alerts come in. They provide you with instant notifications about any changes in your investments, so you can make quick decisions about what to do next. In this blog post, we'll discuss the importance of real-time alerts and how they can help you maintain a successful portfolio.`,
      url: 'why-real-time-alerts-are-essential',
      date: '16.05.2022',
      href: '/blogs/why-real-time-alerts-are-essential',
      title: 'Why Real-Time Alerts are Essential for Investors?',
      image: 'assets/blogs/5/5-1.jpg',
      duration: Utils.getDuration(828),
    },
    {
      id: '6',
      snippet: `Option alerts are an essential tool for options traders. They allow you to stay informed about changing market conditions and take advantage of new trading opportunities. The world of options trading is a constantly changing one, with new developments happening every day. Option alerts are another option to stay on top of these changes and keep up with the market. An option alert service will send you an email whenever there's a significant change in the market for your strategy so that you can keep track.`,
      url: 'how-to-read-option-alerts',
      date: '17.05.2022',
      href: '/blogs/how-to-read-option-alerts',
      title: 'How to Read Option Alerts: The Ultimate Guide',
      image: 'assets/blogs/6/6-1.jpg',
      duration: Utils.getDuration(941),
    },
    {
      id: '7',
      url: 'why-swing-trading',
      snippet:
        'Swing trading is a type of investment strategy that allows traders to hold positions for more extended periods, typically days or weeks. Swing traders typically buy stocks with the intention of selling them at a higher price in the future. This differs from day trading, which is the practice of buying and selling stocks within the same day. Swing trading has many benefits over day trading, including lower risk, greater profitability, and less stress.',
      date: '31.05.2022',
      href: '/blogs/why-swing-trading',
      title: 'Why Swing Trading Is More Lucrative Than Day Trading',
      image: 'assets/blogs/7/7-1.jpg',
      duration: Utils.getDuration(819),
    },
    {
      id: '8',
      url: 'getting-started-with-stock-trading',
      snippet: `New investors often feel intimidated by the idea of trading stocks, but if you"re interested in learning how it works and what mistakes new traders will make when they start out today, keep reading! We'll cover everything from why people invest in shares to different strategies experienced professionals use. It would help if you also kept in mind that stock alerts with a reliable stock trading app are your best friend when trading. So whether you're just starting or have been doing this for a while now, we've got something perfect for everyone.`,
      date: '16.06.2022',
      href: '/blogs/getting-started-with-stock-trading',
      title: 'Getting started with Stock Trading. Everything you need to know.',
      image: 'assets/blogs/8/8-1.jpg',
      duration: Utils.getDuration(1544),
    },
    {
      id: '9',
      url: 'how-to-make-money-of-penny-stocks',
      snippet:
        'In the world of finance, penny stocks are a classically dangerous investment. They are often small, speculative companies that trade on the over-the-counter market or penny stock exchanges. While penny stocks may seem like a bargain, they are generally considered high-risk investments. They offer high rates of return on investments with a higher level of risk, trading all the while below a dollar per share. This is because penny stocks are often subject to manipulation and insider trading and can be very volatile. To find your Stock Trading Mentor to guide you in this crazy marketplace, the first step you need to take is to join this Penny Stock Discord.',
      date: '29.06.2022',
      href: '/blogs/how-to-make-money-of-penny-stocks',
      title: 'How to Make Money off Penny Stocks: The Complete Guide',
      image: 'assets/blogs/9/9-1.png',
      duration: Utils.getDuration(946),
    },
    {
      id: '10',
      url: 'using-stock-alerts-to-improve-your-investing-strategy',
      snippet:
        'Stock alerts are a great way to stay informed about the market. They can help you make better investment decisions and protect your investments from large fluctuations that could harm their value. Stock alerts can also be an excellent tool for day traders and investors who want to take advantage of short-term opportunities in the market.',
      date: '11.07.2022',
      href: '/blogs/using-stock-alerts-to-improve-your-investing-strategy',
      title: 'Using Stock Alerts to Improve Your Investing Strategy',
      image: 'assets/blogs/10/10-1.png',
      duration: Utils.getDuration(1436),
    },
    {
      id: '11',
      url: 'what-are-the-best-social-trading-applications-or-platforms',
      snippet:
        "When it comes to investing and trading, there are a lot of different options out there. If you're looking for a way to take advantage of the wisdom of the crowd, then you should consider using a social trading platform. These platforms allow investors and traders to share information and insights about investments and trades and help you make more informed decisions about your portfolio. This blog post will discuss social trading applications and platforms, how they work, and why you should consider using them for your investment needs.",
      href: '/blogs/what-are-the-best-social-trading-applications-or-platforms',
      date: '18.07.2022',
      title: 'What Are The Best Social Trading Applications or Platforms?',
      image: 'assets/blogs/11/11-1.png',
      duration: Utils.getDuration(1602),
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
      image: 'assets/blogs/13/13-1.png',
      duration: Utils.getDuration(2012),
    },
    {
      id: '14',
      url: 'xtrades-and-penny-stock-alerts',
      snippet:
        'Penny stocks are a pretty niche and particular field of trading.  In this field of trading, it requires a few leaders to really find these plays for the team.  Generally, you can get this done with a combination of a few watchful eyes and momentum trading scanners.  We have a lot of Penny Stock analysts in our team that are able to guide our team to victory in these sectors. At Xtrades, we are constantly rewarding the traders that are able to spot Penny Stocks fast and then turn these spotting into Penny Stock Alerts.  When you have Penny Stock Alerts that are of high accuracy, you build momentum within the community.',
      href: '/blogs/xtrades-and-penny-stock-alerts',
      date: '18.11.2022',
      title: 'Xtrades And Penny Stock Alerts',
      image: 'assets/blogs/14/14-1.png',
      duration: Utils.getDuration(504),
    },
    {
      id: '15',
      url: 'trading-scripts-and-trading-channels',
      snippet:
        'What are Trading Scripts? This is a great question.  A script is an automated creation that is there to help us as traders define that a technical parameter has been met.  Generally, people use Trading scripts for entries and exits, but they can also be optimized to show other things like unusual volume, or other factors like pattern recognition.',
      href: '/blogs/trading-scripts-and-trading-channels',
      date: '22.11.2022',
      title: 'Trading Scripts and Trading Channels',
      image: 'assets/blogs/15/15-1.png',
      duration: Utils.getDuration(398),
    },
    {
      id: '16',
      url: 'how-to-start-stock-trading',
      snippet:
        "Who currently has the best stock trading platform on the internet?  That's a good question my friend, but it's also an easy one to answer.  In order to claim to be the best stock trading platform on the internet, you must have the capability of creating an amazing stocks trading community. In order to do this, the proper incentivization and recognition systems must be in place.",
      href: '/blogs/how-to-start-stock-trading',
      date: '25.11.2022',
      title: 'How To Start Stock Trading',
      image: 'assets/blogs/16/16-1.png',
      duration: Utils.getDuration(500),
    },
    {
      id: '17',
      url: 'the-rise-of-a-social-trading-application',
      snippet:
        'The concept of social trading was not yet discovered until the late 21st century. Prior to this, people used websites like Stocktwits, or Twitter which are slowly becoming outdated in regards to their ability to truly supply users with a user experience that encompasses everything needed for traders to find a larger edge against their competitors.  Other than this, people were also led falsey astray by being shilled into boiler rooms, where the assets being alerted were simply pump and dumps that are only there to benefit the creators / owners of those boiler rooms. ',
      href: '/blogs/the-rise-of-a-social-trading-application',
      date: '29.11.2022',
      title: 'The Rise Of A Social Trading Application: Xtrades',
      image: 'assets/blogs/17/17-1.png',
      duration: Utils.getDuration(430),
    },
    {
      id: '18',
      url: 'what-is-copy-trading-how-do-i-get-involved',
      snippet:
        "In this current day and age - most people are too busy to actually try and find the best trades for themselves.  It's hard to integrate the overall market movement and fluidity into your daily process, which is why they usually sign up for a service that does this for them!  However there is an inconvenience factor that lies within this, which is the fact that customers still need to open their broker, and execute the trade themselves after receiving an alert from alerters / gurus out there.",
      href: '/blogs/what-is-copy-trading-how-do-i-get-involved',
      date: '30.11.2022',
      title: 'What Is Copy Trading? How Do I Get Involved?',
      image: 'assets/blogs/18/18-1.png',
      duration: Utils.getDuration(339),
    },
    {
      id: '19',
      url: 'a-first-of-its-kind-application-for-traders',
      snippet:
        "Have you ever thought of a trading app that encompassed everything you needed as a trader?  From receiving isolated push notifications, to finding the right mentor and coach that you can strictly follow and listen to for advice, to knowing what the general public thinks about an asset. What about getting educated or using the same tools as the traders that you're interested in following - this is all possible through downloading our Apple Store Xtrades App, or if you're an android uer, you can download our Xtrades Android App.",
      href: '/blogs/a-first-of-its-kind-application-for-traders',
      date: '01.12.2022',
      title: "A First Of It's Kind Application For Traders: The Xtrades App",
      image: 'assets/blogs/19/19-1.png',
      duration: Utils.getDuration(473),
    },
    {
      id: '20',
      url: 'differences-between-penny-stocks-and-normal-stocks',
      snippet:
        'Why are people so attracted to trading penny stocks?  This is a good question - it’s because penny stocks are more of a short term game.  People are drawn to instant gratification and penny stocks can be a provider for this.  It is a more active form of playing the markets.  You wake up in the morning, check the chat, check the charts and make a semi-informed decision on what trade will go up the most today.  In a sense, some can say it’s a form of betting with a slight edge if you know what you are doing. There’s also a simplicity factor when it comes to trading penny stocks.',
      href: '/blogs/differences-between-penny-stocks-and-normal-stocks',
      date: '02.11.2023',
      title: 'What are the differences between Penny Stocks and Normal Stocks?',
      image: 'assets/blogs/20/20-1.png',
      duration: Utils.getDuration(605),
    },
    {
      id: '21',
      url: 'guide-to-options-flow-and-understanding-call-option-sweep',
      snippet:
        'How to trade options using Options Flow information! Read our guide on call option sweeps & how to make money trading them',
      href: '/blogs/guide-to-options-flow-and-understanding-call-option-sweep',
      date: '15.11.2023',
      title: 'Options Flow is DIFFERENT! Understanding Call Option Sweep',
      image: 'assets/blogs/21/21-1.png',
      duration: Utils.getDuration(1462),
    },
    {
      id: '22',
      url: 'guide-to-swing-trading-strategies',
      snippet:
        'For traders of all levels, from novice to professional, finding day and swing trading strategies is easy with XTrades',
      href: '/blogs/guide-to-swing-trading-strategies',
      date: '27.11.2023',
      title:
        'Unveiling the Lucrative Realm of Swing Trading: A Deep Dive into Xtrades',
      image: 'assets/blogs/22/xstats.jpg',
      duration: Utils.getDuration(1104),
    },
    {
      id: '23',
      url: 'learn-stock-market-trading',
      snippet:
        'Tips for getting started beginner day trading, stock options trading, learning stock trading and learning options trading. Help to get a head start',
      href: '/blogs/learn-stock-market-trading',
      date: '01.12.2023',
      title: 'You want to trade stocks but don’t know where to start',
      image: 'assets/blogs/23/success.jpg',
      author: 'Omar G Xtrades',
      autorLink: 'https://app.xtrades.net/coupon/d05oXywq',
      initials: 'OG',
      duration: Utils.getDuration(1415),
    },
    {
      id: '24',
      url: 'best-ai-penny-stocks-to-invest',
      snippet:
        'Trading AI penny stocks, cannabis penny stocks, and biotech penny stocks can be risky, but lucrative if you know what you’re doing',
      href: '/blogs/best-ai-penny-stocks-to-invest',
      date: '04.12.2023',
      title: 'Why People Trade Penny Stocks and How to Get Started',
      image: 'assets/blogs/24/bars.png',
      author: 'Omar G Xtrades',
      autorLink: 'https://app.xtrades.net/coupon/d05oXywq',
      initials: 'OG',
      duration: Utils.getDuration(1070),
    },
    {
      id: '12',
      url: 'how-to-start-stock-training',
      snippet:
        "The world of stock trading can be daunting for those who are new to it. This blog post will walk you through everything necessary to get started, from buying your first shares all the way up to achieving success on Wall Street! We'll cover basic information like how much money one should invest with a brokerage account and some tips & tricks designed just as much towards beginners like yourself looking to make their experience successful. So whether or not this is something currently happening within your life - whether you are trying out different financial avenues because finances aren't going quite right lately - you're covered. Learning how to start stock trading can help in your journey to financial success!",
      href: '/blogs/how-to-start-stock-training',
      date: '06.12.2023',
      title: 'How to start Stock Trading: The Basics, Tips and Tricks',
      image: 'assets/blogs/12/options.png',
      duration: Utils.getDuration(7511),
    },
    {
      id: '25',
      url: 'how-to-win-while-swing-trading-stocks-and-options',
      snippet:
        'Taking a slightly longer view on trading can be very rewarding. The beauty of swing trades is often that it gives traders more time to be strategic and to patiently watch their plays work out over a period of days',
      href: '/blogs/how-to-win-while-swing-trading-stocks-and-options',
      date: '10.12.2023',
      title: 'How to Win While Swing Trading Stocks and Options',
      image: 'assets/blogs/25/buy-hold-sell.jpg',
      author: 'Omar G Xtrades',
      autorLink: 'https://app.xtrades.net/coupon/d05oXywq',
      initials: 'OG',
      duration: Utils.getDuration(870),
    },
    {
      id: '26',
      url: 'how-to-manage-risk-with-trading',
      snippet:
        'Get tips and strategies for trading options for beginners with X Trades. The expert help you need to succeed at day and swing trading',
      href: '/blogs/how-to-manage-risk-with-trading',
      date: '18.12.2023',
      title: 'How To Manage Risk With Trading Options For Beginners',
      image: 'assets/blogs/26/26-1.png',
      duration: Utils.getDuration(1250),
      tableOfContent: [
        'Risk Of Option Contracts',
        'Beware The Theta',
        'The 1% Rule',
        'A Stop-Loss Strategy',
        'Final Thoughts On Trading Options For Beginners',
      ],
    },
    {
      id: '27',
      url: 'why-you-need-real-time-alerts-for-your-stock-trading',
      snippet: `We'll go over a few easy ways to start utilizing real-time alerts, whether they're real-time stocks trackers, real-time stock news alerts, or real-time trade alerts, for your trading activity`,
      href: '/blogs/why-you-need-real-time-alerts-for-your-stock-trading',
      date: '10.01.2024',
      title: 'Why You Need Real-Time Alerts for Your Stock Trading',
      image: 'assets/blogs/27/27-1.jpg',
      author: 'Omar G Xtrades',
      autorLink: 'https://app.xtrades.net/coupon/d05oXywq',
      initials: 'OG',
      duration: Utils.getDuration(1620),
      tableOfContent: [
        'The market moves fast, you need the tools to keep up with it',
        'Setting up basic pricing alerts',
        'Keeping up with news alerts',
        'Trade alerts keep you on top of your accounts',
      ],
    },
    {
      id: '28',
      url: 'two-secrets-of-successful-stock-traders-good-scripts-and-channel-trading',
      snippet: `Two important tools for intermediate stock and options traders are learning to use stock scripts (or indicators) and learning to spot trading channels.`,
      href: '/blogs/two-secrets-of-successful-stock-traders-good-scripts-and-channel-trading',
      date: '12.01.2024',
      title:
        'Two Secrets of Successful Stock Traders: Good Scripts and Channel Trading',
      image: 'assets/blogs/28/28-1.jpg',
      author: 'Omar G Xtrades',
      autorLink: 'https://app.xtrades.net/coupon/d05oXywq',
      initials: 'OG',
      duration: Utils.getDuration(972),
      tableOfContent: [
        'Advanced trading involves having the right tools for the job',
        'Getting started with trading scripts',
        'How to explore channels for stock-market trading',
        'Summary',
      ],
    },
    {
      id: '29',
      url: 'social-trading-and-how-to-find-a-trading-community',
      snippet: `Social trading is a new type of trading which takes place in a social trading community. You can join a social trading community on Discord, Reddit or X and take trade alerts from other members, analysts and senior trading experts. Customize your trades based on your personal style and preferences!`,
      href: '/blogs/social-trading-and-how-to-find-a-trading-community',
      date: '13.01.2024',
      title: 'Social Trading and How to Find a Trading Community',
      image: 'assets/blogs/29/29-1.jpg',
      author: 'Omar G Xtrades',
      autorLink: 'https://app.xtrades.net/coupon/d05oXywq',
      initials: 'OG',
      duration: Utils.getDuration(2494),
      tableOfContent: [
        'What is Social Trading?',
        'How I got into it?',
        'What is so important about social trading?',
      ],
    },
    {
      id: '30',
      url: 'tradersync-comparison-vs-xtrades',
      snippet: `If you’re curious about the differences between XTrades and TraderSync, our comprehensive guide will help you find the right platform to make the best decisions with your trading strategies. From using the stocks tracker in real time tools to understanding how does a trading journal work, check out our comprehensive comparison.`,
      href: '/blogs/tradersync-comparison-vs-xtrades',
      date: '24.01.2024',
      title:
        'Understanding The Differences Between Xtrades And TraderSync: A Comprehensive Comparison',
      image: 'assets/blogs/30/30-1.jpg',
      author: 'Omar G Xtrades',
      autorLink: 'https://app.xtrades.net/coupon/d05oXywq',
      initials: 'OG',
      duration: Utils.getDuration(1188),
      tableOfContent: [
        'XTrades And TraderSync At A Glance',
        'A Brief Overview Of Both Xtrades And TraderSync',
        'Key Features Of XTrades And TraderSync: A Side-By-Side Comparison',
      ],
    },
    {
      id: '31',
      url: 'stock-and-options-trading-journal',
      snippet: `A stock trading journal is a tool to keep track of the trades you make in order to explore where you are most profitable in your stock or options trade!`,
      href: '/blogs/stock-and-options-trading-journal',
      date: '13.02.2024',
      title: 'Stock & Options Trading Journal',
      image: 'assets/blogs/default-img.svg',
      author: 'Marciokoko',
      autorLink: 'https://app.xtrades.net/profile/marciokoko',
      initials: 'MC',
      duration: Utils.getDuration(1912),
      tableOfContent: [
        'What should a Stock or Options Trading Journal have?',
        'Data Points for a successful Trading Tracker System',
        'Free Options Trading Tracker Features: Profit % Leaderboard',
        'Using the Trading Journal Leaderboard Tracker to Find Winning Trades',
        'Boost Your Options Trading Performance Using a Trading Journal & Analyzing the Data',
        'Why should I use stock trading journal software? Final Thoughts'
      ],
    },
  ].reverse();

  constructor() {}

  goTo(data: number): void {
    this.scrollToSection.next(data);
  }
}
