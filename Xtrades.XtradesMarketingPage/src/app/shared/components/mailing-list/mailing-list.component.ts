import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ScreenService } from '@core/screen.service';
import * as _ from 'lodash';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-mailing-list',
  templateUrl: './mailing-list.component.html',
  styleUrls: ['./mailing-list.component.scss']
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
    private httpService: HttpClient,
    private cdr: ChangeDetectorRef
  ) { }

  handleGoToBetaAppClick(): void {
    window.location.href = 'https://app.beta.xtrades.net/';
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
    this.httpService
      .post(
        `${Utils.isLocalhost()
          ? '/emailOctopus'
          : 'https://hidden-bayou-43712.herokuapp.com/https://emailoctopus.com/api/1.5/'
        }lists/${Utils.isDevOrLocalhost()
          ? 'ae80632f-98e6-11ec-9258-0241b9615763'
          : '6e571cde-993d-11ec-9258-0241b9615763'
        }/contacts`,
        {
          api_key: 'a398538f-2712-49ca-8268-631ec7ad51bf',
          email_address: this.input.control.value,
        }
      )
      .subscribe({
        next: (res) => this.subscribeSuccess(),
        error: (error: HttpErrorResponse) => {
          if (
            error.error &&
            error.error.error &&
            error.error.error.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS'
          ) {
            this.subscribeSuccess();
          } else {
            alert('something went wrong :(, please try again later');
          }
        },
      });
  }

  subscribeSuccess() {
    localStorage.setItem('isSubscribed', 'true');
    this.emailModel.email = '';
    this.alreadySubscribed = true;
  }

}
