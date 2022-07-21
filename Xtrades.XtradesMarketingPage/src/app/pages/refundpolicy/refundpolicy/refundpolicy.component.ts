import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-refundpolicy',
  templateUrl: './refundpolicy.component.html',
  styleUrls: ['./refundpolicy.component.scss'],
})
export class RefundPolicyComponent implements AfterViewInit {
  ngAfterViewInit() {
    document.querySelector('body')?.classList.remove('inactive-scroll');
    document.querySelector('.full-screen')?.classList.remove('full-height');
  }
}