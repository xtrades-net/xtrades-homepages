import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ScreenService } from 'src/app/core/screen.service';
import { HeaderProvider } from '../header-provider/header-provider';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
})
export class MobileHeaderComponent implements OnInit, OnDestroy {
  @Input() headerElements = [];
  @Input() isMobile = true;
  @Input() isDropdown = false;
  @Input() onClose: any;
  subscription = new Subscription();

  constructor(
    public headerProvider: HeaderProvider,
    public screenService: ScreenService,
    private location: Location,
    private router: Router
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

  login(): void {
    window.open('https://app.xtrades.net?modal=signin', '_blank');
  }

  signup(): void {
    window.open('https://app.xtrades.net/plans', '_blank');
  }

  onMenuClose(): void {
    this.triggerClose.emit();
  }

  navigateTo(link: any) {
    this.router.navigate([`/${link}`]);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
