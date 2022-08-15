import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() bannerText = 'CAUTION: Xtrades & CryptoTraders Discord servers hacked';
  @Input() buttonText = 'See more';
  @Input() errorText = '';
  @Input() iconPath = 'warning';
  @Input() iconAlt = 'Warning';
  @Output() emitButtonClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  buttonClicked() {
    this.emitButtonClicked.emit('warning-modal');
  }
}
