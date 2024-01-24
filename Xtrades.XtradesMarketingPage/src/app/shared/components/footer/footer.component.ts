/* eslint-disable max-len */
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() backgroundColor: string = '';
  @Input() withEmail = false;
  public disclaimer: string =
    'NO MONEY OR OTHER CONSIDERATION IS BEING SOLICITED, AND IF SENT IN RESPONSE, WILL NOT BE ACCEPTED. NO OFFER TO BUY THE SECURITIES CAN BE ACCEPTED AND NO PART OF THE PURCHASE PRICE CAN BE RECEIVED UNTIL THE OFFERING STATEMENT IS FILED AND ONLY THROUGH AN INTERMEDIARY’S PLATFORM. AN INDICATION OF INTEREST INVOLVES NO OBLIGATION OR COMMITMENT OF ANY KIND. "RESERVING" SECURITIES IS SIMPLY AN INDICATION OF INTEREST';
  public showDisclaimer = false;

  @HostListener('document:mouseover', ['$event'])
  mouseover(event: Event) {
    let target = event.target as HTMLElement;
    if (target && target.classList.contains('disclaimer-switcher')) {
      this.showDisclaimer = true;
    }
  }

  @HostListener('document:mouseout', ['$event'])
  mouseleave(event: Event) {
    let target = event.target as HTMLElement;
    if (target && target.classList.contains('disclaimer-switcher')) {
      this.showDisclaimer = false;
    }
  }
}
