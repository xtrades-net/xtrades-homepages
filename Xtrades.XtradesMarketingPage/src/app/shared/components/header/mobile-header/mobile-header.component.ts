import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScreenService } from 'src/app/core/screen.service';
import { HeaderProvider } from '../header-provider/header-provider';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
})
export class MobileHeaderComponent implements OnInit, OnDestroy {
  @Input() isMobile = true;
  @Input() onClose: any;
  subscription = new Subscription();

  constructor(
    public headerProvider: HeaderProvider,
    public screenService: ScreenService
  ) {}

  @Output() triggerClose = new EventEmitter<Event>();

  ngOnInit(): void {
    this.subscription.add(
      this.screenService.screenSize$.subscribe((x) => {
        this.isMobile = x.width < 992;
        if (!this.isMobile) this.onMenuClose();
        return this.isMobile;
      })
    );
  }

  handleGoToBetaAppClick(): void {
    window.location.href = 'https://app.beta.xtrades.net/';
  }

  onMenuClose(): void {
    this.triggerClose.emit();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
