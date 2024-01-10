import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
})
export class FaqsComponent implements OnInit {
  constructor() {}

  @Input() faqs = [
    {
      question: 'Is Xtrades Worth It?',
      answer:
        "Xtrades was initially created to fill a very large gap in the market. We saw that education and guidance relating to the short-term US markets were extremely overpriced. Blind leading the blind, while at the same time charging unreasonable amounts to provide their information. We've developed a team of very experienced veterans that are willing to provide our insights for a low price of only $38/month - undercutting the entire overpriced system we see today of furus charging $100-$200/month for hardly any resources.",
    },
    {
      question: 'Do You Offer Crypto?',
      answer: `We do not, but our partner server <a href="https://www.cryptotraders.com/" target="_blank" class="link-without-toogle-effect">cryptotraders.com</a> specializes in finding great trading opportunities to earn Crypto and Stocks. Led by a Trader that turned $8K into $1.4M (70BTC) during the 2017 Bull Market. The pricing is Equal on this front.`,
    },
  ];

  ngOnInit(): void {}
}
