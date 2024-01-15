import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubscriptionService } from '@core/subscription.service';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { Subscription } from 'rxjs';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-mailing-list-new',
  templateUrl: './mailing-list-new.component.html',
  styleUrls: ['./mailing-list-new.component.scss'],
})
export class MailingListNewComponent implements OnInit {
  public alreadySubscribed = false;
  public successfullySubscribed = false;
  private subscribtion = new Subscription;
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  @Input() buttonBackground: string = '';
  @Input() width: string = '350px';
  @Input() height: string = '54px';
  @Input() buttonWidth: string = '54px';
  @Input() buttonText: string = '';

  constructor(private gtmService: GoogleTagManagerService, private mailSubscribtion: SubscriptionService) {}
  @ViewChild('alreadySubscribed') alreadySubscribedEmail!: ElementRef;
  ngOnInit(): void {}

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
