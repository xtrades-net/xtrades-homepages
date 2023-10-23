import { Component, Input, OnInit } from '@angular/core';
import { ScreenService } from '@core/screen.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() titleImgSrc = '';
  @Input() backgroundNoise = false;
  @Input() squeezed = false;
  @Input() iconPath = '';
  @Input() iconAlt = '';

  constructor(public screenService: ScreenService) {}

  ngOnInit(): void {}
}
