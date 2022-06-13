import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss'],
})
export class ErrorModalComponent {
  @Input() modalId = '';

  @Output() triggerCloseModal = new EventEmitter();

  constructor() {}

  onCloseModal() {
    this.triggerCloseModal.emit(this.modalId);
  }
}
