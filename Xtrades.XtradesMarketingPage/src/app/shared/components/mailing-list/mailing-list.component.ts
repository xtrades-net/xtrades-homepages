import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ScreenService } from '@core/screen.service';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { SubscriptionService } from '@core/subscription.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mailing-list',
  templateUrl: './mailing-list.component.html',
  styleUrls: ['./mailing-list.component.scss'],
})
export class MailingListComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  alreadySubscribed = false;
  successfullySubscribed = false;
  alreadySubscribedStore = false;

  constructor(
    public screenService: ScreenService,
    private mailSubscribtion: SubscriptionService,
  ) {}

  handleGoToBetaAppClick(): void {
    window.location.href = 'https://app.xtrades.net/';
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    } else {
      this.subscribe();
    }
  }

  subscribe() {
    this.mailSubscribtion.saveSubscriber(this.form.get('email')?.value)
    .then(response => {
       this.successfullySubscribed = true;
      setTimeout(() => {
        this.successfullySubscribed = false;
      }, 3000);
    })
    .catch(error => {
      this.alreadySubscribed = true;
      setTimeout(() => {
        this.alreadySubscribed = false;
      }, 3000);
    });
    // this.gtmService.pushTag({
    //   event: 'mailingList',
    //   email: this.form.get('email')?.value,
    // });
  }
}
