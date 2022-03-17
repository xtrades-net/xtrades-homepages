import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AutoUnsub } from '@core/decorators';
import { MenuDropdownElement } from './menu-dropdown-element/menu-dropdown-element.component';

export class MenuElement {
  constructor(public title: string, public url: string, public img: string) {}
  static apply(data: { title: string; url: string; img: string }) {
    return new MenuElement(data.title, data.url, data.img);
  }
}

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.scss'],
})
@AutoUnsub()
export class MenuDropdownComponent implements OnInit {
  @Input() data!: MenuDropdownElement[];
  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
}
