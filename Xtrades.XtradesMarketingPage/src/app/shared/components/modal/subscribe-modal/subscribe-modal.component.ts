import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import * as _ from 'lodash';
import { SubscribeService } from './subscribe.service';

@Component({
  selector: 'app-subscribe-modal',
  templateUrl: './subscribe-modal.component.html',
  styleUrls: ['./subscribe-modal.component.scss'],
})
export class SubscribeModalComponent {
  @Input() modalId = '';
  @ViewChild('email') input: ElementRef | any;
  emailModel = {
    email: '',
  };

  isEmailValid = false;
  isSuccessfullySubscibed = false;

  @Output() triggerCloseModal = new EventEmitter();

  constructor(
    private cdr: ChangeDetectorRef,
    private subscribeService: SubscribeService
  ) {}

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
    this.subscribeService.subscribeToList(this.input.value).subscribe({
      next: (v) => this.subscribeSuccess(),
      error: (e) => alert('something went wrong :(, please try again later'),
    });
  }

  subscribeSuccess() {
    localStorage.setItem('isSubscribedToMemberships', 'true');
    this.emailModel.email = '';
    this.isSuccessfullySubscibed = true;
  }

  onCloseModal() {
    this.triggerCloseModal.emit(this.modalId);
  }
}
