import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MembershipCard } from '../membership/membership.model';

@Component({
  selector: 'app-membership-card',
  templateUrl: './membership-card.component.html',
  styleUrls: ['./membership-card.component.scss'],
})
export class MembershipCardComponent {
  @Input() data!: MembershipCard;
  @Output() actionClicked = new EventEmitter();

  constructor(private router: Router) {

  }

  onSubscribeClick() {
    window.location.href = 'https://app.xtrades.net/login/sign-up?redirectUrl=plans';
  }
}
