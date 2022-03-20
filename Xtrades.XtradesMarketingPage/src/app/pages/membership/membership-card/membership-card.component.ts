import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MembershipCard } from '../membership/membership.model';

@Component({
  selector: 'app-membership-card',
  templateUrl: './membership-card.component.html',
  styleUrls: ['./membership-card.component.scss'],
})
export class MembershipCardComponent {
  @Input() data: MembershipCard;
  @Output() actionClicked = new EventEmitter();
}
