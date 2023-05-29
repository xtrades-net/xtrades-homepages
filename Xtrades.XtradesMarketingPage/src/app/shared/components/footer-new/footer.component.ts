import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '@core/subscription.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  isSubscribed = false;
  isLoading = false;

  constructor(private subscriptionService: SubscriptionService) {}

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
}
