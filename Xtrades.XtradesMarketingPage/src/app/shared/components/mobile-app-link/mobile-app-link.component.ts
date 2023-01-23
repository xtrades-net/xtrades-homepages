import { Component, Input, OnInit } from '@angular/core';

export type MobileAppLinkIcon = 'android' | 'discord' | 'ios';

@Component({
  selector: 'app-mobile-app-link',
  templateUrl: './mobile-app-link.component.html',
  styleUrls: ['./mobile-app-link.component.scss'],
})
export class MobileAppLinkComponent implements OnInit {
  @Input() icon: MobileAppLinkIcon = 'android';
  @Input() label: string = '';
  @Input() url: string = '';

  constructor() {}

  ngOnInit(): void {}
}
