import { Component, Input, OnInit } from '@angular/core';
import { ScreenService } from '@core/screen.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() subtitle: string | string[] = '';
  @Input() titleImgSrc = '';
  @Input() backgroundNoise = false;
  @Input() squeezed = false;
  @Input() iconPath = '';
  @Input() iconAlt = '';
  @Input() link = '';
  subtitleArray: string[] = [];

  constructor(public screenService: ScreenService) {}

  ngOnInit(): void {
    if (Array.isArray(this.subtitle) && this.subtitle.length > 0) {
      this.subtitleArray = this.subtitle;
      this.subtitle = '';
    }
  }
}
