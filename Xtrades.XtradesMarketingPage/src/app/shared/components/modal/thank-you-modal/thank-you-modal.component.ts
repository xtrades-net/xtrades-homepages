import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-thank-you-modal',
  templateUrl: './thank-you-modal.component.html'
})
export class ThankYouModalComponent {
  @Input() modalId = '';
  @Input() play = false;
  @Output() triggerCloseModal = new EventEmitter();

  onCloseModal() {
    this.triggerCloseModal.emit(this.modalId);
  }
}
