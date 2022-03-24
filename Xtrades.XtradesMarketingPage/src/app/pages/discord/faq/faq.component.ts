import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  pattern =
    '{BTO/STC | STO/BTC} {ticker} {strikePrice}{C/P} {expDate} @ {contractPrice}';
}
