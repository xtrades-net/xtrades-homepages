import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { HeaderElement } from '../header-models';

@Component({
  selector: 'app-header-element',
  templateUrl: './header-element.component.html',
  styleUrls: ['./header-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderElementComponent implements OnInit {
  @Input() data!: HeaderElement;

  showMenu = false;
  constructor() {}

  ngOnInit(): void {}

  onClick(event: Event) {
    window.location.href = this.data.directUrl ? this.data.directUrl : '';
  }

  onHover(event: Event) {}
}
