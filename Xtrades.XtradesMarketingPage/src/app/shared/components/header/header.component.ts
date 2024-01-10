import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ScreenService } from '@core/screen.service';
import { BodyScrollingService } from '@core/body-scrolling.service';
import { HeaderProvider } from './header-provider/header-provider';
import { Subscription } from 'rxjs';
import { HeaderElement } from './header-models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() isMainHeader = true;
  @Input() headerElements = [];
  @Input() headerElementsLast: HeaderElement[] = [];

  constructor(
    public headerProvider: HeaderProvider,
    public screenService: ScreenService,
    private bodyScrolling: BodyScrollingService,
    private location: Location
  ) {}

  isMobile = false;
  isMenuOpened = false;
  public route = '';
  subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      this.screenService.screenSize$.subscribe(
        (x) => (this.isMobile = x.width < 992)
      )
    );
    this.route = this.location.path();
  }

  login(): void {
    window.open('https://app.xtrades.net?modal=signin', '_blank');
  }

  signup(): void {
    window.open('https://app.xtrades.net/plans', '_blank');
  }

  onMobileMenuOpen(): void {
    this.bodyScrolling.preventScrolling();
    this.isMenuOpened = true;
  }

  onMobileMenuClose(): void {
    this.bodyScrolling.allowScrolling();
    this.isMenuOpened = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
