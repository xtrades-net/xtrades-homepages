import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-hero',
  templateUrl: './main-hero.component.html',
  styleUrls: ['./main-hero.component.scss']
})
export class MainHeroComponent implements AfterViewInit {

  ngAfterViewInit() {
    document.querySelector('body')?.classList.remove('inactive-scroll');
    document.querySelector('.full-screen')?.classList.remove('full-height');
  }

  handleGoToLinkClick(link: string): void {
    window.open(
      link,
      '_blank'
    );
  }
}
