import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { HeaderElement } from '../header-models';
import { HeaderProvider } from '../header-provider/header-provider';

@Component({
  selector: 'app-header-element-list',
  templateUrl: './header-element-list.component.html',
  styleUrls: ['./header-element-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderElementListComponent {
  @Input() data: HeaderElement[] = [];

  constructor(public headerProvider: HeaderProvider) {}
}
