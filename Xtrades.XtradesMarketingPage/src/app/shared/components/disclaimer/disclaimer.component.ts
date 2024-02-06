import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss'],
})
export class DisclaimerComponent implements OnInit {
  public disclaimer: string =
    // eslint-disable-next-line max-len
    'NO MONEY OR OTHER CONSIDERATION IS BEING SOLICITED, AND IF SENT IN RESPONSE, WILL NOT BE ACCEPTED. NO OFFER TO BUY THE SECURITIES CAN BE ACCEPTED AND NO PART OF THE PURCHASE PRICE CAN BE RECEIVED UNTIL THE OFFERING STATEMENT IS FILED AND ONLY THROUGH AN INTERMEDIARY’S PLATFORM. AN INDICATION OF INTEREST INVOLVES NO OBLIGATION OR COMMITMENT OF ANY KIND. "RESERVING" SECURITIES IS SIMPLY AN INDICATION OF INTEREST';
  constructor() {}

  ngOnInit(): void {}
}
