import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-hero',
  templateUrl: './main-hero.component.html',
  styleUrls: ['./main-hero.component.scss']
})
export class MainHeroComponent {
  handleGoToBetaAppClick(): void {
    window.location.href = 'https://app.xtrades.net/';
  }
}
