import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScreenService } from 'src/app/core/screen.service';
import { HeaderElementListComponent } from '../header-element-list/header-element-list.component';
import { HeaderProvider } from '../header-provider/header-provider';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
})
export class MobileHeaderComponent implements OnInit {
  @Input() isMobile = true;
  @Input() onClose: any;

  constructor(
    public headerProvider: HeaderProvider,
    public screenService: ScreenService
  ) {}

  @Output() triggerClose = new EventEmitter<Event>();

  headerElementListComponent = HeaderElementListComponent;

  ngOnInit(): void {
    this.screenService.screenSize$.subscribe((x) => {
      this.isMobile = x.width < 992;
      if (!this.isMobile) this.onMenuClose();
      return this.isMobile;
    });
  }

  handleJoinChatClick(): void {
    window.location.href = 'https://discord.com/invite/xtrades';
  }

  onMenuClose(): void {
    this.triggerClose.emit();
  }
}
