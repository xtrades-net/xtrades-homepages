import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionService } from '@core/subscription.service';

@Component({
  selector: 'app-footer-new',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  isSubscribed = false;
  isLoading = false;
  @Input() visibleDisclaimer = false;
  @Input() withEmail = false;
  @Input() theme = 'dark-theme';

  constructor(
    private subscriptionService: SubscriptionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async saveSubscriber(myForm: any, email: string) {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (myForm.invalid || !isEmail) {
      myForm.control.markAllAsTouched();
      return;
    }

    if (!email) {
      return;
    }
    try {
      this.isLoading = true;
      await this.subscriptionService.saveSubscriber(email);
      this.isSubscribed = true;
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }

  isInvalid(myForm: any): boolean {
    return (
      (myForm?.controls?.subscriberEmail?.errors?.required ||
        myForm?.controls?.subscriberEmail?.errors?.pattern) &&
      myForm?.submitted
    );
  }

  navigate(link: string) {
    this.router.navigate([link]);
  }
}
