import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-x-button',
  templateUrl: './x-button.component.html',
  styleUrls: ['./x-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XButtonComponent {
  @Input() disabled = false;
  @Input() isColorInverted = false;

  constructor() {}

  @Output() triggerClick = new EventEmitter<Event>();

  handleOnClick() {
    if (!this.disabled) {
      this.triggerClick.emit();
    }
  }
}
