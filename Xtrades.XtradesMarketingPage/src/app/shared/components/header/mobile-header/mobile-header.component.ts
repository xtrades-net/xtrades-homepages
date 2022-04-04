import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScreenService } from 'src/app/core/screen.service';
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


  ngOnInit(): void {
    this.screenService.screenSize$.subscribe((x) => {
      this.isMobile = x.width < 992;
      if (!this.isMobile) this.onMenuClose('');
      return this.isMobile;
    });
  }

  handleJoinChatClick(): void {
    window.location.href = 'https://discord.com/invite/xtrades';
  }

  onMenuClose(link: string | undefined): void {
    if (link && link.indexOf('https') > -1) {
      window.open(link, '_blank');
    }
    this.triggerClose.emit();
  }
}
