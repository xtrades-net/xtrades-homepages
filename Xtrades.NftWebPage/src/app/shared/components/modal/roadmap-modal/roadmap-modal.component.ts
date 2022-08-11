import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-roadmap-modal',
  templateUrl: './roadmap-modal.component.html',
  styleUrls: ['./roadmap-modal.component.scss']
})
export class RoadmapModalComponent {
  @Input() modalId = '';
  @Input() step: any;
  @Input() play = false;
  @Output() triggerCloseModal = new EventEmitter();

  onCloseModal() {
    this.triggerCloseModal.emit(this.modalId);
  }
}
