import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ScreenService } from '@core/screen.service';
import * as _ from 'lodash';
import { SubscribeService } from '../modal/subscribe-modal/subscribe.service';

@Component({
  selector: 'app-mailing-list',
  templateUrl: './mailing-list.component.html',
  styleUrls: ['./mailing-list.component.scss'],
})
export class MailingListComponent {
  @ViewChild('email') input: ElementRef | any;
  emailModel = {
    email: '',
  };

  isEmailValid = false;
  alreadySubscribed = false;

  constructor(
    public screenService: ScreenService,
    private subscribeService: SubscribeService,
    private cdr: ChangeDetectorRef
  ) {}

  handleGoToBetaAppClick(): void {
    window.location.href = 'https://app.xtrades.net/';
  }

  onSubmit() {
    if (!this.emailModel.email || !this.isEmailValid) {
      return;
    }
    this.confirmSubscription();
  }

  validateEmail = _.debounce((email: string) => {
    const regularExpression =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const oldEmailValidity = this.isEmailValid;
    this.isEmailValid = regularExpression.test(email.toLowerCase());
    if (oldEmailValidity !== this.isEmailValid) {
      this.cdr.markForCheck();
    }
  }, 200);

  confirmSubscription() {
    this.subscribeService
      .subscribeToMainHomepageList(this.input.value)
      .subscribe({
        next: (v) => this.subscribeSuccess(),
        error: (e) => alert('something went wrong :(, please try again later'),
      });
  }

  subscribeSuccess() {
    localStorage.setItem('isSubscribed', 'true');
    this.emailModel.email = '';
    this.alreadySubscribed = true;
  }
}
