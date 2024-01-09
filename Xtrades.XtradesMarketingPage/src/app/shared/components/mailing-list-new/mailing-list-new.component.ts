import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-mailing-list-new',
  templateUrl: './mailing-list-new.component.html',
  styleUrls: ['./mailing-list-new.component.scss'],
})
export class MailingListNewComponent implements OnInit {
  public alreadySubscribed = false;
  public successfullySubscribed = false;
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  @Input() buttonBackground: string = '';
  @Input() width: string = '350px';
  @Input() height: string = '54px';
  @Input() buttonWidth: string = '54px';
  @Input() buttonText: string = '';

  constructor(private gtmService: GoogleTagManagerService) {}
  ngOnInit(): void {
    console.log(this.buttonBackground);
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    } else {
      this.confirmSubscription();
    }
  }

  confirmSubscription() {
    const subscribedEmails = JSON.parse(
      localStorage.getItem('subscribedEmails') || '[]'
    );
    if (subscribedEmails.length) {
      const existingEmail = subscribedEmails.find((el: string) => {
        return el === this.form.get('email')?.value;
      });
      if (existingEmail) {
        this.alreadySubscribed = true;
        setTimeout(() => {
          this.alreadySubscribed = false;
        }, 3000);
      } else {
        this.subscribeSuccess();
      }
    } else {
      this.subscribeSuccess();
    }
  }

  subscribeSuccess() {
    this.gtmService.pushTag({
      event: 'mailingList',
      email: this.form.get('email')?.value,
    });
    this.successfullySubscribed = true;
    setTimeout(() => {
      this.successfullySubscribed = false;
    }, 3000);
    const subscribedEmails = JSON.parse(
      localStorage.getItem('subscribedEmails') || '[]'
    );
    subscribedEmails.push(this.form.get('email')?.value);
    localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));
  }
}
