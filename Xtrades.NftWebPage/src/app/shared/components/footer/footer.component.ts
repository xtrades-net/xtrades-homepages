import { Component } from '@angular/core';
import { ScreenService } from '@core/screen.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isMobile = false;
  isMenuOpened = false;
  subscription = new Subscription();

  constructor(private screenService: ScreenService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.screenService.screenSize$.subscribe(
        (x) => (this.isMobile = x.width < 992)
      )
    );
  }
}
