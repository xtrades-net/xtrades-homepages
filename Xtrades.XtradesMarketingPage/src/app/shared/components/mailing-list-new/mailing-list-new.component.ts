import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubscriptionService } from '@core/subscription.service';

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

  constructor(private mailSubscribtion: SubscriptionService) {}

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
