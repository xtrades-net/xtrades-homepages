import { Component, OnInit } from '@angular/core';
import { ScreenService } from '@core/screen.service';
import { BodyScrollingService } from '@core/body-scrolling.service';
import { HeaderProvider } from './header-provider/header-provider';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public headerProvider: HeaderProvider,
    public screenService: ScreenService,
    private bodyScrolling: BodyScrollingService
  ) {}

  isMobile = false;
  isMenuOpened = false;

  ngOnInit(): void {
    this.screenService.screenSize$.subscribe(
      (x) => (this.isMobile = x.width < 992)
    );
  }

  handleJoinChatClick(): void {
    window.location.href = 'http://discord.gg/xtrades';
  }

  onMobileMenuOpen(): void {
    this.bodyScrolling.preventScrolling();
    this.isMenuOpened = true;
  }

  onMobileMenuClose(): void {
    this.bodyScrolling.allowScrolling();
    this.isMenuOpened = false;
  }
}
