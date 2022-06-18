import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html'
})
export class VideoModalComponent {
  @Input() modalId = '';
  @Input() play = false;
  @Output() triggerCloseModal = new EventEmitter();

  @ViewChild("player") player!: ElementRef; 

  ngOnChanges() {
    if (this.player && this.player.nativeElement) {
      this.play ? this.player.nativeElement.play() : this.player.nativeElement.pause();
    }
  }

  onCloseModal() {
    this.triggerCloseModal.emit(this.modalId);
  }
}
